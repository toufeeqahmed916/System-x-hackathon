import Reveal from "./Reveal";
import { EVENT } from "../config/event";

export default function About() {
  return (
    <section id="about" className="border-b-[3px] border-lime bg-surface">
      <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <Reveal direction="left">
          <span className="eyebrow">// about the event</span>
          <h2 className="section-title mt-3">What is {EVENT.name}?</h2>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <p className="text-white/80 text-lg leading-relaxed">
            {EVENT.name} is a {EVENT.durationHours}-hour build sprint hosted by{" "}
            {EVENT.organizer}. Teams of exactly {EVENT.teamSize} get one challenge, one clock,
            and full freedom to use AI tools however they like. No fluff just building,
            start to finish, judged live at the end of the day.
          </p>

          <div className="mt-8 border-[3px] border-lime bg-black p-5 brutal-shadow">
            <p className="font-mono text-xs tracking-widest text-lime uppercase mb-2">
              Entry fee
            </p>
            <p className="font-display font-bold text-2xl">{EVENT.registrationFee}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
