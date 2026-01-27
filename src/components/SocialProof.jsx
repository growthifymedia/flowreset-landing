import Reveal from "./Reveal";

const proofs = [
  {
    title: "Higher Show-Up Rates",
    desc: "Automated reminders increased attendance across recurring workshops.",
    stat: "+32%"
  },
  {
    title: "Zero Funnel Breaks",
    desc: "No more broken links or wrong dates before workshops.",
    stat: "0 Errors"
  },
  {
    title: "Clear Attribution",
    desc: "UTM tracking made it obvious which ads were actually converting.",
    stat: "100% Clarity"
  }
];

function SocialProof() {
  return (
    <section className="py-24 bg-[#0B0F1A] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">
            Coaches Use FlowReset to
            <span className="text-[#FE4C1C]"> Stay Consistent & Scale Faster</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            From smoother operations to higher attendance — FlowReset
            removes friction from recurring workshops.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {proofs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="bg-[#11162A] border border-white/10 rounded-2xl p-8
                           hover:border-[#FE4C1C]/40 transition duration-300"
              >
                <div className="text-4xl font-bold text-[#FE4C1C]">
                  {p.stat}
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-16 bg-[#11162A] border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto text-left">
            <p className="text-gray-300 italic">
              “FlowReset removed the weekly chaos from our workshops.
              Everything updates automatically now — dates, links, reminders.
              We just focus on delivering.”
            </p>
            <p className="mt-4 font-semibold">
              — Coach using FlowReset
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default SocialProof;
