import Image from "next/image";

export function ProductVisual({
  model,
  category,
  image,
  className = "",
}: {
  model: string;
  category: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-steel ${className}`}>
      <Image
        src={image}
        alt={`${model} ${category}`}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      <div className="relative flex h-full min-h-52 flex-col justify-between p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand drop-shadow">
          {category}
        </p>
        <p className="font-display text-4xl uppercase leading-none text-paper drop-shadow-lg">
          {model}
        </p>
      </div>
    </div>
  );
}
