import { useState } from "react";
import Reveal from "./Reveal";
import { EVENT } from "../config/event";

const FAQS = [
  {
    q: "Who can participate?",
    a: "Any student team of 2 - 4 members can register. Solo or mismatched team sizes aren't accepted.",
  },
  {
    q: "Is using AI tools allowed?",
    a: "Yes, AI coding assistants and tools are fully allowed. Build however works best for your team.",
  },
  {
    q: "How long is the hackathon?",
    a: `${EVENT.durationHours} hours, start to finish, on the day of the event.`,
  },
  {
    q: "How does judging work?",
    a: "All teams are judged on their submissions. The top 5 teams present live to the judging panel, and the top 3 win prizes.",
  },
  {
    q: "What's included in the registration fee?",
    a: "Refreshments, gifts and goodies, an official team card, a challenge booklet, and certificates for every participant.",
  },
  {
    q: "When will the date and venue be announced?",
    a: "After The Mids, Follow the socials in the footer below to get the announcement as soon as it drops.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-[3px] border-lime/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
      >
        <span className="font-display font-bold text-base md:text-lg uppercase">{q}</span>
        <span
          className={`shrink-0 font-mono text-lime text-xl transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 md:px-6 md:pb-6 font-mono text-sm text-white/60 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="border-b-[3px] border-lime">
      <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-4xl mx-auto">
        <Reveal>
          <span className="eyebrow">// frequently asked</span>
          <h2 className="section-title mt-3 mb-10 md:mb-14">FAQ</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3 md:gap-4">
            {FAQS.map((item, i) => (
              <FAQItem
                key={item.q}
                {...item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
