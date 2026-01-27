import Reveal from "./Reveal";

const services = [
  "High-converting workshop funnels",
  "Paid ads management & scaling",
  "Clean UTM tracking & attribution",
  "Scripts, creatives & email systems",
  "A dedicated team scaling your workshops"
];

function AgencyBridge() {
  return (
    <section className="relative py-28 bg-[#0B0F1A] text-white overflow-hidden">
      
      {/* Subtle glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#6D5CFF]/20 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <span className="inline-block mb-4 text-sm font-semibold text-[#FE4C1C] tracking-wide">
            DONE-FOR-YOU OPTION
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Want the Entire Workshop Funnel
            <br />
            <span className="text-[#FE4C1C]">+ Ads Done-For-You?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            FlowReset is built by <span className="text-white font-medium">Growthify Media</span>,
            a performance marketing agency helping coaches scale recurring workshops
            with systems that don’t break.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="bg-[#11162A] border border-white/10 rounded-xl p-6 text-left
                           hover:border-[#6D5CFF]/40 transition duration-300"
              >
                <p className="text-gray-300">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-16">
            <button className="bg-[#FE4C1C] px-10 py-5 rounded-full text-lg font-semibold
                               hover:opacity-90 transition">
              Book a Strategy Call
            </button>

            <p className="mt-4 text-sm text-gray-400">
              For coaches ready to scale seriously
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default AgencyBridge;
