import { FaArrowRight, FaEnvelope, FaFacebookF, FaInstagram, FaPaperPlane } from "react-icons/fa";
import PageShell from "../components/layout/PageShell";
import ActionButton from "../components/ui/ActionButton";
import AnimatedImage from "../components/ui/AnimatedImage";
import FocusSection from "../components/ui/FocusSection";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

export default function Contact({ content, setShowForm }) {
  const contact = content.contact;
  const ui = content.ui;
  const site = content.siteDetails;
  const locale = content.locale;

  return (
    <PageShell>
      <FocusSection
        className="border-y border-slate-300/50 bg-slate-100/58 px-5 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 md:pt-20"
        innerClassName="mx-auto grid max-w-xl items-stretch gap-6 md:max-w-6xl md:grid-cols-[1fr_0.95fr] md:gap-12"
      >
          <div className="mx-auto w-full max-w-xl space-y-6 sm:space-y-8">
            <Reveal>
              <div className="inline-flex rounded-full border border-purple-200 bg-slate-50/90 px-4 py-2 text-sm font-medium text-purple-700 shadow-[0_12px_30px_rgba(168,85,247,0.12)] backdrop-blur">
                {contact.hero.eyebrow}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <SectionHeading
                locale={locale}
                mobileDescription={contact.hero.mobileDescription}
                mobileTitle={contact.hero.mobileTitle}
                title={contact.hero.title}
                description={contact.hero.description}
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={<FaEnvelope />}
                title={ui.contactCards.emailTitle}
                body={site.email}
                action={<span className="text-sm font-semibold text-slate-500">{ui.contactCards.emailAction}</span>}
              />
              <ContactCard
                icon={<FaPaperPlane />}
                title={ui.contactCards.formTitle}
                body={ui.contactCards.formBody}
                action={
                  <button
                    type="button"
                    onClick={() => setShowForm(true)}
                    className="text-sm font-semibold text-purple-700 transition hover:text-purple-600"
                  >
                    {ui.contactCards.formAction}
                  </button>
                }
              />
            </div>
          </div>

          <AnimatedImage
            src={contact.hero.image}
            alt={contact.hero.imageAlt}
            className="mx-auto h-full w-full max-w-sm sm:max-w-xl md:max-w-none"
            imageClassName="h-[12.75rem] object-center sm:h-[20rem] md:h-full md:min-h-[30rem]"
          />
      </FocusSection>

      <FocusSection className="bg-slate-950 px-5 py-14 sm:px-6 sm:py-20 md:py-24" innerClassName="mx-auto grid max-w-xl items-stretch gap-6 md:max-w-6xl md:grid-cols-[1fr_0.9fr] md:gap-8">
          <Reveal className="h-full overflow-hidden rounded-[2rem] bg-slate-950 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-8 md:p-10">
            <div className="flex h-full flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-200">
              {ui.contactWhy}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {contact.whyTitle}
            </h2>

            <div className="mt-8 grid gap-4">
              {contact.reasons.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-4 text-slate-100 backdrop-blur"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-400/18 text-purple-200">
                    <FaArrowRight className="text-sm" />
                  </span>
                  <span className="leading-6">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {content.socialLinks.map((link) => (
                <SocialPill key={link.id} href={link.href} icon={link.id === "instagram" ? <FaInstagram /> : <FaFacebookF />}>
                  {link.label}
                </SocialPill>
              ))}
            </div>
            </div>
          </Reveal>

          <Reveal className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-300/70 bg-slate-100/82 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <img
              src={contact.cta.image}
              alt={contact.cta.imageAlt}
              className="h-40 w-full object-cover object-center sm:h-64"
            />
            <div className="flex flex-1 flex-col justify-center space-y-5 p-6 sm:p-8">
              <SectionHeading
                eyebrow={contact.cta.eyebrow}
                locale={locale}
                mobileDescription={contact.cta.mobileDescription}
                mobileTitle={contact.cta.mobileTitle}
                title={contact.cta.title}
                description={contact.cta.description}
              />
              <ActionButton onClick={() => setShowForm(true)} className="w-full justify-center sm:w-auto">{ui.startProject}</ActionButton>
            </div>
          </Reveal>
      </FocusSection>
    </PageShell>
  );
}

function ContactCard({ action, body, icon, title }) {
  return (
    <Reveal className="mx-auto w-full max-w-sm rounded-[1.75rem] border border-slate-300/60 bg-slate-100/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur sm:max-w-none sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{body}</p>
      <div className="mt-4">{action}</div>
    </Reveal>
  );
}

function SocialPill({ children, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-300/70 bg-slate-100/88 px-4 py-3 font-medium text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:border-purple-300 hover:text-purple-700 sm:w-auto sm:px-5"
    >
      {icon}
      {children}
    </a>
  );
}
