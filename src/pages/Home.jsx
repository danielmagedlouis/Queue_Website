export default function Home({ navTo, setShowForm }) {
  return (
    <div className="space-y-0 scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 text-center bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Queue Solutions
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-white/80">
            Websites, Systems & AI Solutions
          </p>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            We build modern, scalable digital solutions tailored to your business needs. From stunning websites to intelligent automation systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-semibold text-white hover:scale-110 active:scale-95 transition-transform duration-300 animate-float shadow-lg shadow-purple-600/50 hover:shadow-xl hover:shadow-purple-500/70"
            >
              Get Started Now
            </button>
            <button
              onClick={() => navTo('contact')}
              className="px-8 py-4 border border-purple-500/50 rounded-lg font-semibold text-white hover:scale-105 active:scale-95 hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Photo Section 1 */}
      <section className="py-24 px-6 bg-slate-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
                INNOVATION
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Cutting-Edge Technology for Your Business
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                We leverage the latest technologies and frameworks to build solutions that are not just functional, but future-proof. Our team stays ahead of industry trends to ensure your business stays competitive.
              </p>
              <button
                onClick={() => navTo('services')}
                className="px-6 py-3 bg-purple-600 rounded-lg font-medium text-white hover:scale-105 active:scale-95 hover:bg-purple-700 transition-all duration-300 inline-block shadow-lg shadow-purple-600/40 hover:shadow-xl hover:shadow-purple-500/60"
              >
                Explore Services
              </button>
            </div>
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
                alt="Modern Technology"
                className="w-full h-96 object-cover rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-600/20"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Section 2 */}
      <section className="py-24 px-6 bg-slate-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Business Solutions"
                className="w-full h-96 object-cover rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-600/20"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div className="order-1 md:order-2 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
                EXPERTISE
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Tailored Solutions That Fit Your Needs
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Every business is unique. That's why we don't believe in one-size-fits-all solutions. We work closely with you to understand your specific challenges and create custom solutions that drive real results.
              </p>
              <button
                onClick={() => navTo('portfolio')}
                className="px-6 py-3 bg-purple-600 rounded-lg font-medium text-white hover:scale-105 active:scale-95 hover:bg-purple-700 transition-all duration-300 inline-block shadow-lg shadow-purple-600/40 hover:shadow-xl hover:shadow-purple-500/60"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Section 3 */}
      <section className="py-24 px-6 bg-slate-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
                PARTNERSHIP
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Your Success is Our Mission
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                We're not just a vendor—we're your strategic partner. We invest in understanding your goals and work tirelessly to ensure your project's success long after launch. Your growth is our growth.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 bg-purple-600 rounded-lg font-medium text-white hover:scale-105 active:scale-95 hover:bg-purple-700 transition-all duration-300 inline-block shadow-lg shadow-purple-600/40 hover:shadow-xl hover:shadow-purple-500/60"
              >
                Start Your Project
              </button>
            </div>
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img
                src="https://images.unsplash.com/photo-1552881173-822f4c46d91d?w=600&q=80"
                alt="Team Partnership"
                className="w-full h-96 object-cover rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-600/20"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-slate-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 opacity-0 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">What Sets Us Apart</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=600&q=80"
                alt="Why Choose Us"
                className="w-full h-96 object-cover rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-600/20"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-white/70 leading-relaxed">
                We combine strategic thinking with technical excellence to deliver solutions that truly transform your business.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Business-Driven Thinking", desc: "We focus on solutions that directly impact your bottom line and drive real business growth." },
                  { title: "Clean Execution", desc: "Our code is well-structured, documented, and maintainable for long-term success." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/5 hover:border-purple-500/50 transition">
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Modern Technology", desc: "We use cutting-edge tools and frameworks to ensure optimal performance and scalability." },
              { title: "End-to-End Delivery", desc: "From concept to deployment and beyond, we handle everything you need." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-lg border border-white/10 bg-white/5 hover:border-purple-500/50 transition opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-24 px-6 bg-slate-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 opacity-0 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
              WHAT WE DO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Core Services</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Comprehensive solutions to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "AI Automations", image: "https://images.unsplash.com/photo-1518611505868-d7fb84b4e803?w=400&q=80" },
              { title: "Website Building", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" },
              { title: "System Development", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" }
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-purple-500/50 transition opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * (idx + 1)}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover bg-slate-700"
                  onError={(e) => {e.target.style.display = 'none'}}
                />
                <div className="p-6 space-y-4 text-center">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <button
                    onClick={() => navTo('services')}
                    className="text-purple-400 hover:text-purple-300 transition font-medium text-sm"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
              <p className="text-lg text-white/70">Let's start a conversation about your next project. We're here to help you achieve your goals with innovative solutions.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="px-8 py-3 bg-purple-600 rounded-lg font-medium text-white hover:scale-105 active:scale-95 hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-600/40 hover:shadow-xl hover:shadow-purple-500/60"
                >
                  Start Your Project
                </button>
                <a
                  href="mailto:queuesolutions25@gmail.com"
                  className="px-8 py-3 border border-purple-500/50 rounded-lg font-medium text-white hover:scale-105 active:scale-95 hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Email Us Directly
                </a>
              </div>
            </div>
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80"
                alt="Ready to Start"
                className="w-full h-96 object-cover rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-600/20"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
