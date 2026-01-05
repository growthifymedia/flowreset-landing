import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    step: "01",
    title: "Connect Your Pages",
    desc: "Link your landing page and thank-you page once so everything stays perfectly in sync."
  },
  {
    step: "02",
    title: "Add Workshop Schedule",
    desc: "Enter dates, Zoom links, and WhatsApp logic a single time."
  },
  {
    step: "03",
    title: "Turn On Automation",
    desc: "FlowReset resets your entire funnel before every workshop — automatically."
  }
];

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section
      id="how"
      className="relative py-28 bg-[#0B0F1A] text-white overflow-hidden"
    >
      {/* subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FE4C1C]/10 blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Header */}
        <Reveal>
          <span className="text-sm font-semibold tracking-wide text-[#FE4C1C]">
            HOW IT WORKS
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
            Automation That Works in
            <span className="text-gray-400 font-medium"> 3 Simple Steps</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Set it up once. Let FlowReset handle every workshop after that —
            without manual fixes.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="relative mt-20 grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div
                className="group relative bg-[#11162A] border border-white/10
                           rounded-2xl p-10 text-left
                           hover:border-[#FE4C1C]/40 transition duration-300"
              >
                {/* Step badge */}
                <div
                  className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center
                             rounded-full bg-[#FE4C1C] text-black font-bold"
                >
                  {s.step}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {s.title}
                </h3>

                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.5}>
          <div className="mt-20">
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#FE4C1C] px-12 py-5 rounded-full
                         text-lg font-semibold hover:opacity-90 transition"
            >
              Start Free Trial
            </button>

            <p className="mt-4 text-sm text-gray-400">
              No card required • Cancel anytime
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default HowItWorks;
