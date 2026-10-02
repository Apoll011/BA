import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { ServiceCard } from "@/components/service-card";
import { Ticker } from "@/components/ticker";
import { atelier, heroImage, mapsUrl, processSteps, reasons, services } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-svh overflow-hidden bg-onyx text-white">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-5 py-32">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-alabaster">
            Estoril · {atelier.coordinates.label}
          </p>
          <p className="mt-6 font-display text-6xl italic leading-none text-white sm:text-7xl">BA</p>
          <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/80">
            {atelier.tagline}
          </p>
          <h1 className="mt-8 max-w-xl text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.92] text-white">
            O automóvel, tratado como peça de atelier.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/88 md:text-lg">
            Correção de pintura, proteção e lavagens de precisão numa oficina fechada. Um carro de cada vez, com tempo de ofício.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href={`tel:${atelier.phoneTel}`}>Ligar</CtaLink>
            <CtaLink href={mapsUrl()} tone="glass">
              Como chegar
            </CtaLink>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/servicos"
              className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/85 underline-offset-4 hover:text-white hover:underline"
            >
              Ver o ofício
            </Link>
            <Link
              href="/contactos#marcar"
              className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/85 underline-offset-4 hover:text-white hover:underline"
            >
              Marcar
            </Link>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="bg-onyx px-5 py-20 text-white md:py-28" aria-labelledby="servicos-titulo">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-royal">Serviços</p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 id="servicos-titulo" className="max-w-xl text-4xl text-white sm:text-6xl">
              Dois ofícios de entrada. O resto, à medida.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-alabaster">
              Pneus e lavagens têm lista e preço. Correção de pintura e detalhe de assinatura seguem o estado do carro.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10">
            <CtaLink href="/servicos" tone="glass">
              Ver serviços
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="bg-alabaster px-5 py-20 md:py-28" aria-labelledby="razoes-titulo">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-royal">Porquê a BA</p>
          <h2 id="razoes-titulo" className="mt-4 max-w-2xl text-4xl text-onyx sm:text-6xl">
            Menos pressa. Mais superfície vista de perto.
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason.number} className="border-t border-onyx/15 pt-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-royal">{reason.number}</p>
                <h3 className="mt-3 text-3xl text-onyx">{reason.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-onyx/75">{reason.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="ritual" className="scroll-mt-28 bg-white px-5 py-20 md:py-28" aria-labelledby="ritual-titulo">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-royal">Ritual</p>
            <h2 id="ritual-titulo" className="mt-4 text-4xl text-onyx sm:text-6xl">
              Cinco passos, sem atalhos.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-onyx/75">
              Da receção à entrega, o carro fica na mesma baía. O plano combina-se antes de se tocar na pintura.
            </p>
          </div>
          <ol className="relative ml-3 border-l border-onyx/15">
            {processSteps.map((step) => (
              <li key={step.number} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-royal" aria-hidden="true" />
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em]">
                  <span className="text-royal">{step.number}</span>
                  <span className="text-onyx/35"> / </span>
                  <span className="text-onyx">{step.title}</span>
                </p>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-onyx/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-onyx px-5 py-20 text-white md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-alabaster">Agenda</p>
            <h2 className="mt-4 max-w-xl text-4xl sm:text-6xl">A vaga abre por marcação.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink href={`tel:${atelier.phoneTel}`}>Ligar</CtaLink>
            <CtaLink href="/contactos#marcar" tone="glass">
              Pedir orçamento
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
