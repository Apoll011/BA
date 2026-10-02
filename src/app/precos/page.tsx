import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { PageIntro } from "@/components/page-intro";
import { priceGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preços",
  description: "Preçário de pneus e lavagens do atelier BA, em euros. Alguns valores variam com o veículo.",
};

export default function PrecosPage() {
  return (
    <>
      <PageIntro
        kicker="Preçário"
        title="Preços"
        lede="Valores de pneus e de lavagens, em euros. Correção de pintura e proteção pedem orçamento depois de ver a superfície."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-16">
          {priceGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-32">
              <h2 className="text-4xl text-onyx sm:text-5xl">{group.title}</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[36rem] border-t border-onyx/15 text-left">
                  <caption className="sr-only">Preços de {group.title.toLowerCase()}</caption>
                  <thead>
                    <tr className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-onyx/50">
                      <th scope="col" className="py-3 pr-6 font-medium">
                        Serviço
                      </th>
                      <th scope="col" className="py-3 text-right font-medium">
                        Preço
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map(([service, price]) => (
                      <tr key={service} className="border-t border-onyx/10">
                        <th scope="row" className="py-4 pr-6 text-sm font-normal text-onyx">
                          {service}
                        </th>
                        <td className="py-4 text-right font-mono text-sm tracking-wide text-onyx">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <aside className="rounded-3xl bg-alabaster px-6 py-8 md:px-10">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-royal">Nota</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-onyx">
              Alguns preços variam com a medida da jante, o estado da pintura ou do habitáculo, e o próprio veículo. Peça orçamento antes de marcar correção, proteção ou um trabalho fora da lista.
            </p>
            <div className="mt-6">
              <CtaLink href="/contactos#marcar">Pedir orçamento</CtaLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
