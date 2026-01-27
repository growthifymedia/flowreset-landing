import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#0B0F1A] pt-32 pb-20 text-white">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6D5CFF]/30 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Reset Your Workshops
            <br />
            <span className="text-[#FE4C1C]">Automatically</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            FlowReset automatically updates your dates, Zoom links,
            WhatsApp groups, UTMs, and reminders — so your workshops
            run on autopilot.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <button
            onClick={() => navigate("/signup")}
            className="mt-8 bg-[#FE4C1C] px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Start Free Trial
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
