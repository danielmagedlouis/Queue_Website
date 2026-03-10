import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

/* =========================
   Mouse Glow
========================= */
function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed w-96 h-96 bg-purple-600/20 blur-3xl rounded-full z-0"
    />
  );
}

/* =========================
   Tech Grid
========================= */
function TechGrid() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="w-full h-full bg-[linear-gradient(to_right,#9333ea33_1px,transparent_1px),linear-gradient(to_bottom,#9333ea33_1px,transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
}

/* =========================
   Modern Image
========================= */
function ModernImage({ src, alt, className }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      className={`relative group ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-xl border border-purple-500/20 shadow-2xl shadow-purple-600/20 transition-transform duration-500"
      />

      {/* Neon Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-2xl pointer-events-none"
      />

      {/* Floating Shadow */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 rounded-xl shadow-[0_0_50px_rgba(147,51,234,0.4)] pointer-events-none"
      />
    </motion.div>
  );
}

/* =========================
   Modern Button
========================= */
function ModernButton({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden bg-purple-600"
    >
      <span className="relative z-10">{children}</span>

      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
    </motion.button>
  );
}

/* =========================
   Home Page
========================= */
export default function Home({ navTo, setShowForm }) {
  return (
    <div className="relative space-y-0 overflow-hidden">
      <MouseGlow />
      <TechGrid />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Queue Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70"
          >
            Websites • Systems • AI Automations
          </motion.p>

          <div className="flex gap-4 justify-center pt-6">
            <ModernButton onClick={() => setShowForm(true)}>Start Project</ModernButton>
            <ModernButton onClick={() => navTo("services")}>Our Services</ModernButton>
          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Powerful Web Technology</h2>
            <p className="text-lg text-white/70">
              We build fast scalable websites and systems using modern technologies.
            </p>
          </div>
          <ModernImage
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
            alt="technology"
            className="w-full h-96"
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ModernImage
            src="https://images.unsplash.com/photo-1581092795368-3c55a1aa8b5f?w=600&q=80"
            alt="AI automation"
            className="w-full h-96"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Smart AI Automations</h2>
            <p className="text-lg text-white/70">
              Automate your business operations using advanced AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <ModernImage
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4431b2?w=600&q=80"
            alt="team work"
            className="w-full h-64"
          />
          <ModernImage
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80"
            alt="coding"
            className="w-full h-64"
          />
          <ModernImage
            src="https://images.unsplash.com/photo-1581091012184-7e9f464d5f52?w=600&q=80"
            alt="business strategy"
            className="w-full h-64"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 px-6 mt-24 border-t border-white/10 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=61585024646035"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/queue.solutions/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:queuesolutions25@gmail.com"
              className="hover:text-purple-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-white/70">Developed by Queue Team</p>
        </div>
      </footer>
    </div>
  );
}