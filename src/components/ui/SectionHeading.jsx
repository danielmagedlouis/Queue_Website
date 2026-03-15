import ExpandableText from "./ExpandableText";

export default function SectionHeading({
  align = "left",
  className = "",
  description,
  descriptionClassName = "",
  eyebrow,
  eyebrowClassName = "",
  locale = "en",
  mobileDescription,
  mobileTitle,
  title,
  titleClassName = "",
}) {
  const alignClassName =
    align === "center"
      ? "mx-auto max-w-[22rem] text-center sm:max-w-xl md:max-w-3xl"
      : "max-w-[22rem] sm:max-w-xl md:max-w-3xl";

  return (
    <div className={`${alignClassName} space-y-4 ${className}`.trim()}>
      {eyebrow ? (
        <p className={`text-sm font-semibold uppercase tracking-[0.25em] text-purple-700 ${eyebrowClassName}`.trim()}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-[1.55rem] font-bold leading-[1.08] text-slate-950 sm:text-4xl lg:text-5xl ${titleClassName}`.trim()}>
        <span className="md:hidden">{mobileTitle ?? title}</span>
        <span className="hidden md:inline">{title}</span>
      </h2>
      {description ? (
        <ExpandableText
          className={`max-w-[21rem] text-[15px] leading-7 text-slate-600 sm:max-w-xl sm:text-base md:text-lg ${descriptionClassName}`.trim()}
          desktopText={description}
          locale={locale}
          mobileWords={9}
          text={mobileDescription ?? description}
        />
      ) : null}
    </div>
  );
}
