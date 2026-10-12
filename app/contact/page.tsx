import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteWizard } from "@/components/QuoteWizard";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Halcyon MH LTD at D1 Zander Road, Community 18, Tema, or request a quote by WhatsApp.",
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`;

  return (
    <>
      <PageHero
        kicker="Tema"
        title="Come to the showroom. Or we will come to the site."
        body="Head office and workshop on Zander Road, Community 18. Showroom open evenings and Saturday. Sales answers WhatsApp the same day."
        image="/images/scene-port.png"
      />

      <section className="grid gap-px bg-ink/10 lg:grid-cols-3">
        <div className="bg-paper px-6 py-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Address</p>
          <p className="mt-3 text-sm leading-relaxed">{site.address}</p>
        </div>
        <div className="bg-paper px-6 py-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Hours</p>
          <p className="mt-3 text-sm leading-relaxed">
            Office {site.hours.office}
            <br />
            Showroom {site.hours.showroom}
          </p>
        </div>
        <div className="bg-paper px-6 py-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Direct</p>
          {site.phones.map((phone) => (
            <a key={phone.href} href={phone.href} className="mt-3 block font-display text-2xl uppercase hover:text-brand">
              {phone.display}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="mt-2 block text-sm hover:text-brand">
            {site.email}
          </a>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="min-h-[360px] bg-steel">
          <iframe
            title="Halcyon MH LTD location"
            src={mapSrc}
            className="h-full min-h-[360px] w-full border-0 grayscale"
            loading="lazy"
          />
        </div>
        <div className="px-5 py-12 lg:px-10">
          <h2 className="font-display text-4xl uppercase">Send a brief</h2>
          <p className="mt-3 text-sm text-ink/60">
            The same wizard used on the quote page. It does not dump into a void — it opens WhatsApp
            or email with a structured request.
          </p>
          <div className="mt-8">
            <QuoteWizard />
          </div>
        </div>
      </section>
    </>
  );
}
