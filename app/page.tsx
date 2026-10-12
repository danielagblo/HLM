import Image from "next/image";
import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import {
  categories,
  industries,
  partners,
  pillars,
  products,
  scenes,
  services,
  site,
  stats,
  testimonials,
} from "@/lib/content";

export default function HomePage() {
  const featured = products.filter((p) =>
    ["h20-h35", "e20-e35", "r10-r25", "magni-telehandler"].includes(p.slug),
  );

  return (
    <>
      <section className="relative flex min-h-[calc(100svh-5.75rem)] flex-col overflow-hidden bg-ink text-paper">
        <Image
          src={scenes.hero}
          alt="Linde forklift in a warehouse"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/35" />
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
        <div className="absolute left-0 top-0 h-full w-2 safety-stripe" />

        <div className="relative flex flex-1 flex-col justify-center px-5 py-12 lg:px-10">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-brand">
                Tema · Est. {site.established} · Sole Linde dealer
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-[3.4rem] uppercase leading-[0.88] sm:text-7xl lg:text-[7.2rem]">
                Keep Ghana
                <span className="block text-brand">moving.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
                Official Linde Material Handling dealer. Forklifts, warehouse
                trucks, Magni telehandlers, next-day OEM parts and
                factory-trained service — from our Tema showroom to every site
                in the country.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/quote"
                  className="bg-brand px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-brand-dark"
                >
                  Request a quote
                </Link>
                <Link
                  href="/products"
                  className="border border-white/25 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] hover:border-paper"
                >
                  Browse equipment
                </Link>
              </div>
            </div>

            <aside className="border border-white/15 bg-ink/70 p-6 backdrop-blur lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">
                In the yard now
              </p>
              <p className="mt-3 font-display text-5xl uppercase leading-none">H20–H35</p>
              <p className="mt-2 text-sm text-paper/60">IC truck · 2.0–3.5 t · hydrostatic drive</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/55">
                <div>
                  <dt>Capacity</dt>
                  <dd className="mt-1 text-paper">2.0 – 3.5 t</dd>
                </div>
                <div>
                  <dt>Drive</dt>
                  <dd className="mt-1 text-paper">Hydrostatic</dd>
                </div>
                <div>
                  <dt>Duty</dt>
                  <dd className="mt-1 text-paper">Multi-shift outdoor</dd>
                </div>
                <div>
                  <dt>Fuel</dt>
                  <dd className="mt-1 text-paper">Diesel / LPG</dd>
                </div>
              </dl>
              <Link href="/products/h20-h35" className="mt-6 block text-[12px] uppercase tracking-[0.18em] text-brand">
                View specifications →
              </Link>
            </aside>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink/80 px-4 py-5">
                <p className="font-display text-4xl uppercase text-paper">{stat.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper px-5 py-10 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          Global partners · Local accountability
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} className="border-l-2 border-brand pl-4">
              <p className="font-display text-2xl uppercase">{partner.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {partner.role}
              </p>
              <p className="mt-2 text-sm text-ink/60">{partner.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="paper-grid px-5 py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">Equipment</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none sm:text-6xl">
              Find the right truck
            </h2>
          </div>
          <Link href="/products" className="text-[12px] font-semibold uppercase tracking-[0.16em]">
            Full catalogue →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/products?line=${cat.slug}`}
              className="group overflow-hidden border border-ink/10 bg-white transition hover:border-brand"
            >
              <div className="relative h-40">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1280px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <span className="absolute left-4 top-3 font-mono text-[11px] text-paper">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl uppercase">{cat.title}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
                  {cat.range}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/60">{cat.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-paper lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
          Why operators choose Linde
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-5xl uppercase leading-none">
          Productivity. Safety. Ergonomics.
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="border-t border-white/15 pt-6">
              <p className="font-mono text-brand">{pillar.index}</p>
              <h3 className="mt-3 font-display text-3xl uppercase">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/65">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">Featured</p>
            <h2 className="mt-3 font-display text-5xl uppercase">On the floor in Ghana</h2>
          </div>
          <Link href="/quote" className="bg-brand px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
            Configure a quote
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group grid overflow-hidden border border-ink/10 bg-white md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <ProductVisual
                  model={product.model}
                  category={product.category}
                  image={product.image}
                  className="h-full min-h-52"
                />
              </div>
              <div className="p-6 md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {product.category}
                </p>
                <h3 className="mt-2 font-display text-4xl uppercase">{product.model}</h3>
                <p className="mt-1 text-sm text-brand">{product.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{product.summary}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
                  {product.capacity} · {product.lift}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sand px-5 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative mb-6 h-56 overflow-hidden">
              <Image
                src={scenes.workshop}
                alt="Halcyon workshop technicians"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">Aftersales</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none">
              The truck is only half the contract
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/65">
              Linde runs 8,500 technicians at 700 sites worldwide. In Ghana, that
              network is Halcyon — workshop in Tema, parts overnight, operators
              and safety checks when you need them.
            </p>
            <Link href="/services" className="mt-6 inline-block text-[12px] font-semibold uppercase tracking-[0.16em]">
              See all services →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {services.slice(0, 6).map((service) => (
              <article key={service.slug} className="border border-ink/10 bg-paper p-5">
                <h3 className="font-display text-2xl uppercase">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">Industries</p>
        <h2 className="mt-3 font-display text-5xl uppercase">Built for Ghanaian duty cycles</h2>
        <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.title} className="bg-paper p-6">
              <h3 className="font-display text-2xl uppercase">{industry.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{industry.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-paper lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">Customers</p>
        <h2 className="mt-3 font-display text-5xl uppercase">What operators tell us</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="border border-white/10 p-6">
              <p className="text-lg leading-relaxed text-paper/85">“{item.quote}”</p>
              <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
                {item.name} · {item.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 text-paper lg:px-10">
        <Image
          src={scenes.port}
          alt="Industrial logistics in Tema"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
            Showroom · Community 18, Tema
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-none sm:text-6xl">
            See the trucks. Meet the technicians. Leave with a spec.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-paper/70">
            Head office {site.hours.office}. Showroom {site.hours.showroom}. Or skip the drive — send a
            quote request and we will call you back the same day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/quote" className="bg-brand px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
              Start a quote
            </Link>
            <a
              href={site.phones[0].href}
              className="border border-paper/40 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em]"
            >
              Call {site.phones[0].display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
