import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import ActionButton from "../ui/ActionButton";

const inputClassName =
  "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-purple-500/50 focus:outline-none";
const formEndpoint = "https://formsubmit.co/ajax/queuesolutions25@gmail.com";

export default function ContactFormModal({ content, setShowForm }) {
  const [formData, setFormData] = useState({ name: "", businessName: "", email: "", phone: "", whatsapp: "", idea: "" });
  const [submitState, setSubmitState] = useState("idle");
  const [showWhatsappError, setShowWhatsappError] = useState(false);
  const modal = content.ui.modal;
  const isArabic = content.locale === "ar";
  const errorMessage = isArabic
    ? "تعذر إرسال النموذج الآن. حاول مرة أخرى بعد لحظات."
    : "The form could not be sent right now. Please try again in a moment.";
  const sendingLabel = isArabic ? "جاري الإرسال..." : "Sending...";

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowForm(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [setShowForm]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (submitState !== "idle") {
      setSubmitState("idle");
    }
    if (name === "phone" || name === "whatsapp") {
      setShowWhatsappError(false);
    }
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleWhatsappChange = (value) => {
    if (submitState !== "idle") {
      setSubmitState("idle");
    }
    setShowWhatsappError(false);
    setFormData((previous) => ({ ...previous, whatsapp: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.whatsapp) {
      setShowWhatsappError(true);
      return;
    }

    setSubmitState("submitting");

    try {
      const payload = {
        name: formData.name,
        business_name: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        whatsapp_on_number: formData.whatsapp === "yes" ? modal.whatsappYes : modal.whatsappNo,
        message: formData.idea,
        _subject: `${modal.emailSubject} ${formData.name}`,
        _captcha: "false",
      };

      if (formData.email) {
        payload._replyto = formData.email;
      }

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => null);

      if (response.ok && data?.success !== "false") {
        setFormData({ name: "", businessName: "", email: "", phone: "", whatsapp: "", idea: "" });
        setSubmitState("success");
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur"
      onClick={() => setShowForm(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-inquiry-title"
        className="animate-fade-in max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-8 md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-700">{modal.eyebrow}</p>
          <h2 id="project-inquiry-title" className="text-[2rem] font-bold leading-[1.08] text-slate-950 sm:text-3xl">{modal.title}</h2>
          <p className="text-slate-600">{modal.description}</p>
        </div>

        {submitState === "success" ? (
          <div className="mt-8 space-y-5">
            <div className="rounded-[2rem] border border-emerald-100 bg-[linear-gradient(180deg,#f7fffb_0%,#ecfdf5_100%)] p-6 shadow-[0_20px_50px_rgba(16,185,129,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-[0_16px_30px_rgba(16,185,129,0.22)]">
                <FaCheck />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950 sm:text-2xl">{modal.successTitle}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{modal.successDescription}</p>
            </div>
            <ActionButton className="w-full" onClick={() => setShowForm(false)}>
              {modal.successButton}
            </ActionButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder={modal.name}
              required
              onChange={handleInputChange}
              value={formData.name}
              className={inputClassName}
            />
            <input
              type="text"
              name="businessName"
              placeholder={modal.businessName}
              required
              onChange={handleInputChange}
              value={formData.businessName}
              className={inputClassName}
            />
            <input
              type="email"
              name="email"
              placeholder={modal.email}
              onChange={handleInputChange}
              value={formData.email}
              className={inputClassName}
            />
            <input
              type="tel"
              name="phone"
              placeholder={modal.phone}
              required
              onChange={handleInputChange}
              value={formData.phone}
              className={inputClassName}
            />
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {modal.whatsappQuestion}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <WhatsappOption
                  active={formData.whatsapp === "yes"}
                  description={modal.whatsappYesHint}
                  icon={<FaWhatsapp />}
                  label={modal.whatsappYes}
                  onClick={() => handleWhatsappChange("yes")}
                />
                <WhatsappOption
                  active={formData.whatsapp === "no"}
                  description={modal.whatsappNoHint}
                  icon={<FaCheck />}
                  label={modal.whatsappNo}
                  onClick={() => handleWhatsappChange("no")}
                />
              </div>
              {showWhatsappError ? (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {modal.whatsappRequired}
                </p>
              ) : null}
            </div>
            <textarea
              name="idea"
              placeholder={modal.idea}
              rows="5"
              required
              onChange={handleInputChange}
              value={formData.idea}
              className={`${inputClassName} resize-none`}
            />

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <ActionButton className="sm:flex-1" onClick={() => setShowForm(false)} variant="secondary">
                {modal.cancel}
              </ActionButton>
              <ActionButton className="sm:flex-1" disabled={submitState === "submitting"} type="submit">
                {submitState === "submitting" ? sendingLabel : modal.submit}
              </ActionButton>
            </div>
            {submitState === "error" ? (
              <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </p>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
}

function WhatsappOption({ active, description, icon, label, onClick }) {
  return (
    <Motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-3 rounded-[1.5rem] border px-4 py-4 text-left transition ${
        active
          ? "border-emerald-300 bg-emerald-50 shadow-[0_16px_30px_rgba(16,185,129,0.12)]"
          : "border-slate-200 bg-slate-50 hover:border-purple-200 hover:bg-white"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-base sm:h-12 sm:w-12 sm:text-lg ${
          active ? "bg-emerald-500 text-white" : "bg-white text-emerald-500 shadow-sm"
        }`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-950">{label}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </Motion.button>
  );
}
