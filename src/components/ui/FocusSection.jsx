import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FocusSection({
  children,
  className = "",
  inactiveOpacity = 0.58,
  inactiveScale = 0.992,
  innerClassName = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.25, margin: "-18% 0px -18% 0px" });

  return (
    <Motion.section
      ref={ref}
      animate={{
        opacity: inView ? 1 : inactiveOpacity,
        scale: inView ? 1 : inactiveScale,
      }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <div className={innerClassName}>{children}</div>
    </Motion.section>
  );
}
