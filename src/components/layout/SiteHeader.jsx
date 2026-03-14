import { AnimatePresence, motion as Motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import ActionButton from "../ui/ActionButton";

export default function SiteHeader({
  content,
  currentPage,
  locale,
  mobileMenuOpen,
  navTo,
  setLocale,
  setMobileMenuOpen,
  setShowForm,
}) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const isRtl = content.direction === "rtl";
  const nextLocale = locale === "en" ? "ar" : "en";
  const languageFlag = nextLocale === "ar" ? "\u{1F1EA}\u{1F1EC}" : "\u{1F1FA}\u{1F1F8}";
  const languageLabel = nextLocale === "ar" ? "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "English";
  const languageMobileLabel = nextLocale === "ar" ? "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (Egypt)" : "English (US)";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-[1.75rem] border border-white/70 backdrop-blur transition-all ${
          scrolled
            ? "bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
            : "bg-white/82 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-2.5 py-2.5 sm:px-4 sm:py-3 lg:px-6">
          <button
            onClick={() => navTo("home")}
            className={`flex items-center gap-3 rounded-full px-1 py-1 transition hover:bg-slate-50 ${isRtl ? "text-right" : "text-left"}`}
          >
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 shadow-sm sm:h-12 sm:w-12">
              <img src="/queue-logo.jpeg" alt={content.siteDetails.name} className="h-full w-full object-cover" />
            </div>
            <div className="max-w-[8.75rem] sm:max-w-none">
              <p className="text-[13px] font-bold tracking-wide text-slate-950 sm:text-base">{content.siteDetails.name}</p>
              <p className="hidden text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:block">
                {content.siteDetails.shortTagline}
              </p>
            </div>
          </button>

          <nav className={`hidden items-center gap-2 md:flex ${isRtl ? "flex-row-reverse" : ""}`}>
            {content.navItems.map((item) => {
              const active = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => navTo(item.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    active ? "text-white" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  <AnimatePresence>
                    {active ? (
                      <Motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full bg-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.16)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : null}
                  </AnimatePresence>
                  <Motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-400/20 to-sky-400/0 opacity-0"
                    whileTap={{ opacity: [0, 1, 0], scale: [0.92, 1.05, 1.08] }}
                    transition={{ duration: 0.45 }}
                  />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className={`hidden items-center gap-3 md:flex ${isRtl ? "flex-row-reverse" : ""}`}>
            <ActionButton className="px-6 py-3" onClick={() => setLocale(nextLocale)} variant="subtle">
              <span className="flex items-center gap-2">
                <span aria-hidden="true">{languageFlag}</span>
                <span>{languageLabel}</span>
              </span>
            </ActionButton>
            <ActionButton className="px-6 py-3" onClick={() => setShowForm(true)} variant="secondary">
              {content.ui.startProject}
            </ActionButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-slate-900 transition ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-slate-900 transition ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-slate-900 transition ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-slate-200 px-3 py-3 md:hidden">
            <nav className="grid gap-2">
              {content.navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navTo(item.id)}
                  className={`rounded-2xl px-4 py-3 text-[15px] font-medium transition ${isRtl ? "text-right" : "text-left"} ${
                    currentPage === item.id ? "bg-slate-950 text-white" : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-4 grid gap-3">
              <ActionButton className="w-full" onClick={() => setLocale(nextLocale)} variant="subtle">
                <span className="flex items-center gap-2">
                  <span aria-hidden="true">{languageFlag}</span>
                  <span>{languageMobileLabel}</span>
                </span>
              </ActionButton>
              <ActionButton className="w-full" onClick={() => setShowForm(true)} variant="secondary">
                {content.ui.startProject}
              </ActionButton>
            </div>
          </div>
        ) : null}

        <Motion.div
          className="h-px origin-left bg-gradient-to-r from-purple-600 via-violet-500 to-sky-400"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </header>
  );
}
