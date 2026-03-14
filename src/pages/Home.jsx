import { motion as Motion } from "framer-motion";
import PageShell from "../components/layout/PageShell";
import ActionButton from "../components/ui/ActionButton";
import AnimatedImage from "../components/ui/AnimatedImage";
import FocusSection from "../components/ui/FocusSection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

export default function Home({ content, navTo, setShowForm }) {
  const home = content.home;
  const ui = content.ui;
  const isRtl = content.direction === "rtl";

  return (
    <PageShell>
      <FocusSection className="px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:pt-20" innerClassName="mx-auto max-w-6xl text-center">
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
            className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl md:mt-8 md:text-6xl xl:text-7xl"
          >
            {home.heroTitleTop}
            <span className="block bg-gradient-to-r from-slate-950 via-purple-700 to-violet-500 bg-clip-text text-transparent">
              {home.heroTitleAccent}
            </span>
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mx-auto mt-5 max-w-3xl text-base text-slate-600 sm:text-lg md:mt-6 md:text-xl"
          >
            {home.heroDescription}
          </Motion.p>

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

          <div className={`mx-auto mt-10 grid max-w-4xl gap-4 md:mt-12 md:grid-cols-3 ${isRtl ? "text-right" : "text-left"}`}>
            {home.heroCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
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

      <FocusSection className="px-5 py-16 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-2 md:gap-12">
          <Reveal className="h-full rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 md:p-10">
            <div className="flex h-full flex-col justify-center">
            <SectionHeading
              eyebrow={home.sections[0].eyebrow}
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
            className="h-full"
            imageClassName="h-full min-h-[18rem] sm:min-h-[22rem] md:min-h-[26rem]"
          />
      </FocusSection>

      <FocusSection className="px-5 py-16 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-2 md:gap-12">
          <AnimatedImage
            src={home.sections[1].image}
            alt={home.sections[1].imageAlt}
            imageClassName="h-full min-h-[18rem] sm:min-h-[22rem] md:min-h-[26rem]"
          />

          <Reveal className="h-full rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 md:p-10">
            <div className="flex h-full flex-col justify-center">
            <SectionHeading
              eyebrow={home.sections[1].eyebrow}
              title={home.sections[1].title}
              description={home.sections[1].description}
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {home.sections[1].tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-purple-200 bg-purple-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {tag}
                </div>
              ))}
            </div>
            </div>
          </Reveal>
      </FocusSection>

      <FocusSection className="px-5 py-16 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto max-w-6xl space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow={home.gallery.eyebrow}
              title={home.gallery.title}
              description={home.gallery.description}
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            {home.gallery.images.map((image, index) => (
              <AnimatedImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={index === 1 ? "md:translate-y-6" : ""}
                imageClassName="h-56 sm:h-64 md:h-72"
              />
            ))}
          </div>
      </FocusSection>
    </PageShell>
  );
}
