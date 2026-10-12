"use client";

import { useMemo, useState } from "react";
import { categories, site } from "@/lib/content";

const intents = [
  { id: "buy", label: "Buy new equipment" },
  { id: "rent", label: "Rent equipment" },
  { id: "service", label: "Service or repair" },
  { id: "parts", label: "OEM spare parts" },
  { id: "consult", label: "Fleet consultation" },
] as const;

const capacities = ["Under 1.5 t", "1.5 – 3.5 t", "3.5 – 8 t", "8 t and above", "Not sure yet"];
const timelines = ["This week", "This month", "This quarter", "Planning for next year"];

type FormState = {
  intent: string;
  category: string;
  capacity: string;
  timeline: string;
  company: string;
  name: string;
  phone: string;
  city: string;
  notes: string;
};

const empty: FormState = {
  intent: "",
  category: "",
  capacity: "",
  timeline: "",
  company: "",
  name: "",
  phone: "",
  city: "",
  notes: "",
};

function Option({
  selected,
  children,
  onClick,
}: {
  selected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-4 py-3 text-left text-sm transition ${
        selected
          ? "border-brand bg-brand text-white"
          : "border-ink/15 bg-white hover:border-brand"
      }`}
    >
      {children}
    </button>
  );
}

export function QuoteWizard({ defaultIntent = "" }: { defaultIntent?: string }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({ ...empty, intent: defaultIntent });

  const needsEquipment = form.intent === "buy" || form.intent === "rent";
  const total = needsEquipment ? 3 : 2;

  const message = useMemo(() => {
    const intentLabel = intents.find((i) => i.id === form.intent)?.label ?? form.intent;
    const lines = [
      `Quote request from the Halcyon MH website`,
      `Need: ${intentLabel}`,
      form.category ? `Equipment: ${form.category}` : "",
      form.capacity ? `Capacity: ${form.capacity}` : "",
      form.timeline ? `Timeline: ${form.timeline}` : "",
      `Company: ${form.company}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  }, [form]);

  const wa = `${site.whatsapp.href}?text=${encodeURIComponent(message)}`;
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Quote request — Halcyon MH")}&body=${encodeURIComponent(message)}`;

  const canNext =
    (step === 0 && form.intent) ||
    (step === 1 && needsEquipment && form.category && form.capacity && form.timeline) ||
    (step === 1 && !needsEquipment && form.name && form.phone && form.company) ||
    (step === 2 && form.name && form.phone && form.company);

  function next() {
    if (step < total) setStep((s) => s + 1);
  }

  return (
    <div className="border border-ink/10 bg-white">
      <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Step {Math.min(step + 1, total + 1)} of {total + 1}
        </p>
        <div className="flex gap-1">
          {Array.from({ length: total + 1 }).map((_, i) => (
            <span
              key={i}
              className={`h-1 w-8 ${i <= step ? "bg-brand" : "bg-ink/10"}`}
            />
          ))}
        </div>
      </div>

      <div className="px-5 py-8 md:px-8">
        {step === 0 ? (
          <>
            <h2 className="font-display text-4xl uppercase">What do you need?</h2>
            <p className="mt-2 text-sm text-ink/60">
              We will route this to sales, the workshop or parts — no shopping cart, no waiting on a generic inbox.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {intents.map((intent) => (
                <Option
                  key={intent.id}
                  selected={form.intent === intent.id}
                  onClick={() => setForm({ ...form, intent: intent.id })}
                >
                  {intent.label}
                </Option>
              ))}
            </div>
          </>
        ) : null}

        {step === 1 && needsEquipment ? (
          <>
            <h2 className="font-display text-4xl uppercase">Specify the truck</h2>
            <p className="mt-2 text-sm text-ink/60">
              Approximate is enough. Our engineers will confirm on site if needed.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Category</p>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {categories.map((cat) => (
                <Option
                  key={cat.slug}
                  selected={form.category === cat.title}
                  onClick={() => setForm({ ...form, category: cat.title })}
                >
                  <span className="block font-semibold">{cat.title}</span>
                  <span className="text-xs opacity-70">{cat.range}</span>
                </Option>
              ))}
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Capacity</p>
            <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-5">
              {capacities.map((c) => (
                <Option
                  key={c}
                  selected={form.capacity === c}
                  onClick={() => setForm({ ...form, capacity: c })}
                >
                  {c}
                </Option>
              ))}
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Timeline</p>
            <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-4">
              {timelines.map((t) => (
                <Option
                  key={t}
                  selected={form.timeline === t}
                  onClick={() => setForm({ ...form, timeline: t })}
                >
                  {t}
                </Option>
              ))}
            </div>
          </>
        ) : null}

        {(step === 1 && !needsEquipment) || step === 2 ? (
          <>
            <h2 className="font-display text-4xl uppercase">How do we reach you?</h2>
            <p className="mt-2 text-sm text-ink/60">
              Send on WhatsApp for the fastest reply during showroom hours.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {(
                [
                  ["name", "Your name"],
                  ["company", "Company"],
                  ["phone", "Phone / WhatsApp"],
                  ["city", "City / site"],
                ] as const
              ).map(([key, label]) => (
                <label key={key} className="block text-sm">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {label}
                  </span>
                  <input
                    required
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="mt-1 w-full border border-ink/15 bg-paper px-3 py-3 outline-none focus:border-brand"
                  />
                </label>
              ))}
            </div>
            <label className="mt-4 block text-sm">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Anything else
              </span>
              <textarea
                rows={4}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="mt-1 w-full border border-ink/15 bg-paper px-3 py-3 outline-none focus:border-brand"
                placeholder="Shift pattern, existing fleet, site constraints…"
              />
            </label>
          </>
        ) : null}

        {step === total ? (
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">Ready to send</p>
            <h2 className="mt-2 font-display text-4xl uppercase">Your request is prepared</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65">
              WhatsApp is how most of our customers in Ghana get a same-day answer. Email works too if you prefer a paper trail.
            </p>
            <pre className="mt-6 overflow-x-auto bg-ink p-5 font-mono text-xs leading-relaxed text-paper/80">
              {message}
            </pre>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={wa}
                className="bg-[#1aad57] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                Send on WhatsApp
              </a>
              <a
                href={mail}
                className="border border-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em]"
              >
                Send by email
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="text-sm uppercase tracking-[0.16em] text-ink/50 disabled:invisible"
              disabled={step === 0}
            >
              Back
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className="bg-brand px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
