export default function Portfolio() {
  const projects = [
    {
      title: "Corporate Website",
      desc: "A modern, responsive website for a Fortune 500 company with e-commerce integration.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
      title: "Operations System",
      desc: "Custom business management system with real-time analytics and reporting dashboards.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "AI Automation Flow",
      desc: "Intelligent automation system that reduced operational costs by 40% within 6 months.",
      image: "https://images.unsplash.com/photo-1677442d019cecf8d00e4af89eaf3493?w=800&q=80"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Portfolio Section */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
              FEATURED WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Portfolio</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Check out some of our recent projects and the impact they've made.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden border border-white/10 bg-slate-900 hover:border-purple-500/50 transition"
              >
                <div className="relative h-64 overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => e.target.style.display = 'none'}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/70 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold text-white">Interested in What We Can Do?</h3>
          <p className="text-white/70">Let's discuss how we can build something amazing for your business.</p>
          <button className="px-8 py-3 bg-purple-600 rounded-lg font-medium text-white hover:bg-purple-700 transition">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
