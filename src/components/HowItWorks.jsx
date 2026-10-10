import Reveal from "./Reveal";
import Section from "./Section";

const STEPS = [
  ["01", "Registration", "Teams of 2 to 4 signed up through a Google Form."],
  ["02", "Hackathon day", "Teams received the challenge brief and built for 6 hours."],
  ["03", "Judging", "The panel reviewed every submission."],
  ["04", "Top 8 presented", "Shortlisted teams pitched live to the judges."],
  ["05", "Top 3 awarded", "Winners were announced and prizes handed out on the spot."],
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" label="Format" title="How the day ran">
      <ol className="border-t border-white/15">
        {STEPS.map(([n, title, desc], i) => (
          <Reveal key={n} delay={i * 0.05}>
            <li className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-1 border-b border-white/15 py-5 md:grid-cols-[5rem_1fr_1.5fr] md:items-baseline md:py-6">
              <span className={`font-display text-xl font-bold md:text-2xl ${i === STEPS.length - 1 ? "text-lime" : "text-white/50"}`}>
                {n}
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-tight md:text-xl">{title}</h3>
              <p className="col-start-2 text-white/70 md:col-start-auto">{desc}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
