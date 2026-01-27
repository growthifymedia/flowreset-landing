import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";
const features = [
  {
    title: "Auto-Update Dates & Times",
    desc: "Your landing page, confirmations, and workshop times stay updated automatically."
  },
  {
    title: "Zoom & WhatsApp Links",
    desc: "No more broken funnels — links reset before every workshop."
  },
  {
    title: "Automated Reminder Emails",
    desc: "24h, 1h, and 10-minute reminders that increase attendance."
  },
  {
    title: "Clean UTM Tracking",
    desc: "Instant clarity on which ads, campaigns, and creatives convert."
  },
  {
    title: "Multi-Workshop Scheduling",
    desc: "Plan weeks or months ahead in one sitting."
  },
  {
    title: "Analytics Dashboard",
    desc: "See leads, sources, and performance at a glance."
  }
];

function Features() {
    const navigate = useNavigate();
  return (
    <section id="features" className="relative py-32 bg-[#0B0F1A] text-white overflow-hidden">
      
      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FE4C1C]/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <Reveal>
            <span className="text-sm font-semibold tracking-wide text-[#FE4C1C]">
              WHAT FLOWRESET DOES
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Everything Your Workshop Funnel Needs —
              <span className="text-gray-400 font-medium">
                {" "}Automatically
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-gray-400">
              FlowReset removes every repetitive task that breaks
              recurring workshops — without manual work.
            </p>
          </Reveal>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                className="group relative bg-[#11162A] border border-white/10
                           rounded-2xl p-8 transition duration-300
                           hover:border-[#FE4C1C]/40 hover:-translate-y-1"
              >
                {/* accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r
                                from-[#FE4C1C]/60 to-transparent opacity-0
                                group-hover:opacity-100 transition" />

                <h3 className="text-lg font-semibold">
                  {f.title}
                </h3>

                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="mt-20 text-center">
            <button
  onClick={() => navigate("/signup")}
  className="bg-[#FE4C1C] px-10 py-5 rounded-full text-lg font-semibold
             hover:opacity-90 transition"
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

export default Features;
