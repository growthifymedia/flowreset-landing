import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: "role",
    title: "What describes you best?",
    options: [
      "Business Coach",
      "Life Coach",
      "Health / Fitness Coach",
      "Relationship Coach",
      "Consultant",
      "Other"
    ]
  },
  {
    id: "frequency",
    title: "How often do you run workshops?",
    options: [
      "Weekly",
      "Every 2 weeks",
      "Monthly",
      "Planning to start",
      "Not sure yet"
    ]
  },
  {
    id: "ads",
    title: "Are you currently running ads?",
    options: [
      "Meta Ads",
      "Google Ads",
      "Both",
      "Not yet",
      "Not sure"
    ]
  },
  {
    id: "budget",
    title: "What’s your monthly ad budget range?",
    options: [
      "Not running ads yet",
      "< ₹50,000",
      "₹50,000 – ₹2,00,000",
      "₹2,00,000 – ₹5,00,000",
      "₹5,00,000+"
    ]
  },
  {
    id: "goal",
    title: "What’s your #1 goal for the next 30 days?",
    options: [
      "Launch my first workshop",
      "Increase lead flow",
      "Improve show-up rate",
      "Scale my workshop revenue",
      "Build my funnel properly",
      "Get help with ads and funnel setup"
    ]
  },
  {
    id: "dfy",
    title: "Want our team to build your full workshop funnel + ads for you?",
    options: [
      "Yes, I want a done-for-you system",
      "Maybe, tell me more",
      "No, I’ll do it myself (for now)"
    ]
  }
];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = questions[step];

  const selectOption = (option) => {
    setAnswers({ ...answers, [current.id]: option });
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Step {step + 1} of {questions.length}</span>
            <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-[#11162A] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FE4C1C] transition-all"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-[#11162A] border border-white/10 rounded-3xl p-8 md:p-10">

          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {current.title}
          </h2>

          <div className="space-y-4">
            {current.options.map((option, i) => (
              <button
                key={i}
                onClick={() => selectOption(option)}
                className="w-full text-left px-6 py-4 rounded-xl border border-white/10
                           hover:border-[#FE4C1C] hover:bg-[#FE4C1C]/10
                           transition text-gray-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Skip */}
        {step === questions.length - 1 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                console.log("Answers:", answers);
                navigate("/dashboard");
              }}
              className="text-sm text-gray-400 hover:text-white"
            >
              Skip for now →
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Onboarding;
