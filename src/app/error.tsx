"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-svh flex-col items-start justify-center bg-white px-5 pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-royal">Erro</p>
        <h1 className="mt-4 max-w-xl text-5xl text-onyx">Não foi possível abrir esta página.</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-onyx/70">
          Volte a tentar. Se continuar, ligue para o atelier.
        </p>
        <Button
          type="button"
          className="mt-8 h-12 rounded-full bg-royal px-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white hover:bg-royal/90"
          onClick={() => reset()}
        >
          Tentar de novo
        </Button>
      </div>
    </div>
  );
}
