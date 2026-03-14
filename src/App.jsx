import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactFormModal from "./components/layout/ContactFormModal";
import ScrollToTopButton from "./components/layout/ScrollToTopButton";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import { SITE_CONTENT } from "./content/siteContent";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import Services from "./pages/Services";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locale, setLocale] = useState("en");
  const content = SITE_CONTENT[locale];
  const isRtl = content.direction === "rtl";

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar-EG" : "en-US";
    document.documentElement.dir = content.direction;
    document.body.dir = content.direction;
  }, [content.direction, locale]);

  const navTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = {
    home: <Home content={content} navTo={navTo} setShowForm={setShowForm} />,
    services: <Services content={content} navTo={navTo} setShowForm={setShowForm} />,
    portfolio: <Portfolio content={content} navTo={navTo} setShowForm={setShowForm} />,
    process: <Process content={content} navTo={navTo} setShowForm={setShowForm} />,
    contact: <Contact content={content} navTo={navTo} setShowForm={setShowForm} />,
  };

  return (
    <div className={`min-h-screen bg-white text-slate-900 ${isRtl ? "font-sans" : ""}`}>
      <SiteHeader
        content={content}
        currentPage={currentPage}
        locale={locale}
        mobileMenuOpen={mobileMenuOpen}
        navTo={navTo}
        setLocale={setLocale}
        setMobileMenuOpen={setMobileMenuOpen}
        setShowForm={setShowForm}
      />

      <main className="pt-24 sm:pt-28">
        <AnimatePresence mode="wait">
          <Motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {pages[currentPage]}
          </Motion.div>
        </AnimatePresence>
      </main>

      <SiteFooter content={content} navTo={navTo} setShowForm={setShowForm} />
      <ScrollToTopButton />

      {showForm ? <ContactFormModal content={content} setShowForm={setShowForm} /> : null}
    </div>
  );
}
