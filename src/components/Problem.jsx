import Reveal from "./Reveal";

const problems = [
  "Updating dates every week",
  "Manually changing Zoom links",
  "Replacing WhatsApp groups",
  "Fixing confirmation pages",
  "Broken funnels from missed updates",
  "No clean lead tracking",
  "Falling show-up rates"
];

function Problem() {
  return (
    <section className="relative py-28 bg-[#0B0F1A] text-white overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FE4C1C]/10 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight">
            Resetting Weekly Workshops
            <br />
            <span className="text-gray-400 font-medium">
              Shouldn’t Feel Like a Full-Time Job
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-lg text-gray-400 max-w-3xl mx-auto">
            If you run recurring workshops, you already know the pattern —
            the same fixes, the same mistakes, every single week.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                className="group bg-[#11162A] border border-white/10 rounded-2xl p-6
                           hover:border-[#FE4C1C]/40 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#FE4C1C] font-bold text-lg">✕</span>
                  <p className="text-gray-300 leading-relaxed">
                    {p}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-20 text-center">
            <p className="text-xl md:text-2xl font-semibold text-[#FE4C1C]">
              FlowReset fixes all of it — automatically.
            </p>

            <p className="mt-3 text-gray-400">
              No weekly resets. No missed updates. No chaos.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Problem;
