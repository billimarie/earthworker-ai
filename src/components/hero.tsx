import { audienceVariants } from "@/lib/audienceVariants";

type HeroProps = { audience: string };

export default function Hero({ audience }: HeroProps) {
  const variant = audienceVariants[audience] ?? audienceVariants["default"];

  return (
    <div>
      <h2 className={`text-2xl md:text-3xl font-semibold tracking-tight ${
    variant.accentColor}`}>
        {variant.heroHeadline}
      </h2>
      {/* other hero content */}
    </div>
  );
}
