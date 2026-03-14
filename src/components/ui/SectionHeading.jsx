export default function SectionHeading({
  align = "left",
  className = "",
  description,
  eyebrow,
  title,
}) {
  const alignClassName = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={`${alignClassName} space-y-4 ${className}`.trim()}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}
