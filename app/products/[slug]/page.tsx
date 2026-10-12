import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductVisual } from "@/components/ProductVisual";
import { products } from "@/lib/content";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.model,
    description: product.summary,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative bg-ink text-paper">
        <div className="grid lg:grid-cols-2">
          <ProductVisual
            model={product.model}
            category={product.category}
            image={product.image}
            className="min-h-[50vh]"
          />
          <div className="flex flex-col justify-end px-5 py-12 lg:px-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">
              {product.category}
            </p>
            <h1 className="mt-3 font-display text-6xl uppercase leading-none sm:text-7xl">
              {product.model}
            </h1>
            <p className="mt-3 text-lg text-paper/70">{product.tagline}</p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper/65">{product.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/quote?model=${product.slug}`}
                className="bg-brand px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                Quote this model
              </Link>
              <Link
                href="/products"
                className="border border-white/20 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em]"
              >
                Back to catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-px bg-ink/10 md:grid-cols-3">
        {[
          ["Capacity", product.capacity],
          ["Lift height", product.lift],
          ["Power", product.power],
        ].map(([label, value]) => (
          <div key={label} className="bg-paper px-6 py-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{label}</p>
            <p className="mt-2 font-display text-3xl uppercase">{value}</p>
          </div>
        ))}
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl uppercase">Why this truck</h2>
            <ul className="mt-6 space-y-4">
              {product.highlights.map((item) => (
                <li key={item} className="flex gap-3 border-b border-ink/10 pb-4 text-sm leading-relaxed">
                  <span className="mt-1 h-2 w-2 shrink-0 bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="border border-ink/10 bg-sand p-6 lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              Specify for your site
            </p>
            <p className="mt-3 font-display text-3xl uppercase">
              Battery, mast, cabin and attachments are configured in Tema — not guessed from a brochure.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Tell us the aisle width, rack height, floor type and shift pattern. We will return a
              Linde build sheet, a rental option if you need cover, and a parts stocking plan.
            </p>
            <Link href="/quote" className="mt-6 inline-block bg-ink px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-paper">
              Talk to an engineer
            </Link>
          </aside>
        </div>

        {related.length > 0 ? (
          <div className="mt-16">
            <h2 className="font-display text-3xl uppercase">In the same line</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`} className="border border-ink/10 bg-white p-5">
                  <p className="font-display text-2xl uppercase">{item.model}</p>
                  <p className="mt-2 text-sm text-ink/60">{item.capacity}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
