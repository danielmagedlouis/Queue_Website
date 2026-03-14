import { FaFacebookF, FaInstagram } from "react-icons/fa";
import ActionButton from "../ui/ActionButton";
import Reveal from "../ui/Reveal";

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
};

export default function SiteFooter({ content, navTo, setShowForm }) {
  const isRtl = content.direction === "rtl";
  const desktopAlign = isRtl ? "md:text-right" : "md:text-left";
  const socialAlignment = isRtl ? "flex-row-reverse text-right" : "text-left";

  return (
    <footer className="border-t border-slate-200 bg-white/85 px-5 py-14 backdrop-blur sm:px-6 sm:py-16">
      <Reveal className="mx-auto grid max-w-xl gap-8 rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:max-w-7xl md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:p-10">
        <div className={`space-y-5 text-center ${desktopAlign}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-700">
            {content.siteDetails.name}
          </p>
          <h3 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            {content.siteDetails.tagline}
          </h3>
          <p className="mx-auto max-w-xl text-base text-slate-600 sm:text-lg md:mx-0 md:max-w-2xl">{content.siteDetails.description}</p>
          <div className={`flex flex-col gap-3 sm:flex-row ${isRtl ? "sm:flex-row-reverse" : ""}`}>
            <ActionButton onClick={() => setShowForm(true)}>{content.ui.startProject}</ActionButton>
            <ActionButton onClick={() => navTo("contact")} variant="secondary">
              {content.ui.contactUs}
            </ActionButton>
          </div>
        </div>

        <div className={`grid gap-8 text-center sm:grid-cols-2 ${desktopAlign}`}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{content.ui.footerNavigate}</p>
            <div className="mt-4 grid gap-2">
              {content.navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navTo(item.id)}
                  className={`rounded-xl px-3 py-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 ${isRtl ? "text-right" : "text-left"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{content.ui.footerConnect}</p>
            <div className="mt-4 grid gap-3">
              {content.socialLinks.map((link) => {
                const Icon = socialIcons[link.id];
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className={`flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition hover:border-purple-300 hover:text-purple-700 ${socialAlignment}`}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm">
                      <Icon />
                    </span>
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      <div className={`mx-auto mt-8 flex max-w-xl flex-col gap-3 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between md:max-w-7xl ${desktopAlign}`}>
        <p>{content.siteDetails.name}</p>
        <p>{content.siteDetails.tagline}</p>
      </div>
    </footer>
  );
}
