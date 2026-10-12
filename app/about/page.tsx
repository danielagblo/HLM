import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { partners, pillars, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Halcyon MH LTD, established October 2010 in Tema, is Ghana’s most active material handling supplier and the sole Linde dealer in the country.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Since October 2010"
        title="The most active material handling company in Ghana."
        body="Halcyon MH Limited exists to give customers practical solutions nobody else in the market can match — by partnering with Linde Material Handling, Magni Telescopic Handlers and TVH Belgium."
        image="/images/scene-port.png"
      />

      <section className="px-5 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl uppercase">Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              Halcyon is the preferred and most cost-efficient material handling equipment company
              in Ghana.
            </p>
          </div>
          <div>
            <h2 className="font-display text-4xl uppercase">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              To provide Linde and Magni lift trucks to as many companies in Ghana through a trusted
              nationwide network of partners — and to make material handling a gratifying experience.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="border border-ink/10 bg-white p-6">
              <p className="font-mono text-brand">{pillar.index}</p>
              <h3 className="mt-2 font-display text-2xl uppercase">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand px-5 py-16 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">Partnerships</p>
        <h2 className="mt-3 font-display text-4xl uppercase">Three OEMs. One local desk.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {partners.map((partner) => (
            <article key={partner.name} className="bg-paper p-6">
              <h3 className="font-display text-2xl uppercase">{partner.name}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {partner.role}
              </p>
              <p className="mt-3 text-sm text-ink/65">{partner.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">Leadership</p>
        <h2 className="mt-3 font-display text-4xl uppercase">The management</h2>
        <div className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((person) => (
            <article key={person.name} className="bg-paper px-5 py-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center bg-ink font-display text-2xl text-paper">
                {person.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">{person.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">{person.role}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
