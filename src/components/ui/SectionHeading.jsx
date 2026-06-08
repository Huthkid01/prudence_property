export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "left"
        ? "text-left"
        : "text-right ml-auto";

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 ${
            light ? "text-accent" : "text-secondary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
