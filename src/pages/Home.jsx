import { motion as Motion } from "framer-motion";
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
  const isRtl = content.direction === "rtl";
  const locale = content.locale;

  return (
    <PageShell>
      <FocusSection className="px-5 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 md:pt-20" innerClassName="mx-auto max-w-xl text-center md:max-w-6xl">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow-[0_12px_30px_rgba(168,85,247,0.12)] backdrop-blur"
          >
            {home.heroBadge}
          </Motion.div>

          <Motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mx-auto mt-5 max-w-[19rem] text-[2.15rem] font-bold leading-[1.04] text-slate-950 sm:max-w-4xl sm:text-5xl md:mt-8 md:text-6xl xl:text-7xl"
          >
            <span className="md:hidden">{home.heroMobileTitleTop ?? home.heroTitleTop}</span>
            <span className="hidden md:inline">{home.heroTitleTop}</span>
            <span className="block bg-gradient-to-r from-slate-950 via-purple-700 to-violet-500 bg-clip-text text-transparent">
              {home.heroTitleAccent}
            </span>
          </Motion.h1>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            <ExpandableText
              className="mx-auto mt-4 max-w-[21rem] text-[15px] leading-7 text-slate-600 sm:max-w-xl sm:text-lg md:mt-6 md:max-w-3xl md:text-xl"
              desktopText={home.heroDescription}
              locale={locale}
              mobileWords={7}
              text={home.heroMobileDescription ?? home.heroDescription}
            />
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <ActionButton onClick={() => setShowForm(true)}>{ui.startProject}</ActionButton>
            <ActionButton onClick={() => navTo("services")} variant="secondary">
              {ui.ourServices}
            </ActionButton>
          </Motion.div>

          <div className={`mx-auto mt-8 grid max-w-xl gap-3 md:mt-12 md:max-w-4xl md:grid-cols-3 md:gap-4 ${isRtl ? "text-right" : "text-left"}`}>
            {home.heroCards.map((card, index) => (
              <Reveal key={card.title} className="mx-auto w-full max-w-sm md:max-w-none" delay={index * 0.08}>
                <div className="rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
      </FocusSection>

      <FocusSection className="px-5 py-14 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto grid max-w-xl items-stretch gap-6 md:max-w-6xl md:grid-cols-2 md:gap-12">
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

      <FocusSection className="px-5 py-14 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto grid max-w-xl items-stretch gap-6 md:max-w-6xl md:grid-cols-2 md:gap-12">
          <AnimatedImage
            src={home.sections[1].image}
            alt={home.sections[1].imageAlt}
            className="order-2 mx-auto h-full w-full max-w-sm sm:max-w-xl md:order-1 md:max-w-none"
            imageClassName="h-[12.75rem] object-center sm:h-[20rem] md:h-full md:min-h-[26rem]"
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

      <FocusSection className="px-5 py-14 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto max-w-xl space-y-8 md:max-w-6xl">
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
