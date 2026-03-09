import { useState } from 'react';

export default function QueueSolutionsHomepage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idea: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xyzazpje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || 'no-email@queuesolutions.com',
          phone: formData.phone,
          idea: formData.idea,
          _subject: `New Project Inquiry from ${formData.name}`
        })
      });

      if (response.ok) {
        alert('Thank you! Your inquiry has been sent successfully. We will get back to you soon!');
        setFormData({ name: '', email: '', phone: '', idea: '' });
        setShowForm(false);
      } else {
        // Fallback to email
        window.location.href = `mailto:queuesolutions25@gmail.com?subject=New Project Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0DEmail: ${encodeURIComponent(formData.email)}%0DPhone: ${encodeURIComponent(formData.phone)}%0D%0DProject Idea:%0D${encodeURIComponent(formData.idea)}`;
        alert('Opening your email client. Please send the email to complete your inquiry.');
        setFormData({ name: '', email: '', phone: '', idea: '' });
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback to email
      window.location.href = `mailto:queuesolutions25@gmail.com?subject=New Project Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0DEmail: ${encodeURIComponent(formData.email)}%0DPhone: ${encodeURIComponent(formData.phone)}%0D%0DProject Idea:%0D${encodeURIComponent(formData.idea)}`;
      alert('Opening your email client. Please send the email to complete your inquiry.');
      setFormData({ name: '', email: '', phone: '', idea: '' });
      setShowForm(false);
    }
  };
  const services = [
  {
    title: "AI Automations",
    desc: "Automation systems that reduce manual work, speed up operations, and improve consistency.",
  },
  {
    title: "Website Building",
    desc: "Clean, modern websites built to strengthen your brand and convert attention into inquiries.",
  },
  {
    title: "System Building",
    desc: "Custom business systems, dashboards, portals, and internal tools tailored to your workflow.",
  },
  {
    title: "AI Modeling",
    desc: "Practical AI solutions, model development, and intelligent features designed around real business use cases.",
  },
  {
    title: "IT Services",
    desc: "Reliable technical support, infrastructure guidance, and implementation help for growing businesses.",
  },
];

  const process = [
  "Discover your goals",
  "Design the right solution",
  "Build with precision",
  "Launch and improve",
];

const strengths = [
  {
    title: "Business-Driven Thinking",
    desc: "We focus on solutions that support real operations, growth, and day-to-day efficiency.",
  },
  {
    title: "Clean Execution",
    desc: "From design to development, we keep everything polished, clear, and professionally structured.",
  },
  {
    title: "Modern Technology",
    desc: "We build with current tools and scalable approaches that help businesses stay future-ready.",
  },
  {
    title: "End-to-End Delivery",
    desc: "Websites, systems, automations, AI, and IT support — all under one technical partner.",
  },
];

