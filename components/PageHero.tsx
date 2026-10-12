import Image from "next/image";
import Link from "next/link";

export function PageHero({
  kicker,
  title,
  body,
  actions = true,
  image,
}: {
  kicker: string;
  title: string;
  body: string;
  actions?: boolean;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-16 text-paper md:pt-20">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute left-0 top-0 h-full w-1.5 safety-stripe" />
      <div className="relative px-5 pb-16 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">{kicker}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70">{body}</p>
        {actions ? (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="bg-brand px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-brand-dark"
            >
              Request a quote
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-paper hover:border-paper"
            >
              Visit the showroom
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
