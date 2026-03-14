import { useEffect, useState } from "react";
import ActionButton from "../ui/ActionButton";

const inputClassName =
  "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-purple-500/50 focus:outline-none";

export default function ContactFormModal({ content, setShowForm }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", idea: "" });
  const [submitState, setSubmitState] = useState("idle");
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
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xyzazpje", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `${modal.emailSubject} ${formData.name}`,
        }),
      });

      if (response.ok) {
        alert(modal.success);
        setFormData({ name: "", email: "", phone: "", idea: "" });
        setSubmitState("idle");
        setShowForm(false);
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
        className="animate-fade-in w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-8 md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-700">{modal.eyebrow}</p>
          <h2 className="text-3xl font-bold text-slate-950">{modal.title}</h2>
          <p className="text-slate-600">{modal.description}</p>
        </div>

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
      </div>
    </div>
  );
}
