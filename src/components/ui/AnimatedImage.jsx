import { motion as Motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";
import Reveal from "./Reveal";

export default function AnimatedImage({ alt, className = "", imageClassName = "", src }) {
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
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden rounded-[1.75rem] border border-slate-300/70 bg-slate-100/76 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur sm:rounded-[2rem] sm:p-4 sm:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-sky-300/10 opacity-0 transition duration-500 group-hover:opacity-100" />
        <img
          src={src}
          alt={alt}
          className={`relative h-full w-full rounded-[1.25rem] object-cover object-center transition duration-700 group-hover:scale-[1.03] sm:rounded-[1.5rem] ${imageClassName}`.trim()}
        />
        <div className="pointer-events-none absolute inset-x-8 bottom-6 h-10 rounded-full bg-slate-900/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
      </Motion.div>
    </Reveal>
  );
}
