"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper">
      <div className="hidden items-center justify-between border-b border-white/10 px-6 py-2 text-[11px] uppercase tracking-[0.22em] text-paper/60 md:flex lg:px-10">
        <p>Sole Linde Material Handling dealer · Ghana</p>
        <div className="flex items-center gap-6">
          <span>{site.address}</span>
          <a href={site.phones[0].href} className="hover:text-brand">
            {site.phones[0].display}
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-4 lg:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Halcyon MH home"
          className="transition-opacity hover:opacity-90"
        >
          <Logo inverted size="md" />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[12px] font-semibold uppercase tracking-[0.14em] transition ${
                  active ? "text-brand" : "text-paper/80 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/quote"
            className="bg-brand px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-brand-dark"
          >
            Quote
          </Link>
        </nav>

        <button
          type="button"
          className="text-paper lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-8 w-8 flex-col justify-center gap-1.5">
            <span className="block h-px w-full bg-paper" />
            <span className="block h-px w-2/3 bg-paper" />
            <span className="block h-px w-full bg-paper" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-paper px-5 py-6 text-ink lg:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 bg-brand px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Request a quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
