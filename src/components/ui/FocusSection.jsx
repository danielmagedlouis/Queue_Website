import { motion as Motion, useReducedMotion } from "framer-motion";

export default function FocusSection({
  children,
  className = "",
  innerClassName = "",
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <div className={innerClassName}>{children}</div>
    </Motion.section>
  );
}
