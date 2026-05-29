type ProjectStarsProps = {
  stars: number;
  className?: string;
};

export function ProjectStars({ stars, className = "" }: ProjectStarsProps) {
  const clamped = Math.min(5, Math.max(0, Math.round(stars)));

  return (
    <span
      className={`inline-flex gap-px text-[11px] leading-none tracking-tight sm:text-xs ${className}`}
      aria-label={`${clamped} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < clamped ? "text-red-400/95" : "text-zinc-600/80"}
          aria-hidden
        >
          ★
        </span>
      ))}
    </span>
  );
}
