import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do I need technical skills?",
    a: "No — FlowReset is built to be simple and completely plug-and-play."
  },
  {
    q: "Will it work with my current landing page?",
    a: "Yes. Connect it once and FlowReset keeps everything in sync automatically."
  },
  {
    q: "Does it replace my webinar platform?",
    a: "No. You can continue running live workshops on Zoom or any meeting tool."
  },
  {
    q: "How long does setup take?",
    a: "Most users finish setup in 5–10 minutes."
  },
  {
    q: "Can your agency build everything for me?",
    a: "Yes — Growthify Media can build and scale your full funnel and ads."
  }
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-[#0E1326] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-[#11162A] border border-white/10 rounded-xl"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-[#6D5CFF] text-xl">
                  {open === i ? "–" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
