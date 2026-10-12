import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteWizard } from "@/components/QuoteWizard";

export const metadata: Metadata = {
  title: "OEM parts",
  description:
    "Genuine Linde spare parts and the TVH catalogue, delivered nationwide from Halcyon MH in Tema — often the next day.",
};

export default function PartsPage() {
  return (
    <>
      <PageHero
        kicker="Parts"
        title="The part arrives. The line restarts."
        body="Halcyon MH’s spare-parts desk delivers nationwide, around the clock, and in most cases the following day. Genuine Linde OEM plus the TVH Belgium catalogue — the largest, most cost-efficient parts network in Europe."
        image="/images/scene-parts.png"
      />

      <section className="grid gap-px bg-ink/10 md:grid-cols-3">
        {[
          ["OEM", "Genuine Linde components, matched to serial number."],
          ["TVH", "Europe’s deepest aftermarket range when OEM is not required."],
          ["Nationwide", "Tema stock plus overnight dispatch across Ghana."],
        ].map(([title, body]) => (
          <div key={title} className="bg-paper px-6 py-10">
            <h2 className="font-display text-3xl uppercase">{title}</h2>
            <p className="mt-3 text-sm text-ink/60">{body}</p>
          </div>
        ))}
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl uppercase">How to order</h2>
            <ol className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
              <li>
                <strong className="text-ink">1. Serial number.</strong> Off the data plate — we will not
                guess a filter by photograph.
              </li>
              <li>
                <strong className="text-ink">2. What failed.</strong> Symptom, hours, and whether the truck
                is down.
              </li>
              <li>
                <strong className="text-ink">3. Where it needs to land.</strong> Tema collection or dispatch
                to site.
              </li>
            </ol>
            <p className="mt-6 text-sm text-ink/60">
              Use the form for a parts request. It opens WhatsApp with the detail our store needs.
            </p>
          </div>
          <div className="lg:col-span-7">
            <QuoteWizard defaultIntent="parts" />
          </div>
        </div>
      </section>
    </>
  );
}
