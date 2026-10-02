import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={service.slug}
      className="scroll-mt-32 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:border-royal/50 hover:shadow-[0_0_42px_rgb(0_94_240/0.28)] sm:p-8"
    >
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-royal">{service.kicker}</p>
      <h3 className="mt-3 text-4xl text-white sm:text-5xl">{service.title}</h3>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-alabaster">{service.summary}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/15 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/80"
          >
            {tag}
          </li>
        ))}
      </ul>
      <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/90">
        {service.includes.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-royal" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
