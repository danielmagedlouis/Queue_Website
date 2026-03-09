export default function QueueSolutionsHomepage() {
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
    <div className="min-h-screen bg-slate-950 text-white">
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
            className="rounded-2xl border border-white/15 bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Let’s Talk
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                Queue Solutions • Built for ambitious businesses in Egypt
              </div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Websites, systems, and AI solutions built for real business growth.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                We help businesses in Egypt build stronger digital identities through websites, custom systems, AI automations, AI modeling, and dependable IT services — all designed to make operations smoother and brands more credible.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl transition hover:scale-[1.02]"
                >
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm text-white/60">Featured Capabilities</p>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">Professional</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {services.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/65">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold">Modern</p>
                  <p className="mt-2 text-sm text-white/60">Professional design language that gives your business a serious digital identity.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold">Custom</p>
                  <p className="mt-2 text-sm text-white/60">Every system, website, and automation flow is built around real business needs.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold">Practical</p>
                  <p className="mt-2 text-sm text-white/60">Technology that solves actual operational problems, not just something that looks good.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/55">
              <span className="mr-2 text-white/40">Capabilities</span>
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">Services</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">What Queue Solutions does</h3>
            <p className="mt-4 text-white/65">
              We help companies establish a strong digital identity and build the websites, systems, and automations they need to run efficiently.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => (
              <div key={service.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-white/80">
                  {service.title.charAt(0)}
                </div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
                <p className="mt-3 text-sm leading-6 text-white/65">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">Why Queue Solutions</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Built to give businesses clarity, structure, and momentum</h3>
            <p className="mt-4 text-white/65">
              We combine clean design, practical engineering, and modern automation to help businesses in Egypt move with more confidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-lg">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">Selected Work</p>
                <h3 className="mt-3 text-3xl font-semibold md:text-4xl">Solutions designed around real business needs</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-white/60">
                Your digital presence should not just look good. It should build trust, explain your value clearly, and support how your business actually operates.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.name} className="rounded-[30px] border border-white/10 bg-slate-950 p-6 shadow-xl">
                  <div className="mb-6 h-52 rounded-[22px] bg-gradient-to-br from-white/10 to-white/5" />
                  <p className="text-sm text-white/45">{project.type}</p>
                  <h4 className="mt-2 text-2xl font-semibold">{project.name}</h4>
                  <p className="mt-3 text-sm leading-6 text-white/65">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Process</p>
              <h3 className="mt-3 text-3xl font-semibold md:text-4xl">A simple process that keeps things clear</h3>
              <p className="mt-4 max-w-xl text-white/65">
                We keep the experience structured and clear, from understanding your business to building and launching the right solution.
              </p>
            </div>
            <div className="grid gap-4">
              {process.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{step}</h4>
                    <p className="mt-1 text-sm text-white/60">
                      Clear communication, practical execution, and a polished end result.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">Contact</p>
                <h3 className="mt-3 max-w-2xl text-3xl font-semibold md:text-5xl">
                  Let’s build Queue Solutions into a digital brand that looks as strong as the work behind it.
                </h3>
                <p className="mt-4 max-w-2xl text-white/70">
                  Ready to start a website, system, automation flow, or AI-powered solution? Reach out and let’s talk about what your business needs next.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <a
                    href="mailto:queuesolutions25@gmail.com"
                    className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6 transition hover:border-white/20 hover:bg-slate-950"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold">
                      @
                    </div>
                    <p className="text-sm text-white/45">Contact through email</p>
                    <p className="mt-2 text-lg font-semibold">queuesolutions25@gmail.com</p>
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      Best for project inquiries, business communication, and detailed requirements.
                    </p>
                  </a>

                  <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold">
                      #
                    </div>
                    <p className="text-sm text-white/45">Contact through social media</p>
                    <div className="mt-3 flex flex-col gap-3">
                      <a
                        href="https://www.instagram.com/queue.solutions/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61585024646035"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
                      >
                        Facebook
                      </a>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/60">
                      Reach us on social platforms for updates, quick communication, and brand presence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
                  <p className="text-sm text-white/50">What you can contact us for</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {services.map((service) => (
                      <span
                        key={service.title}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
                      >
                        {service.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
                  <p className="text-sm text-white/50">Why work with us</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-lg font-semibold">Clear communication</p>
                      <p className="mt-2 text-sm text-white/60">Straightforward process from first discussion to launch.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-lg font-semibold">Tailored solutions</p>
                      <p className="mt-2 text-sm text-white/60">We build around your business, not around a generic template.</p>
                    </div>
                  </div>
                </div>
              </div>
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
