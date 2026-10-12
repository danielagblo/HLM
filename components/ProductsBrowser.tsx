"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductVisual } from "@/components/ProductVisual";
import { categories, products } from "@/lib/content";

export function ProductsBrowser() {
  const params = useSearchParams();
  const line = params.get("line");

  const filtered = useMemo(
    () => (line ? products.filter((p) => p.categorySlug === line) : products),
    [line],
  );

  const active = categories.find((c) => c.slug === line);

  return (
    <>
      <section className="border-b border-ink/10 bg-paper px-5 py-6 lg:px-10">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/products"
            className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${
              !line ? "bg-brand text-white" : "border border-ink/15 hover:border-brand"
            }`}
          >
            All equipment
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?line=${cat.slug}`}
              className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                line === cat.slug ? "bg-brand text-white" : "border border-ink/15 hover:border-brand"
              }`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
        {active ? <p className="mt-4 max-w-3xl text-sm text-ink/60">{active.body}</p> : null}
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col border border-ink/10 bg-white"
            >
              <ProductVisual model={product.model} category={product.category} image={product.image} />
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-3xl uppercase">{product.model}</h2>
                <p className="mt-1 text-sm text-brand">{product.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{product.summary}</p>
                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-ink/10 pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/50">
                  <div>
                    <dt>Capacity</dt>
                    <dd className="mt-1 text-ink">{product.capacity}</dd>
                  </div>
                  <div>
                    <dt>Lift</dt>
                    <dd className="mt-1 text-ink">{product.lift}</dd>
                  </div>
                </dl>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
