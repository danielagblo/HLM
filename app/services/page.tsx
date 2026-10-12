import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Service",
  description:
    "Maintenance, OEM parts, rentals, operator supply, statutory safety checks and Linde training from Halcyon MH in Tema, Ghana.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Aftersales"
        title="Uptime is the product."
        body="Material handling only works when the truck is on the floor. Halcyon MH is the Ghana node of Linde’s global service network — 8,500 technicians, 700 sites worldwide, and a workshop on Zander Road."
        image="/images/scene-workshop.png"
      />

      <section className="px-5 py-16 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <article key={service.slug} className="border border-ink/10 bg-white p-7">
              <p className="font-mono text-[11px] text-brand">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-3xl uppercase">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-paper lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl uppercase leading-none">
              Why fleets stay with Halcyon
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-paper/65">
              Choosing material-handling equipment is a long decision. With more than a decade on
              the ground in Ghana, we have learned that the winning bid is the one that still
              answers the phone in year seven.
            </p>
          </div>
          <ul className="space-y-5 text-sm">
            {[
              "Sole authorised Linde dealer in Ghana",
              "OEM parts, typically next-day nationwide",
              "Factory-trained workshop in Tema",
              "Short and long-term rental cover",
              "Statutory truck and racking inspections",
              "Operator training that actually changes behaviour",
            ].map((item) => (
              <li key={item} className="flex gap-3 border-b border-white/10 pb-4">
                <span className="text-brand">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/quote" className="mt-10 inline-block bg-brand px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
          Book a service visit
        </Link>
      </section>
    </>
  );
}
