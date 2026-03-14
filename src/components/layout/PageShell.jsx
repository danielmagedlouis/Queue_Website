import { motion as Motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function MouseAura() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const auraX = useSpring(mouseX, { stiffness: 140, damping: 22 });
  const auraY = useSpring(mouseY, { stiffness: 140, damping: 22 });
  const trailX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const trailY = useSpring(mouseY, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <Motion.div
        className="pointer-events-none fixed z-0 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl"
        style={{ left: auraX, top: auraY, x: "-50%", y: "-50%" }}
      />
      <Motion.div
        className="pointer-events-none fixed z-0 h-40 w-40 rounded-full border border-white/60 bg-white/20 blur-2xl"
        style={{ left: trailX, top: trailY, x: "-50%", y: "-50%" }}
      />
    </>
  );
}

export default function PageShell({ children }) {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(196,181,253,0.22),transparent_22%),linear-gradient(180deg,#ffffff_0%,#f8fafc_52%,#eef2ff_100%)] text-slate-900">
      <MouseAura />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute right-[-8rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute left-[-8rem] top-[62rem] h-[22rem] w-[22rem] rounded-full bg-violet-200/25 blur-3xl" />
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:88px_88px]" />
        </div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
