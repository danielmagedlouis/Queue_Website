import { motion as Motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Reveal({ children, className = "", delay = 0, y = 28, trigger = "inView" }) {
  const prefersReducedMotion = useReducedMotion();
  const [disableReveal, setDisableReveal] = useState(() => {
    if (typeof window === "undefined") {
      return prefersReducedMotion;
    }

    return prefersReducedMotion || window.matchMedia("(max-width: 767px)").matches;
  });

  const animationProps = disableReveal
    ? { initial: false }
    : trigger === "mount"
      ? {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
        }
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
        };

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateDisableReveal = () => {
      setDisableReveal(prefersReducedMotion || mobileQuery.matches);
    };

    updateDisableReveal();
    mobileQuery.addEventListener("change", updateDisableReveal);

    return () => {
      mobileQuery.removeEventListener("change", updateDisableReveal);
    };
  }, [prefersReducedMotion]);

  return (
    <Motion.div
      {...animationProps}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Motion.div>
  );
}
