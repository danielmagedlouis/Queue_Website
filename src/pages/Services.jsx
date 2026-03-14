import { FaArrowRight, FaBrain, FaCode, FaCogs, FaDatabase, FaGlobe } from "react-icons/fa";
import PageShell from "../components/layout/PageShell";
import ActionButton from "../components/ui/ActionButton";
import AnimatedImage from "../components/ui/AnimatedImage";
import FocusSection from "../components/ui/FocusSection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

const iconMap = {
  brain: FaBrain,
  code: FaCode,
  cogs: FaCogs,
  database: FaDatabase,
  globe: FaGlobe,
};

export default function Services({ content, navTo }) {
  const servicesContent = content.services;
  const ui = content.ui;

  return (
    <PageShell>
      <FocusSection
        className="px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:pt-20"
        innerClassName="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12"
      >
          <Reveal className="h-full rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 md:p-10">
            <div className="flex h-full flex-col justify-center space-y-8">
            <div className="inline-flex w-fit rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow-[0_12px_30px_rgba(168,85,247,0.12)] backdrop-blur">
              {servicesContent.hero.eyebrow}
            </div>

            <SectionHeading
              title={servicesContent.hero.title}
              description={servicesContent.hero.description}
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {servicesContent.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/80 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur"
                >
                  <p className="text-3xl font-bold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <ActionButton onClick={() => navTo("contact")}>{ui.contactUs}</ActionButton>
              <ActionButton onClick={() => navTo("portfolio")} variant="secondary">
                {ui.viewPortfolio}
              </ActionButton>
            </div>
            </div>
          </Reveal>

          <AnimatedImage
            src={servicesContent.hero.image}
            alt={servicesContent.hero.imageAlt}
            className="h-full"
            imageClassName="h-full min-h-[18rem] sm:min-h-[22rem] md:min-h-[28rem]"
          />
      </FocusSection>

      <FocusSection className="px-5 py-16 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto max-w-6xl space-y-8 md:space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow={ui.capabilities}
              title={servicesContent.capabilitiesTitle}
              description={servicesContent.capabilitiesDescription}
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {servicesContent.services.map((service, index) => {
              const Icon = iconMap[service.icon];

              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
                    <div className="relative h-56 overflow-hidden sm:h-60">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-purple-700 shadow-lg">
                        <Icon />
                      </div>
                    </div>

                    <div className="space-y-4 p-6 sm:p-7">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-slate-950">{service.title}</h3>
                        <FaArrowRight className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-purple-600" />
                      </div>
                      <p className="leading-7 text-slate-600">{service.description}</p>
                      <div className="pt-2">
                        <ActionButton onClick={() => navTo("contact")} variant="subtle">
                          {ui.discussService}
                        </ActionButton>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
      </FocusSection>

      <FocusSection className="px-5 py-16 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto">
        <Reveal className="grid max-w-6xl gap-6 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-2 md:gap-8 md:p-10">
          <SectionHeading
            eyebrow={ui.whyQueue}
            title={servicesContent.reasonsTitle}
            description={servicesContent.reasonsDescription}
          />

          <div className="grid gap-4">
            {servicesContent.reasons.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6">
                <h4 className="text-xl font-bold text-slate-950">{item.title}</h4>
                <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </FocusSection>
    </PageShell>
  );
}
