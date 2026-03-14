import { useMemo, useState } from "react";

const MOBILE_LABELS = {
  ar: { more: "عرض المزيد", less: "عرض أقل" },
  en: { more: "See more", less: "See less" },
};

export default function ExpandableText({
  buttonClassName = "",
  className = "",
  desktopText,
  locale = "en",
  mobileWords = 8,
  text,
}) {
  const [expandedFor, setExpandedFor] = useState("");
  const desktopContent = desktopText ?? text;

  const words = useMemo(() => text.trim().split(/\s+/), [text]);
  const shouldCollapse = words.length > mobileWords;
  const collapsedText = shouldCollapse ? `${words.slice(0, mobileWords).join(" ")}...` : text;
  const labels = locale === "ar" ? MOBILE_LABELS.ar : MOBILE_LABELS.en;
  const expanded = expandedFor === text;

  return (
    <>
      <div className="md:hidden">
        <p className={className}>{expanded ? text : collapsedText}</p>
        {shouldCollapse ? (
          <button
            type="button"
            onClick={() => setExpandedFor((current) => (current === text ? "" : text))}
            className={`mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-purple-700 transition hover:text-purple-600 ${buttonClassName}`.trim()}
          >
            {expanded ? labels.less : labels.more}
          </button>
        ) : null}
      </div>
      <p className={`hidden md:block ${className}`.trim()}>{desktopContent}</p>
    </>
  );
}
