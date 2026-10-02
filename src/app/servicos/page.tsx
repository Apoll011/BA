import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageIntro } from "@/components/page-intro";
import { ServiceCard } from "@/components/service-card";
import { Ticker } from "@/components/ticker";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Pneus e lavagens no atelier BA, em Estoril. O que cada serviço inclui e como marcar.",
};

export default function ServicosPage() {
  return (
    <>
      <PageIntro
        kicker="Ofício"
        title="Serviços"
        lede="Pneus e lavagens com lista fechada. Correção de pintura, proteção e detalhe de assinatura tratam-se depois de ver o carro."
      />
      <Ticker />
      <section className="bg-onyx px-5 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end">
          <p className="max-w-xl text-sm leading-relaxed text-alabaster">
            Se o carro precisa de correção ou de cerâmico, descreva o estado na mensagem. O orçamento sai depois da receção, não por palpite.
          </p>
          <CtaLink href="/contactos#marcar">Marcar</CtaLink>
        </div>
      </section>
    </>
  );
}
