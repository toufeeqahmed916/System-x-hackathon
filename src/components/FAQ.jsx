import { useState } from "react";
import Reveal from "./Reveal";
import Section from "./Section";
import { EVENT, WINNERS } from "../config/event";

const [first, second, third] = WINNERS;

const FAQS = [
  {
    q: "What was System X Hackathon 1.0?",
    a: `A ${EVENT.durationHours}-hour hackathon hosted by ${EVENT.organizer} at MUET Jamshoro on ${EVENT.dateLabel} & 5th October, held at ${EVENT.venue}.`,
  },
  {
    q: "Who won?",
    a: `${first.teamName} won first place, ${second.teamName} took second and ${third.teamName} took third. Their live demos are linked in the winners section.`,
  },
  {
    q: "Who could take part?",
    a: `Student teams of ${EVENT.teamSize} members.`,
  },
  {
    q: "Was AI allowed?",
    a: "Yes. AI coding assistants and tools were fully allowed.",
  },
  {
    q: "How was judging done?",
    a: "A panel of judges reviewed every submission. The top 8 teams presented live and the top 3 were awarded prizes.",
  },
  {
    q: "How do I hear about future events?",
    a: "Follow us on Instagram and LinkedIn using the links in the footer. Announcements are posted there first.",
  },
];

function FAQItem({ id, q, a, isOpen, onToggle }) {
  return (
    <div className="border-2 border-white/15">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
        >
          <span className="font-display text-base font-bold uppercase md:text-lg">{q}</span>
          <span
            aria-hidden="true"
            className={`shrink-0 font-mono text-xl text-lime transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        inert={!isOpen}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 leading-relaxed text-white/75 md:px-6 md:pb-6">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" label="Questions" title="FAQ">
      <Reveal className="max-w-3xl">
        <div className="flex flex-col gap-3 md:gap-4">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              id={`faq-${i}`}
              {...item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
