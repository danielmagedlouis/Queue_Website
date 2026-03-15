import { motion as Motion } from "framer-motion";

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 sm:px-8 sm:py-4";

const variantClassNames = {
  primary:
    "bg-slate-950 text-white shadow-[0_20px_45px_rgba(15,23,42,0.18)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.22)]",
  secondary:
    "border border-slate-300/85 bg-slate-100/92 text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.08)] hover:border-purple-300 hover:text-purple-700",
  subtle:
    "border border-purple-200 bg-purple-50 text-purple-700 shadow-[0_10px_25px_rgba(168,85,247,0.12)] hover:bg-purple-100",
};

export default function ActionButton({
  children,
  className = "",
  disabled = false,
  href,
  onClick,
  rel,
  target,
  type = "button",
  variant = "primary",
}) {
  const sharedProps = {
    whileHover: disabled ? undefined : { scale: 1.03, y: -2 },
    whileTap: disabled ? undefined : { scale: 0.98 },
    className: `${baseClassName} ${variantClassNames[variant]} ${disabled ? "cursor-not-allowed opacity-60" : ""} ${className}`.trim(),
  };

  if (href) {
    return (
      <Motion.a {...sharedProps} href={href} rel={rel} target={target}>
        {children}
      </Motion.a>
    );
  }

  return (
    <Motion.button {...sharedProps} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </Motion.button>
  );
}
