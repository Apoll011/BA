export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="bg-white px-5 pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-royal">{kicker}</p>
        <h1 className="mt-4 max-w-4xl text-5xl text-onyx sm:text-6xl md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-onyx/75 md:text-lg">{lede}</p>
      </div>
    </header>
  );
}
