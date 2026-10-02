const expected = 2_243_519;
const magic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const sourceUrl =
  "https://tmpfiles.org/dl/1790973219.ba099c71be5c0910/w6AEep3pavzF/bg.png";
const owner = "Apoll011";
const repo = "BA";
const token = process.env.GITHUB_TOKEN;
const api = `https://api.github.com/repos/${owner}/${repo}`;

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "ba-hero",
};

async function gh(pathname, { method = "GET", body } = {}) {
  const response = await fetch(`${api}${pathname}`, {
    method,
    headers: {
      ...headers,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${method} ${pathname} failed (${response.status}): ${text}`);
  }
  return text ? JSON.parse(text) : null;
}

const downloaded = Buffer.from(await (await fetch(sourceUrl)).arrayBuffer());
if (downloaded.length !== expected || !downloaded.subarray(0, magic.length).equals(magic)) {
  throw new Error(`Source photograph is not the expected PNG (${downloaded.length} bytes).`);
}

const created = await gh("/git/blobs", {
  method: "POST",
  body: { content: downloaded.toString("base64"), encoding: "base64" },
});

const current = await fetch(`${api}/contents/public/bg.png`, { headers });
if (current.status === 200) {
  const meta = await current.json();
  if (meta.sha === created.sha && meta.size === expected) {
    console.log(`public/bg.png is already blob ${created.sha} (${meta.size} bytes).`);
    process.exit(0);
  }
} else if (current.status !== 404) {
  throw new Error(`GET /contents/public/bg.png failed (${current.status}): ${await current.text()}`);
}

const stored = await gh(`/git/blobs/${created.sha}`);
const decoded = Buffer.from(String(stored.content).replace(/\n/g, ""), "base64");
if (stored.size !== expected || !decoded.equals(downloaded)) {
  throw new Error(`Git blob ${created.sha} did not round-trip (${stored.size} bytes).`);
}

const ref = await gh("/git/ref/heads/main");
const parent = ref.object.sha;
const parentCommit = await gh(`/git/commits/${parent}`);
const tree = await gh("/git/trees", {
  method: "POST",
  body: {
    base_tree: parentCommit.tree.sha,
    tree: [{ path: "public/bg.png", mode: "100644", type: "blob", sha: created.sha }],
  },
});
const commit = await gh("/git/commits", {
  method: "POST",
  body: {
    message: "Add the hero photograph\n\nStore public/bg.png through the Git blob API so the PNG bytes stay intact.",
    tree: tree.sha,
    parents: [parent],
  },
});
await gh("/git/refs/heads/main", {
  method: "PATCH",
  body: { sha: commit.sha },
});

console.log(`Published public/bg.png as blob ${created.sha} (${stored.size} bytes) in ${commit.sha}.`);
