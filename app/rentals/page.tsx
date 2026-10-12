import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Rentals",
  description:
    "Short and long-term forklift and pallet truck rental from Halcyon MH in Tema, Ghana.",
};

export default function RentalsPage() {
  const plans = [
    {
      title: "Breakdown cover",
      body: "A truck on site while yours is in the workshop. Hours, not weeks, of lost throughput.",
    },
    {
      title: "Seasonal peak",
      body: "Cocoa, festive retail, port surges — extra pallet trucks and counterbalance units without capex.",
    },
    {
      title: "Project hire",
      body: "Construction and shutdowns. Magni telehandlers and IC trucks for the programme, then off the books.",
    },
    {
      title: "Try before you buy",
      body: "Run a Linde on your floor before the purchase order. The rental can credit toward a new truck.",
    },
  ];

  return (
    <>
      <PageHero
        kicker="Rentals"
        title="Capacity when the programme demands it."
        body="Halcyon MH rents forklifts and hand pallet trucks for short and long-term use. Cover a breakdown, a harvest, a construction spike — without tying up capital."
        image="/images/eq-h20.png"
      />

      <section className="px-5 py-16 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.title} className="border border-ink/10 bg-white p-7">
              <h2 className="font-display text-3xl uppercase">{plan.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{plan.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 border border-ink bg-ink px-6 py-10 text-paper">
          <h2 className="font-display text-4xl uppercase">Tell us the gap. We will fill it.</h2>
          <p className="mt-3 max-w-xl text-sm text-paper/70">
            Capacity, indoor or outdoor, how many weeks, where in Ghana. The quote wizard sends it
            straight to the rental desk on WhatsApp.
          </p>
          <Link href="/quote" className="mt-6 inline-block bg-brand px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
            Request a rental
          </Link>
        </div>
      </section>
    </>
  );
}
