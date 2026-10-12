import Image from "next/image";

export function Logo({
  inverted = false,
  size = "md",
}: {
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const height = { sm: "h-8", md: "h-12", lg: "h-14" }[size];

  return (
    <span className="inline-flex items-center">
      <Image
        src={inverted ? "/images/logo-halcyon-light.png" : "/images/logo-halcyon.png"}
        alt="Halcyon MH"
        width={248}
        height={59}
        className={`${height} w-auto`}
        quality={100}
        priority
      />
    </span>
  );
}
