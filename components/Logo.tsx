export function Logo({ inverted = false }: { inverted?: boolean }) {
  const mark = inverted ? "text-paper" : "text-ink";
  const sub = inverted ? "text-paper/55" : "text-ink/50";

  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 40 40"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="3" className="fill-brand" />
        <path
          d="M9 8h6.2v9.4H25V8H31.2v24H25v-9.2H15.2V32H9V8Z"
          fill="white"
        />
        <rect x="9" y="33.2" width="22.2" height="2.2" fill="white" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[1.35rem] font-semibold uppercase tracking-[0.12em] ${mark}`}>
          Halcyon
        </span>
        <span className={`mt-0.5 block font-mono text-[0.62rem] uppercase tracking-[0.28em] ${sub}`}>
          MH Ltd · Ghana
        </span>
      </span>
    </span>
  );
}
