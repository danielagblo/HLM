import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ProductsBrowser } from "@/components/ProductsBrowser";

export const metadata = {
  title: "Equipment",
  description:
    "Linde electric and IC forklifts, reach trucks, pallet trucks, VNA, automated systems and Magni telehandlers available from Halcyon MH in Tema, Ghana.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Catalogue"
        title="Equipment specified for Ghanaian duty."
        body="Seventy-seven Linde series, electric and IC, warehouse equipment and Magni telehandlers. Filter by line, open a model, and send a specification request — not a shopping-cart checkout for a five-tonne truck."
        image="/images/eq-e20.png"
      />
      <Suspense fallback={<div className="px-5 py-20 text-sm text-ink/50">Loading catalogue…</div>}>
        <ProductsBrowser />
      </Suspense>
    </>
  );
}
