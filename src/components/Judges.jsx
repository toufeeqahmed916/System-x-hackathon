import Reveal from "./Reveal";
import Section from "./Section";

const JUDGES = [
  { name: "Dr. Fawad Mangi", title: "Assistant Professor", photo: "/images/judge-1.webp" },
  { name: "Dr. Zartasha Baloch", title: "Assistant Professor", photo: "/images/judge-2.webp" },
  { name: "Dr. Ali Asghar", title: "Assistant Professor", photo: "/images/judge-3.webp" },
  { name: "Engr. Madeha Memon", title: "Lecturer", photo: "/images/judge-4.webp" },
];

export default function Judges() {
  return (
    <Section id="judges" label="Panel" title="Judges" tone="alt">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {JUDGES.map((judge, i) => (
          <li key={judge.name}>
            <Reveal delay={i * 0.06} className="h-full">
              <article className="flex h-full flex-col border-2 border-white/15 bg-background">
                <div className="aspect-[3/4] overflow-hidden bg-surface">
                  <img
                    src={judge.photo}
                    alt={`${judge.name}, ${judge.title}`}
                    width="600"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="border-t-2 border-white/15 p-3 md:p-4">
                  <h3 className="font-display text-sm font-bold uppercase leading-tight md:text-base">
                    {judge.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-white/60">{judge.title}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
