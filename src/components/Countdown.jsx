import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { EVENT } from "../config/event";

function getTimeLeft(targetISO) {
  if (!targetISO) return null;
  const diff = new Date(targetISO).getTime() - Date.now();
  if (diff <= 0) return "closed";
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(() => getTimeLeft(EVENT.eventDateISO));

  useEffect(() => {
    if (!EVENT.eventDateISO) return;
    const id = setInterval(() => setTime(getTimeLeft(EVENT.eventDateISO)), 1000);
    return () => clearInterval(id);
  }, []);

  // Registration window has closed — show a closed message instead of the grid.
  if (time === "closed") {
    return (
      <section className="border-b-[3px] border-lime">
        <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-7xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow">// registrations</span>
            <h2 className="section-title mt-3 mb-4">Registrations Closed</h2>
            <p className="font-mono text-sm text-white/60">
              See you on hackathon day (1st Oct 2026) — {EVENT.venue}.
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  const units = time
    ? [
        ["Days", time.days],
        ["Hours", time.hours],
        ["Minutes", time.minutes],
        ["Seconds", time.seconds],
      ]
    : [
        ["Days", "--"],
        ["Hours", "--"],
        ["Minutes", "--"],
        ["Seconds", "--"],
      ];

  return (
    <section className="border-b-[3px] border-lime">
      <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-7xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow">// 10th Sept 2026</span>
          <h2 className="section-title mt-3 mb-10 md:mb-14">Registration Deadline</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
            {units.map(([label, value]) => (
              <div
                key={label}
                className="border-[3px] border-lime bg-surface p-4 md:p-8"
                style={{ boxShadow: "6px 6px 0 0 #C6FF00" }}
              >
                <div className="font-display font-bold text-3xl md:text-5xl text-lime tabular-nums">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-white/60 mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-white/60 mt-8">
            Date &amp; venue of event {EVENT.venue}
          </p>
        </Reveal>
      </div>
    </section>
  );
}