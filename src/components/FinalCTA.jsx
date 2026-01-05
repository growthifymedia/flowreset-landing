import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";

function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-32 bg-[#0B0F1A] text-white">
      
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#6D5CFF]/25 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#22D3EE]/20 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Automate Your Workshops
            <br />
            <span className="text-[#FE4C1C]">
              In the Next 10 Minutes
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Save hours. Avoid mistakes. Increase show-up rates.
            <br />
            Focus on coaching — let FlowReset handle the tech.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12">
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#FE4C1C] px-12 py-5 rounded-full text-lg font-semibold
                         hover:opacity-90 transition"
            >
              Start 30-Day Free Trial
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

export default FinalCTA;
