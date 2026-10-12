import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ink px-5 py-24 text-center text-paper">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">404</p>
      <h1 className="mt-4 font-display text-6xl uppercase">Aisle empty</h1>
      <p className="mt-4 max-w-md text-sm text-paper/60">
        That page is not in the catalogue. Head back to equipment, service or the quote desk.
      </p>
      <Link href="/" className="mt-8 bg-brand px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
        Return home
      </Link>
    </section>
  );
}
