import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What specific services do you offer to help businesses?",
    answer:
      "Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.",
  },
  {
    question: "Do you offer any type of discount or promotion?",
    answer:
      "Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.",
  },
  {
    question: "How do they structure fees for services?",
    answer:
      "Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.",
  },
  {
    question: "Do you offer financial consulting services?",
    answer:
      "Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 border-t border-slate-200 overflow-hidden bg-background">
      <div className="mx-auto max-w-[1400px] px-2.5 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0 blur-0">
          <span className="text-sm font-medium text-amber-500 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-slate-200 transition-all duration-500 opacity-100 translate-x-0"
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left group"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-medium text-slate-800 group-hover:text-amber-500 transition-colors">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <Minus className="h-5 w-5 text-amber-500 transition-all duration-300" />
                ) : (
                  <Plus className="h-5 w-5 text-slate-400 group-hover:text-amber-500 transition-all duration-300" />
                )}
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
