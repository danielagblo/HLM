import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteWizard } from "@/components/QuoteWizard";

export const metadata: Metadata = {
  title: "Request a quote",
  description:
    "Request Linde equipment, rental, service or OEM parts from Halcyon MH in Tema. Sent by WhatsApp or email.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        kicker="Sales desk"
        title="A quote, not a shopping cart."
        body="Industrial equipment is specified, not added to a basket. Answer four questions and we will come back with a build, a rental option or a parts ETA — usually the same day."
        actions={false}
        image="/images/hero-warehouse.png"
      />
      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <QuoteWizard />
        </div>
      </section>
    </>
  );
}
