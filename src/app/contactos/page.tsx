import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CtaLink } from "@/components/cta-link";
import { PageIntro } from "@/components/page-intro";
import { addressLine, atelier, mapEmbedUrl, mapsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Morada, telefone, horário e pedido de marcação do atelier BA, em Estoril.",
};

export default function ContactosPage() {
  return (
    <>
      <PageIntro
        kicker="Estoril"
        title="Contactos"
        lede="Ligue, peça o caminho ou deixe o pedido neste ecrã. A confirmação da vaga faz-se por telefone ou email."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-royal">Morada</p>
              <address className="mt-3 text-lg not-italic leading-relaxed text-onyx">
                {atelier.address.street}
                <br />
                {atelier.address.postalCode} {atelier.address.city}
                <br />
                {atelier.address.country}
              </address>
              <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-onyx/50">
                {atelier.coordinates.label}
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-royal">Telefone</p>
              <a href={`tel:${atelier.phoneTel}`} className="mt-3 block text-2xl text-onyx hover:text-royal">
                {atelier.phoneDisplay}
              </a>
              <a href={`mailto:${atelier.email}`} className="mt-2 block text-sm text-onyx/70 hover:text-royal">
                {atelier.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-royal">Horário</p>
              <dl className="mt-3 space-y-3">
                {atelier.hours.map((slot) => (
                  <div key={slot.label} className="flex items-baseline justify-between gap-4 border-b border-onyx/10 pb-3">
                    <dt className="text-sm text-onyx">{slot.label}</dt>
                    <dd className="font-mono text-sm text-onyx/70">{slot.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-wrap gap-3">
              <CtaLink href={`tel:${atelier.phoneTel}`}>Ligar</CtaLink>
              <CtaLink href={mapsUrl()} tone="line">
                Como chegar
              </CtaLink>
            </div>
            <p className="text-sm text-onyx/60">{addressLine()}. Dados de contacto de exemplo.</p>
          </div>
          <div id="marcar" className="scroll-mt-32">
            <ContactForm />
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl border border-onyx/10">
          <iframe
            title="Mapa do atelier BA em Estoril"
            src={mapEmbedUrl()}
            className="h-80 w-full md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
