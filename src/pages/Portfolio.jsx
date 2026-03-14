import { FaArrowRight } from "react-icons/fa";
import PageShell from "../components/layout/PageShell";
import ActionButton from "../components/ui/ActionButton";
import AnimatedImage from "../components/ui/AnimatedImage";
import FocusSection from "../components/ui/FocusSection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

export default function Portfolio({ content, setShowForm }) {
  const portfolio = content.portfolio;
  const ui = content.ui;
  const isRtl = content.direction === "rtl";

  return (
    <PageShell>
      <FocusSection className="px-5 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 md:pb-20 md:pt-20" innerClassName="mx-auto max-w-6xl space-y-6 text-center md:space-y-8">
          <Reveal>
            <div className="inline-flex rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow-[0_12px_30px_rgba(168,85,247,0.12)] backdrop-blur">
              {portfolio.hero.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading
              align="center"
              title={portfolio.hero.title}
              description={portfolio.hero.description}
            />
          </Reveal>
      </FocusSection>

      <FocusSection className="px-5 pb-16 sm:px-6 sm:pb-20 md:pb-24" innerClassName="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="relative h-60 overflow-hidden sm:h-72">
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

                <div className="space-y-4 p-6 sm:p-7">
                  <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse justify-between" : "justify-between"}`}>
                    <h3 className="text-2xl font-bold text-slate-950">{project.title}</h3>
                    <FaArrowRight className="mt-1 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-purple-600" />
                  </div>
                  <p className="leading-7 text-slate-600">{project.description}</p>
                  <div className="rounded-[1.25rem] border border-purple-100 bg-purple-50 px-4 py-3 text-sm font-medium text-slate-700">
                    Result: {project.result}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
      </FocusSection>

      <FocusSection
        className="px-5 py-16 sm:px-6 sm:py-20 md:py-24"
        innerClassName="mx-auto grid max-w-6xl items-stretch gap-6 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:p-10"
      >
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-center space-y-5">
            <SectionHeading
              eyebrow={portfolio.cta.eyebrow}
              title={portfolio.cta.title}
              description={portfolio.cta.description}
            />
            <ActionButton onClick={() => setShowForm(true)}>{ui.startProject}</ActionButton>
            </div>
          </Reveal>

          <AnimatedImage
            src={portfolio.cta.image}
            alt={portfolio.cta.imageAlt}
            className="h-full"
            imageClassName="h-full min-h-[18rem] sm:min-h-[22rem] md:min-h-72"
          />
      </FocusSection>
    </PageShell>
  );
}
