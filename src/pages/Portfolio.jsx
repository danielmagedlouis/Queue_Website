import { FaArrowRight } from "react-icons/fa";
import PageShell from "../components/layout/PageShell";
import ActionButton from "../components/ui/ActionButton";
import AnimatedImage from "../components/ui/AnimatedImage";
import ExpandableText from "../components/ui/ExpandableText";
import FocusSection from "../components/ui/FocusSection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

export default function Portfolio({ content, setShowForm }) {
  const portfolio = content.portfolio;
  const ui = content.ui;
  const isRtl = content.direction === "rtl";
  const locale = content.locale;
  const resultLabel = ui.resultLabel ?? (locale === "ar" ? "\u0627\u0644\u0646\u062A\u064A\u062C\u0629" : "Result");

  return (
    <PageShell>
      <FocusSection className="px-5 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16 md:pb-20 md:pt-20" innerClassName="mx-auto max-w-xl space-y-5 text-center md:max-w-6xl md:space-y-8">
          <Reveal>
            <div className="inline-flex rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow-[0_12px_30px_rgba(168,85,247,0.12)] backdrop-blur">
              {portfolio.hero.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading
              align="center"
              locale={locale}
              mobileDescription={portfolio.hero.mobileDescription}
              mobileTitle={portfolio.hero.mobileTitle}
              title={portfolio.hero.title}
              description={portfolio.hero.description}
            />
          </Reveal>
      </FocusSection>

      <FocusSection className="px-5 pb-14 sm:px-6 sm:pb-20 md:pb-24" innerClassName="mx-auto grid max-w-xl gap-5 md:max-w-6xl md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.title} className="mx-auto w-full max-w-sm md:max-w-none" delay={index * 0.05}>
              <article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="relative h-44 overflow-hidden sm:h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className={`absolute top-5 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 ${isRtl ? "right-5" : "left-5"}`}>
                    {project.category}
                  </div>
                </div>

                <div className="space-y-4 p-5 sm:p-7">
                  <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse justify-between" : "justify-between"}`}>
                    <h3 className="text-[1.35rem] font-bold leading-tight text-slate-950 sm:text-2xl">{project.title}</h3>
                    <FaArrowRight className="mt-1 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-purple-600" />
                  </div>
                  <ExpandableText
                    className="text-[15px] leading-6 text-slate-600 sm:text-base sm:leading-7"
                    locale={locale}
                    mobileWords={6}
                    text={project.description}
                  />
                  <div className="rounded-[1.25rem] border border-purple-100 bg-purple-50 px-4 py-3 text-sm font-medium text-slate-700">
                    {resultLabel}: {project.result}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
      </FocusSection>

      <FocusSection
        className="px-5 py-14 sm:px-6 sm:py-20 md:py-24"
        innerClassName="mx-auto grid max-w-xl items-stretch gap-6 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur md:max-w-6xl md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:p-10"
      >
          <Reveal className="h-full overflow-hidden rounded-[1.75rem] bg-slate-950 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-8">
            <div className="flex h-full flex-col justify-center space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
              {portfolio.cta.eyebrow}
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              <span className="md:hidden">{portfolio.cta.mobileTitle ?? portfolio.cta.title}</span>
              <span className="hidden md:inline">{portfolio.cta.title}</span>
            </h2>
            <ExpandableText
              className="max-w-2xl text-base text-slate-300 md:text-lg"
              desktopText={portfolio.cta.description}
              locale={locale}
              mobileWords={7}
              text={portfolio.cta.mobileDescription ?? portfolio.cta.description}
            />
            <ActionButton onClick={() => setShowForm(true)} variant="secondary">{ui.startProject}</ActionButton>
            </div>
          </Reveal>

          <AnimatedImage
            src={portfolio.cta.image}
            alt={portfolio.cta.imageAlt}
            className="mx-auto h-full w-full max-w-sm sm:max-w-xl md:max-w-none"
            imageClassName="h-[12.75rem] object-center sm:h-[20rem] md:h-full md:min-h-72"
          />
      </FocusSection>
    </PageShell>
  );
}
