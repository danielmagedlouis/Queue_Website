export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We understand your business goals, target audience, and project requirements in detail."
    },
    {
      num: "02",
      title: "Planning",
      desc: "We create a comprehensive roadmap with timelines, deliverables, and success metrics."
    },
    {
      num: "03",
      title: "Development",
      desc: "Our team builds your solution using modern technologies and best practices."
    },
    {
      num: "04",
      title: "Delivery",
      desc: "We launch your project, provide training, and offer ongoing support and maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium">
            HOW WE WORK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Process</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A structured approach to delivering exceptional results every time.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-8 md:gap-12 items-start">
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{step.num}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow pt-2 space-y-3">
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{step.desc}</p>
              </div>

              {/* Divider */}
              {idx < steps.length - 1 && (
                <div className="absolute left-10 top-32 h-16 w-0.5 bg-gradient-to-b from-purple-600/50 to-transparent hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-6 pt-8 border-t border-white/10">
          <h3 className="text-3xl font-bold text-white">Ready to Get Started?</h3>
          <button className="px-8 py-3 bg-purple-600 rounded-lg font-medium text-white hover:bg-purple-700 transition">
            Begin Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
