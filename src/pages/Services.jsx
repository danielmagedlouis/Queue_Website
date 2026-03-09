export default function Services() {
  const services = [
    {
      title: "AI Automations",
      description: "Streamline your workflows with intelligent automation systems that save time and reduce errors."
    },
    {
      title: "Website Building",
      description: "Modern, responsive websites designed to engage your audience and drive conversions."
    },
    {
      title: "System Building",
      description: "Custom business systems tailored to your specific operational needs and growth plans."
    },
    {
      title: "AI Modeling",
      description: "Advanced machine learning models to extract insights and predict future trends."
    },
    {
      title: "IT Services",
      description: "Comprehensive technical support and infrastructure solutions for your organization."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Services Section */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">What We Offer</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Comprehensive solutions to help your business grow and thrive in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-purple-500/50 hover:bg-purple-600/10 transition group"
              >
                <div className="h-12 w-12 rounded-lg bg-purple-600/30 flex items-center justify-center text-xl font-bold text-purple-400 mb-4 group-hover:bg-purple-600/50 transition">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Why Queue Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Business-Driven Thinking", desc: "We focus on solutions that directly impact your bottom line." },
              { title: "Clean Execution", desc: "Our code is well-structured, documented, and maintainable." },
              { title: "Modern Technology", desc: "We use cutting-edge tools and frameworks for optimal performance." },
              { title: "End-to-End Delivery", desc: "From concept to deployment, we handle everything." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-lg border border-white/10 bg-white/5 hover:border-purple-500/50 transition">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
