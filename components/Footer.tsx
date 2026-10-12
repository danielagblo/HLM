import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="h-2 safety-stripe" />
      <div className="grid gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <Logo inverted />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/65">
            Ghana’s official Linde Material Handling dealer. Forklifts, warehouse
            equipment, Magni telehandlers, OEM parts and factory-trained service
            from Tema.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quote" className="hover:text-paper">
                Request a quote
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">Tema</p>
          <p className="mt-4 text-sm leading-relaxed text-paper/75">{site.address}</p>
          <p className="mt-4 text-sm text-paper/75">
            Head office {site.hours.office}
            <br />
            Showroom {site.hours.showroom}
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">Talk to us</p>
          <a href={site.email && `mailto:${site.email}`} className="mt-4 block text-sm hover:text-brand">
            {site.email}
          </a>
          {site.phones.map((phone) => (
            <a key={phone.href} href={phone.href} className="mt-2 block text-lg font-display tracking-wide hover:text-brand">
              {phone.display}
            </a>
          ))}
          <a
            href={site.whatsapp.href}
            className="mt-6 inline-flex bg-brand px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-brand-dark"
          >
            WhatsApp sales
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-white/10 px-5 py-5 text-[11px] uppercase tracking-[0.18em] text-paper/40 md:flex-row md:justify-between lg:px-10">
        <p>© 2026 Halcyon MH LTD. All rights reserved.</p>
        <p>Linde · Magni · TVH · Tema, Ghana</p>
      </div>
    </footer>
  );
}