const techStack = [
  "React",
  "Vite",
  "Node.js",
  "Python",
  "APIs",
  "Automation",
  "Dashboards",
  "AI Workflows",
];

  const projects = [
  {
    name: "Corporate Website",
    type: "Brand Presence",
    desc: "Professional digital experiences that help businesses in Egypt present themselves with clarity and confidence.",
  },
  {
    name: "Operations System",
    type: "Custom Platform",
    desc: "Tailored systems that organize operations, improve reporting, and support daily business execution.",
  },
  {
    name: "AI Automation Flow",
    type: "Process Automation",
    desc: "Intelligent workflows that automate repetitive tasks and help teams save time at scale.",
  },
];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Floating Social Sidebar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6 hidden lg:flex">
        <a
          href="https://www.instagram.com/queue.solutions/"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/30 bg-purple-600/20 text-2xl transition hover:scale-110 hover:border-purple-500/60 hover:bg-purple-600/40 animate-float"
        >
          📱
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61585024646035"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/30 bg-purple-600/20 text-2xl transition hover:scale-110 hover:border-purple-500/60 hover:bg-purple-600/40 animate-float"
          style={{ animationDelay: '0.2s' }}
        >
          f️
        </a>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur p-4">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white">Start Your Project</h2>
              <p className="mt-2 text-white/70">Tell us about your idea and we'll get back to you!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Email (optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Your Idea *</label>
                <textarea
                  name="idea"
                  value={formData.idea}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Tell us about your project idea..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-600/40"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-lg">
              <img
                src="/queue-logo.jpeg"
                alt="Queue Solutions logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm text-white/60">Queue</p>
              <h1 className="text-lg font-semibold tracking-wide">Solutions</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl border border-purple-500 bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50 animate-pulse"
          >
            Let's Talk
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_40%),radial-gradient(circle_at_left,rgba(59,130,246,0.06),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-2 lg:px-8">
            <div className="flex flex-col justify-center">
              <div className="mb-8 inline-flex w-fit items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
                ✨ Queue Solutions • Built for ambitious businesses
              </div>
              <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
                Websites, Systems & AI Solutions
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
                We help businesses in Egypt build stronger digital identities through websites, custom systems, AI automations, and dependable IT services — all designed to make operations smoother and brands more credible.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-600/40 transition hover:scale-[1.05] hover:shadow-purple-600/60 animate-float"
                >
                  Start Your Project
                </button>
                <a
                  href="#services"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/40"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/10 rounded-3xl blur-3xl" />
                <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
                  <div className="grid grid-cols-2 gap-4">
                    {services.slice(0, 4).map((item, idx) => (
                      <div key={item.title} className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 hover:bg-purple-500/20 transition">
                        <div className="text-3xl font-bold text-purple-400 mb-2">{idx + 1}</div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/60">
              <span className="font-semibold text-white/80">Tech Stack:</span>
              {techStack.slice(0, 6).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mb-16">
            <span className="inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300 mb-4">OUR SERVICES</span>
            <h3 className="text-4xl font-bold md:text-5xl text-white">What We Do</h3>
            <p className="mt-6 text-lg text-white/70 max-w-3xl">
              We help companies establish a strong digital identity and build the websites, systems, and automations they need to run efficiently.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, idx) => (
              <div key={service.title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 shadow-lg hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 text-2xl font-bold text-purple-300 group-hover:from-purple-500/50 transition">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold text-white">{service.title}</h4>
                <p className="mt-4 text-sm leading-6 text-white/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
          <div className="mb-16">
            <span className="inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300 mb-4">WHY CHOOSE US</span>
            <h3 className="text-4xl font-bold md:text-5xl text-white">Built for Success</h3>
            <p className="mt-6 text-lg text-white/70 max-w-3xl">
              We combine clean design, practical engineering, and modern automation to help businesses in Egypt move with more confidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => (
              <div key={item.title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="mt-4 text-sm leading-6 text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mb-16">
            <span className="inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300 mb-4">FEATURED WORK</span>
            <h3 className="text-4xl font-bold md:text-5xl text-white">Real Solutions</h3>
            <p className="mt-6 text-lg text-white/70 max-w-3xl">
              Your digital presence should build trust, explain your value clearly, and support how your business actually operates.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.name} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-600/30 to-blue-600/20">
                  {project.name === "Corporate Website" && (
                    <img src="https://images.unsplash.com/photo-1460925895917-aaf4e2fd9c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" onError={(e) => e.target.style.display = 'none'} />
                  )}
                  {project.name === "Operations System" && (
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" onError={(e) => e.target.style.display = 'none'} />
                  )}
                  {project.name === "AI Automation Flow" && (
                    <img src="https://images.unsplash.com/photo-1526628652108-fb7b5be45687?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" onError={(e) => e.target.style.display = 'none'} />
                  )}
                </div>
                <div className="p-8">
                  <span className="inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-300 mb-4">{project.type}</span>
                  <h4 className="text-2xl font-bold text-white">{project.name}</h4>
                  <p className="mt-4 text-sm leading-6 text-white/70">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mb-16">
            <span className="inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300 mb-4">HOW WE WORK</span>
            <h3 className="text-4xl font-bold md:text-5xl text-white">Our Process</h3>
            <p className="mt-6 text-lg text-white/70 max-w-3xl">
              We keep the experience structured and clear, from understanding your business to building and launching the right solution.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 text-lg font-bold text-white group-hover:shadow-lg group-hover:shadow-purple-500/50 transition">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">{step}</h4>
                    <p className="mt-2 text-sm text-white/60">Clear communication, practical execution, and a polished end result.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-12 md:p-16 shadow-2xl text-center">
            <span className="inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300 mb-6">GET IN TOUCH</span>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Ready to bring your idea to life?
            </h3>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
              Let's talk about your project. Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-600/40 transition hover:scale-[1.05] hover:shadow-purple-600/60"
              >
                Get Started Now
              </button>
              <a
                href="mailto:queuesolutions25@gmail.com"
                className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/40"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-lg">
                <img
                  src="/queue-logo.jpeg"
                  alt="Queue Solutions logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-sm text-white/50">Queue</p>
                <p className="text-lg font-semibold text-white">Solutions</p>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">
              Queue Solutions builds websites, systems, AI automations, AI modeling solutions, and dependable IT services for ambitious businesses in Egypt.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-white/60">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="mailto:queuesolutions25@gmail.com" className="transition hover:text-white">Email Us</a>
            <a href="https://www.instagram.com/queue.solutions/" target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61585024646035" target="_blank" rel="noreferrer" className="transition hover:text-white">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
