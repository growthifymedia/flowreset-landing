import Reveal from "./Reveal";

const points = [
  {
    title: "No Mistakes",
    icon: "✔",
    desc: "Dates, links, and reminders stay accurate automatically."
  },
  {
    title: "No Last-Minute Fixes",
    icon: "⏱",
    desc: "Everything resets before your workshop without manual effort."
  },
  {
    title: "No Chaos",
    icon: "🧠",
    desc: "One system runs your entire workshop funnel smoothly."
  }
];

function Solution() {
  return (
    <section className="relative py-28 bg-[#0B0F1A] text-white overflow-hidden">
      
      {/* subtle glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FE4C1C]/10 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Your Workshop Funnel,
            <span className="text-[#FE4C1C]"> Updated Automatically</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            FlowReset is the automation engine built for coaches running
            weekly or recurring workshops — without manual resets.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="bg-[#11162A] border border-white/10 rounded-2xl p-8
                           hover:border-[#FE4C1C]/40 transition duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12
                                rounded-full bg-[#FE4C1C]/10 text-[#FE4C1C]
                                text-xl font-bold mx-auto">
                  {p.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Solution;
