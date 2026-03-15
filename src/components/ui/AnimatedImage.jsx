import { motion as Motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";
import Reveal from "./Reveal";

export default function AnimatedImage({ alt, className = "", imageClassName = "", src }) {
  const prefersReducedMotion = useReducedMotion();
  const interactive =
    typeof window !== "undefined" &&
    !prefersReducedMotion &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(smoothX, [-40, 40], [-8, 8]);
  const rotateX = useTransform(smoothY, [-40, 40], [8, -8]);

  const handleMove = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      pointerX.set((x / rect.width) * 80);
      pointerY.set((y / rect.height) * 80);
    },
    [pointerX, pointerY]
  );

  const handleLeave = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <Reveal className={className}>
      <Motion.div
        onMouseMove={interactive ? handleMove : undefined}
        onMouseLeave={interactive ? handleLeave : undefined}
        whileHover={interactive ? { y: -8, scale: 1.01 } : undefined}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={interactive ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className="group relative overflow-hidden rounded-[1.5rem] border border-slate-300/70 bg-slate-100/76 p-2 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-[2rem] sm:p-4 sm:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
      >
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-sky-300/10 transition duration-500 ${interactive ? "opacity-0 group-hover:opacity-100" : "opacity-40"}`} />
        <img
          src={src}
          alt={alt}
          className={`relative h-full w-full rounded-[1.1rem] object-cover object-center transition duration-700 ${interactive ? "group-hover:scale-[1.03]" : ""} sm:rounded-[1.5rem] ${imageClassName}`.trim()}
        />
        <div className={`pointer-events-none absolute inset-x-8 bottom-6 h-10 rounded-full bg-slate-900/10 blur-2xl transition duration-500 ${interactive ? "opacity-0 group-hover:opacity-100" : "opacity-0"}`} />
      </Motion.div>
    </Reveal>
  );
}
