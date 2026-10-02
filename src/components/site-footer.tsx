import Link from "next/link";
import { addressLine, atelier, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-onyx/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-4xl text-onyx">BA</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-onyx/70">{atelier.tagline}</p>
          <p className="mt-6 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-onyx/45">
            Morada, telefone, horário e Instagram de exemplo
          </p>
        </div>
        <div>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-royal">Navegação</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-onyx/80 hover:text-onyx">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-royal">Contactos</p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-onyx/80">
            <p>{addressLine()}</p>
            <p>{atelier.address.country}</p>
            <p>
              <a href={`tel:${atelier.phoneTel}`} className="hover:text-royal">
                {atelier.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${atelier.email}`} className="hover:text-royal">
                {atelier.email}
              </a>
            </p>
            <p>
              <a href={atelier.instagramUrl} className="hover:text-royal" rel="noreferrer">
                {atelier.instagramHandle}
              </a>
            </p>
          </address>
        </div>
        <div>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-royal">Horário</p>
          <dl className="mt-4 space-y-3">
            {atelier.hours.map((slot) => (
              <div key={slot.label}>
                <dt className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-onyx/50">
                  {slot.label}
                </dt>
                <dd className="mt-1 text-sm text-onyx">{slot.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-onyx/10">
        <p className="mx-auto max-w-6xl px-5 py-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-onyx/45">
          © {new Date().getFullYear()} BA · Estoril
        </p>
      </div>
    </footer>
  );
}
