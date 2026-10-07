import Reveal from "./Reveal";

const JUDGES = [
  { name: "Dr. Fawad Mangi", title: "Assistant Professor", photo: "/images/judge-1.png" },
  { name: "Dr. Zartasha Baloch", title: "Assistant Professor", photo: "/images/judge-2.png" },
  { name: "Dr. Ali Asghar", title: "Assistant Professor", photo: "/images/judge-3.png" },
  { name: "Engr. Madeha Memon", title: "Lecturer", photo: "/images/judge-4.png" },
];

export default function Judges() {
  return (
    <section className="border-b-[3px] border-lime bg-surface">
      <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-7xl mx-auto">
        <Reveal>
          <span className="eyebrow">// on the panel</span>
          <h2 className="section-title mt-3 mb-10 md:mb-14">Judges</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {JUDGES.map((judge, i) => (
            <Reveal key={judge.name} delay={i * 0.06}>
              <div className="border-[3px] border-lime/60 bg-black flex flex-col overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={judge.photo}
                    alt={judge.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-3 md:p-4 text-center border-t-[3px] border-lime/60">
                  <p className="font-display font-bold text-sm md:text-base uppercase">{judge.name}</p>
                  <p className="font-mono text-[10px] md:text-xs text-white/50 uppercase tracking-wide mt-1">
                    {judge.title}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}