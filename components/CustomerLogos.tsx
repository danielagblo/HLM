import Image from "next/image";
import { customers } from "@/lib/content";

export function CustomerLogos({
  named = false,
  dense = false,
}: {
  named?: boolean;
  dense?: boolean;
}) {
  return (
    <ul
      className={`grid gap-px bg-ink/10 ${
        dense
          ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7"
          : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
      }`}
    >
      {customers.map((customer) => (
        <li key={customer.name}>
          <figure
            className={`flex flex-col items-center justify-center bg-white px-4 ${
              named ? "h-32 py-4" : "h-[5.5rem]"
            }`}
          >
            <Image
              src={customer.logo}
              alt={customer.name}
              width={180}
              height={72}
              className="customer-mark h-11 w-auto max-w-[148px] object-contain"
            />
            {named ? (
              <figcaption className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
                {customer.name}
              </figcaption>
            ) : (
              <figcaption className="sr-only">{customer.name}</figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
