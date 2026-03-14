import PageShell from "../components/layout/PageShell";
import ActionButton from "../components/ui/ActionButton";
import AnimatedImage from "../components/ui/AnimatedImage";
import FocusSection from "../components/ui/FocusSection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

export default function Process({ content, setShowForm }) {
  const process = content.process;
  const ui = content.ui;

  return (
    <PageShell>
      <FocusSection
        className="px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:pt-20"
        innerClassName="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12"
      >
          <AnimatedImage
            src={process.hero.image}
            alt={process.hero.imageAlt}
            className="h-full"
            imageClassName="h-full min-h-[18rem] sm:min-h-[22rem] md:min-h-[30rem]"
          />

          <Reveal className="h-full rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 md:p-10">
            <div className="flex h-full flex-col justify-center space-y-8">
            <div className="inline-flex w-fit rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow-[0_12px_30px_rgba(168,85,247,0.12)] backdrop-blur">
              {process.hero.eyebrow}
            </div>

            <SectionHeading
              title={process.hero.title}
              description={process.hero.description}
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {process.hero.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.5rem] border border-white/80 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur"
                >
                  <p className="text-base font-semibold text-slate-950">{card.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
            </div>
          </Reveal>
      </FocusSection>

      <FocusSection className="px-5 py-16 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow={ui.processSteps}
              title={process.stepsTitle}
            />
          </Reveal>

          <div className="relative mt-12 space-y-6 md:mt-16 md:space-y-8">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-purple-300 via-purple-200 to-transparent md:block" />

            {process.steps.map((step, index) => (
              <Reveal key={step.num} delay={index * 0.06}>
                <div className="relative grid gap-5 rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:grid-cols-[auto_1fr] md:p-8">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 text-lg font-bold text-white shadow-lg">
                    {step.num}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-950">{step.title}</h3>
                    <p className="text-lg leading-7 text-slate-600">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
      </FocusSection>

      <FocusSection
        className="px-5 py-16 sm:px-6 sm:py-20 md:py-24"
        innerClassName="mx-auto grid max-w-6xl items-stretch gap-6 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1fr_0.9fr] md:gap-8 md:p-10"
      >
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-center space-y-5">
            <SectionHeading
              eyebrow={process.cta.eyebrow}
              title={process.cta.title}
              description={process.cta.description}
            />
            <ActionButton onClick={() => setShowForm(true)}>{ui.beginProject}</ActionButton>
            </div>
          </Reveal>

          <AnimatedImage
            src={process.cta.image}
            alt={process.cta.imageAlt}
            className="h-full"
            imageClassName="h-full min-h-[18rem] sm:min-h-[22rem] md:min-h-72"
          />
      </FocusSection>
    </PageShell>
  );
}
