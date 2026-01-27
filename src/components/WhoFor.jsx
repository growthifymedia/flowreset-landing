import Reveal from "./Reveal";

const points = [
  {
    title: "Runs Recurring Workshops",
    desc: "Weekly or recurring live workshops that need consistency.",
    icon: "📅"
  },
  {
    title: "Uses Paid Ads",
    desc: "Already running Meta / Google ads or planning to.",
    icon: "📈"
  },
  {
    title: "Wants a System That Doesn’t Break",
    desc: "No more last-minute fixes or broken funnels.",
    icon: "🛡️"
  },
  {
    title: "Needs Clean Tracking",
    desc: "Clear attribution across ads, campaigns, and sources.",
    icon: "🎯"
  },
  {
    title: "Wants Higher Show-Up Rates",
    desc: "Automated reminders that actually get people to attend.",
    icon: "⚡"
  },
  {
    title: "Prefers Automation Over Manual Work",
    desc: "Systems that run quietly in the background.",
    icon: "🤖"
  }
];

function WhoFor() {
  return (
    <section className="relative py-28 bg-[#0B0F1A] text-white overflow-hidden">
      
      {/* soft background glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#FE4C1C]/10 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <span className="text-sm font-semibold tracking-wide text-[#FE4C1C]">
            WHO FLOWRESET IS FOR
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
            Built for Coaches Who Want to
            <br />
            <span className="text-gray-400 font-medium">
              Scale Without Chaos
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            If you recognize yourself in the points below,
            FlowReset was built specifically for your workflow.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
          {points.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                className="group bg-[#11162A] border border-white/10 rounded-2xl p-6
                           hover:border-[#FE4C1C]/40 transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center w-12 h-12
                               rounded-full bg-[#FE4C1C]/10 text-[#FE4C1C]
                               text-xl font-semibold"
                  >
                    {p.icon}
                  </div>

                  <h3 className="text-lg font-semibold">
                    {p.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <p className="mt-16 text-xl font-semibold text-[#FE4C1C]">
            If that’s you — FlowReset will save you hours every week.
          </p>
        </Reveal>

      </div>
    </section>
  );
}

export default WhoFor;
