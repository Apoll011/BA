import { CtaLink } from "@/components/cta-link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col justify-center bg-white px-5 pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-royal">404</p>
        <h1 className="mt-4 max-w-xl text-5xl text-onyx">Esta página não está no atelier.</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-onyx/70">
          O endereço não corresponde a nenhum serviço, preço ou contacto.
        </p>
        <div className="mt-8">
          <CtaLink href="/">Voltar ao início</CtaLink>
        </div>
      </div>
    </div>
  );
}
