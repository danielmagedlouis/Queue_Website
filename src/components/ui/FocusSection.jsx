import { motion as Motion, useReducedMotion } from "framer-motion";

export default function FocusSection({
  children,
  className = "",
  innerClassName = "",
  trigger = "inView",
}) {
  const prefersReducedMotion = useReducedMotion();
  const animationProps = prefersReducedMotion
    ? { initial: false }
    : trigger === "mount"
      ? {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
        }
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.01, margin: "0px 0px 35% 0px" },
        };

  return (
    <section className={className}>
      <Motion.div
        {...animationProps}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={innerClassName}
      >
        {children}
      </Motion.div>
    </section>
  );
}
