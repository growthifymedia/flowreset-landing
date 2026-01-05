import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import WhoFor from "../components/WhoFor";
import SocialProof from "../components/SocialProof";
import AgencyBridge from "../components/AgencyBridge";
import Pricing from "../components/Pricing";
import FinalCTA from "../components/FinalCTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#0B0F1A] text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <WhoFor />
      <SocialProof />
      <AgencyBridge />
      <Pricing />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
