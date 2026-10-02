import { tickerPhrases } from "@/lib/site";

function Row({ clone = false }: { clone?: boolean }) {
  return (
    <ul className={cnRow(clone)} aria-hidden="true">
      {Array.from({ length: 4 }).map((_, loop) =>
        tickerPhrases.map((phrase) => (
          <li key={`${phrase}-${loop}`} className="flex items-center">
            <span className="ticker-glow px-5 font-mono text-[0.78rem] uppercase tracking-[0.28em] sm:px-7">
              {phrase}
            </span>
            <span className="text-royal" aria-hidden="true">
              •
            </span>
          </li>
        )),
      )}
    </ul>
  );
}

function cnRow(clone: boolean) {
  return clone ? "marquee-clone flex shrink-0 items-center" : "flex shrink-0 items-center";
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-onyx py-4">
      <p className="sr-only">Pneus, lavagens, detalhe de assinatura, correção de pintura.</p>
      <div className="marquee-track">
        <Row />
        <Row clone />
      </div>
    </div>
  );
}
