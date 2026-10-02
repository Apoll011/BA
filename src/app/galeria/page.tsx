import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageIntro } from "@/components/page-intro";
import { atelier, galleryFrames } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Lugar das fotografias de oficina e de trabalho do atelier BA. Os painéis atuais são exemplos de composição.",
};

const tones: Record<(typeof galleryFrames)[number]["tone"], string> = {
  dark: "bg-onyx",
  azure: "bg-[radial-gradient(circle_at_30%_20%,#005ef0,transparent_46%),linear-gradient(160deg,#121212,#1c1c1c)]",
  split: "bg-[linear-gradient(115deg,#121212_0_46%,#d9dcd6_46%_70%,#ffffff_70%)]",
  light: "bg-[linear-gradient(180deg,#ffffff,#d9dcd6)]",
  mist: "bg-[radial-gradient(circle_at_70%_80%,rgb(0_94_240/0.55),transparent_42%),linear-gradient(#d9dcd6,#ffffff)]",
};

export default function GaleriaPage() {
  return (
    <>
      <PageIntro
        kicker="Oficina"
        title="Galeria"
        lede="As fotografias de oficina e de trabalho ainda não estão neste sítio. Os painéis são exemplos de composição, para o lugar que as imagens vão ocupar."
      />
      <section className="bg-white px-5 pb-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-onyx/10 bg-alabaster px-6 py-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-royal">Sem fotografias carregadas</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-onyx/75">
            Nada disto é uma fotografia de um carro tratado. Quando as imagens existirem, substituem estes exemplos. O trabalho publicado está no Instagram.
          </p>
        </div>
        <ul className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryFrames.map((frame) => (
            <li key={frame.title}>
              <figure className={`relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl border border-onyx/10 p-5 ${tones[frame.tone]}`}>
                <figcaption>
                  <p className={`font-mono text-[0.62rem] uppercase tracking-[0.2em] ${frame.tone === "light" || frame.tone === "mist" ? "text-onyx/60" : "text-white/70"}`}>
                    Exemplo
                  </p>
                  <p className={`mt-2 text-3xl ${frame.tone === "light" || frame.tone === "mist" ? "text-onyx" : "text-white"}`}>
                    {frame.title}
                  </p>
                  <p className={`mt-2 text-xs ${frame.tone === "light" || frame.tone === "mist" ? "text-onyx/60" : "text-white/75"}`}>
                    Composição de marcação, sem fotografia.
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-white px-5 py-16" aria-labelledby="antes-depois">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-royal">Antes / depois</p>
          <h2 id="antes-depois" className="mt-4 max-w-xl text-4xl text-onyx sm:text-5xl">
            O par, quando houver trabalho para mostrar.
          </h2>
          <div className="mt-8 grid overflow-hidden rounded-3xl border border-onyx/10 md:grid-cols-2">
            <div className="flex min-h-72 flex-col justify-between bg-onyx p-6 text-white">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-alabaster">Antes</p>
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/60">Exemplo</p>
                <p className="mt-2 text-3xl">Estado de entrada</p>
                <p className="mt-2 max-w-sm text-sm text-white/70">Moldura vazia. Não representa um automóvel real.</p>
              </div>
            </div>
            <div className="flex min-h-72 flex-col justify-between bg-[linear-gradient(160deg,#d9dcd6,#ffffff)] p-6 text-onyx">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-royal">Depois</p>
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-onyx/50">Exemplo</p>
                <p className="mt-2 text-3xl">Estado de saída</p>
                <p className="mt-2 max-w-sm text-sm text-onyx/70">O mesmo lugar, à espera da fotografia de entrega.</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <CtaLink href={atelier.instagramUrl}>Ver no Instagram</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
