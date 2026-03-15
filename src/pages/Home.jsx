import { motion as Motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import PageShell from "../components/layout/PageShell";
import ActionButton from "../components/ui/ActionButton";
import AnimatedImage from "../components/ui/AnimatedImage";
import ExpandableText from "../components/ui/ExpandableText";
import FocusSection from "../components/ui/FocusSection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

export default function Home({ content, navTo, setShowForm }) {
  const home = content.home;
  const ui = content.ui;
  const locale = content.locale;
  const isArabic = locale === "ar";
  const [showHeroLabels, setShowHeroLabels] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowHeroLabels(latest > 120);
  });

  return (
    <PageShell>
      <FocusSection
        className="flex min-h-[100svh] items-center px-5 pb-8 pt-24 sm:px-6 sm:pb-12 sm:pt-28 md:pt-32"
        innerClassName="mx-auto w-full max-w-xl text-center md:max-w-6xl"
      >
          <Reveal className="mx-auto flex min-h-[calc(100svh-8rem)] w-full flex-col justify-center gap-10 sm:min-h-[calc(100svh-9rem)] sm:justify-start sm:gap-0">
            <div className="flex flex-col items-center justify-center sm:flex-1">
              <Motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                className={`mx-auto mt-7 flex w-full flex-col items-center overflow-visible pb-2 text-center font-bold text-slate-950 ${
                  isArabic
                    ? "max-w-[20rem] text-[2rem] leading-[1.14] sm:max-w-5xl sm:pb-3 sm:text-[3.6rem] lg:text-[4.4rem]"
                    : "max-w-[20rem] text-[2.2rem] leading-[1.04] sm:max-w-6xl sm:pb-3 sm:text-5xl lg:text-[5rem]"
                }`}
              >
                <span className="mt-2 block w-full overflow-visible pb-[0.12em] text-center bg-gradient-to-r from-slate-950 via-purple-700 to-violet-500 bg-clip-text text-transparent">
                  {home.heroTitleAccent}
                </span>
                <span
                  className={`mx-auto mt-3 block ${
                    isArabic
                      ? "max-w-[18rem] text-center text-[0.62em] leading-[1.2] sm:max-w-4xl"
                      : "text-[0.62em] leading-[1.08] md:hidden"
                  }`}
                >
                  {home.heroTitleTop}
                </span>
                {!isArabic ? (
                  <span className="mt-3 hidden whitespace-nowrap text-[0.62em] leading-[1.08] md:block">{home.heroTitleTop}</span>
                ) : null}
              </Motion.h1>

              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className="mx-auto mt-5 max-w-[21rem] text-[15px] leading-7 text-slate-600 sm:mt-6 sm:max-w-3xl sm:text-xl"
              >
                {home.heroDescription}
              </Motion.p>

              <Motion.div
                initial={false}
                animate={{
                  opacity: showHeroLabels ? 1 : 0,
                  y: showHeroLabels ? 0 : 22,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5 ${
                  showHeroLabels ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <ActionButton onClick={() => setShowForm(true)} className="w-full justify-center px-7 sm:w-auto">
                  {ui.startProject}
                </ActionButton>
                <button
                  type="button"
                  onClick={() => navTo("services")}
                  className="text-sm font-semibold text-slate-700 transition hover:text-purple-700"
                >
                  {ui.ourServices}
                </button>
              </Motion.div>
            </div>

            <Motion.div
              initial={false}
              animate={{
                opacity: showHeroLabels ? 1 : 0,
                y: showHeroLabels ? 0 : 26,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-10 grid grid-cols-1 gap-3 border-t border-slate-300/60 pt-5 text-center transition-opacity sm:grid-cols-3 sm:gap-4 sm:pt-6 ${
                showHeroLabels ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              {home.heroCards.map((card) => (
                <div key={card.title} className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-sm sm:tracking-[0.32em]">
                  {card.title}
                </div>
              ))}
            </Motion.div>
          </Reveal>
      </FocusSection>

      <FocusSection
        className="border-y border-slate-300/50 bg-slate-100/58 px-5 py-14 sm:px-6 sm:py-20 md:py-24"
        innerClassName="mx-auto grid max-w-xl items-stretch gap-6 md:max-w-6xl md:grid-cols-2 md:gap-12"
      >
          <Reveal className="mx-auto h-full w-full max-w-xl rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 md:max-w-none md:p-10">
            <div className="flex h-full flex-col justify-center">
            <SectionHeading
              eyebrow={home.sections[0].eyebrow}
              locale={locale}
              mobileDescription={home.sections[0].mobileDescription}
              mobileTitle={home.sections[0].mobileTitle}
              title={home.sections[0].title}
              description={home.sections[0].description}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {home.sections[0].points.map((point) => (
                <div key={point.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{point.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{point.description}</p>
                </div>
              ))}
            </div>
            </div>
          </Reveal>

          <AnimatedImage
            src={home.sections[0].image}
            alt={home.sections[0].imageAlt}
            className="mx-auto h-full w-full max-w-sm sm:max-w-xl md:max-w-none"
            imageClassName="h-[12.75rem] object-center sm:h-[20rem] md:h-full md:min-h-[26rem]"
          />
      </FocusSection>

      <FocusSection className="bg-slate-950 px-5 py-14 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto grid max-w-xl items-stretch gap-6 md:max-w-6xl md:grid-cols-2 md:gap-12">
          <AnimatedImage
            src={home.sections[1].image}
            alt={home.sections[1].imageAlt}
            className="order-2 mx-auto w-full max-w-sm sm:max-w-xl md:order-1 md:max-w-[34rem]"
            imageClassName="h-[12.5rem] object-center sm:h-[18rem] md:h-[22rem] lg:h-[24rem]"
          />

          <Reveal className="order-1 mx-auto h-full w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-900/90 bg-slate-950 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-8 md:order-2 md:max-w-none md:p-10">
            <div className="flex h-full max-w-[18.5rem] flex-col justify-center sm:max-w-none">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
              {home.sections[1].eyebrow}
            </p>
            <h2 className="mt-4 text-[1.9rem] font-bold leading-[1.05] text-white sm:text-4xl lg:text-5xl">
              <span className="md:hidden">{home.sections[1].mobileTitle ?? home.sections[1].title}</span>
              <span className="hidden md:inline">{home.sections[1].title}</span>
            </h2>
            <div className="mt-4">
              <ExpandableText
                className="max-w-[18rem] text-[15px] leading-7 text-slate-300 sm:max-w-2xl md:text-lg"
                desktopText={home.sections[1].description}
                locale={locale}
                mobileWords={7}
                text={home.sections[1].mobileDescription ?? home.sections[1].description}
              />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {home.sections[1].tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-3 text-sm font-medium text-slate-100 backdrop-blur"
                >
                  {tag}
                </div>
              ))}
            </div>
            </div>
          </Reveal>
      </FocusSection>

      <FocusSection
        className="border-y border-slate-300/50 bg-slate-100/58 px-5 py-14 sm:px-6 sm:py-20 md:py-24"
        innerClassName="mx-auto max-w-xl space-y-8 md:max-w-6xl"
      >
          <Reveal>
            <SectionHeading
              eyebrow={home.gallery.eyebrow}
              locale={locale}
              mobileDescription={home.gallery.mobileDescription}
              mobileTitle={home.gallery.mobileTitle}
              title={home.gallery.title}
              description={home.gallery.description}
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            {home.gallery.images.map((image, index) => (
              <AnimatedImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`mx-auto w-full max-w-sm ${index === 1 ? "lg:translate-y-6" : ""}`}
                imageClassName="h-44 object-center sm:h-64 md:h-72"
              />
            ))}
          </div>
      </FocusSection>
    </PageShell>
  );
}
