export default function Contact({ setShowForm }) {
  return (
    <div className="min-h-screen bg-slate-950 py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Reach out to us today.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Option */}
          <div className="p-8 rounded-lg border border-white/10 bg-white/5 hover:border-purple-500/50 transition space-y-4">
            <div className="text-3xl">✉️</div>
            <h3 className="text-xl font-bold text-white">Email</h3>
            <p className="text-white/70">Send us an email and we'll get back to you within 24 hours.</p>
            <a
              href="mailto:queuesolutions25@gmail.com"
              className="text-purple-400 font-medium hover:text-purple-300 transition"
            >
              queuesolutions25@gmail.com
            </a>
          </div>

          {/* Form Option */}
          <div className="p-8 rounded-lg border border-white/10 bg-white/5 hover:border-purple-500/50 transition space-y-4">
            <div className="text-3xl">💬</div>
            <h3 className="text-xl font-bold text-white">Quick Form</h3>
            <p className="text-white/70">Fill out our quick form to tell us about your project idea.</p>
            <button
              onClick={() => setShowForm(true)}
              className="text-purple-400 font-medium hover:text-purple-300 transition"
            >
              Open Form →
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="p-8 rounded-lg border border-white/10 bg-white/5 text-center space-y-6">
          <h3 className="text-xl font-bold text-white">Follow Us</h3>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.instagram.com/queue.solutions/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-purple-500/50 rounded-lg text-white hover:bg-purple-600/20 transition"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61585024646035"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-purple-500/50 rounded-lg text-white hover:bg-purple-600/20 transition"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6 pt-8 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white">Let's Create Something Amazing Together</h3>
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-3 bg-purple-600 rounded-lg font-medium text-white hover:bg-purple-700 transition"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}
