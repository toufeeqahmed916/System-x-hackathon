import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Register your team",
    desc: "Form a squad of 2 - 4 and lock in your spot before the deadline.",
  },
  {
    n: "02",
    title: "Hackathon day",
    desc: "Show up, get the challenge brief, and start building 6 hours on the clock.",
  },
  {
    n: "03",
    title: "Judging",
    desc: "Panels review every submission against the challenge criteria.",
  },
  {
    n: "04",
    title: "Top 5 present",
    desc: "Shortlisted teams pitch live to the judges.",
  },
  {
    n: "05",
    title: "Top 3 win",
    desc: "Winners are announced and prizes awarded on the spot.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b-[3px] border-lime bg-surface"
    >
      <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-7xl mx-auto">
        <Reveal>
          <span className="eyebrow">// the flow</span>
          <h2 className="section-title mt-3 mb-10 md:mb-14">How it works</h2>
        </Reveal>

        <div className="flex flex-col gap-4 md:gap-5 border-l-[3px] border-lime/40 ml-2 md:ml-4 pl-6 md:pl-10">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <Reveal key={step.n} direction="left" delay={i * 0.07}>
                <div
                  className={`relative border-[3px] p-5 md:p-6 ${
                    isLast
                      ? "bg-lime border-black text-black"
                      : "bg-black border-lime/60 text-white"
                  }`}
                  style={{
                    boxShadow: isLast
                      ? "6px 6px 0 0 #000"
                      : "6px 6px 0 0 #C6FF00",
                  }}
                >
                  <span
                    className={`absolute -left-[45px] md:-left-[62px] top-1/2 -translate-y-1/2 font-display font-bold text-lg md:text-2xl ${
                      isLast ? "text-lime" : "text-lime/70"
                    }`}
                  >
                    {step.n}
                  </span>
                  <h3 className="font-display font-bold uppercase text-lg md:text-xl">
                    {step.title}
                  </h3>
                  <p
                    className={`font-mono text-xs md:text-sm mt-2 ${isLast ? "text-black/70" : "text-white/60"}`}
                  >
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
