import Reveal from "./Reveal";

const features = [
  "Auto-reset workshop system",
  "Landing page & thank-you page sync",
  "Automated reminder emails",
  "Clean UTM tracking",
  "Analytics dashboard",
  "Multi-workshop scheduler",
  "Priority support"
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-[#0B0F1A] text-white overflow-hidden">
      
      {/* Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#6D5CFF]/20 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Free.
            <span className="text-[#FE4C1C]"> Upgrade Only If You Want.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Full access for 30 days. No restrictions. No hidden costs.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="mt-16 bg-[#11162A] border border-[#FE4C1C]/40 rounded-3xl p-10
                       max-w-xl mx-auto"
          >
            <div className="text-sm uppercase tracking-wide text-[#FE4C1C] font-semibold">
              Free Trial
            </div>

            <div className="mt-4 text-4xl font-bold">
              ₹0
            </div>

            <p className="mt-2 text-sm text-gray-400">
              Then upgrade only if FlowReset fits your workflow
            </p>

            <ul className="mt-8 space-y-3 text-left">
              {features.map((f, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-gray-300">
                  <span className="text-[#6D5CFF] mt-1">✔</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="mt-10 w-full bg-[#FE4C1C] px-8 py-4 rounded-full text-lg
                         font-semibold hover:opacity-90 transition"
            >
              Start 30-Day Free Trial
            </button>

            <p className="mt-4 text-xs text-gray-400">
              No card required • Cancel anytime
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Pricing;
