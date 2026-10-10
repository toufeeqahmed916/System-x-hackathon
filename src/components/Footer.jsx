import { EVENT } from "../config/event";

const EXPLORE = [
  ["Winners", "#winners"],
  ["Gallery", "#gallery"],
  ["Reviews", "#reviews"],
  ["FAQ", "#faq"],
  ["Back to top", "#top"],
];

const linkClass = "text-white/75 transition-colors hover:text-lime";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3 md:py-16">
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-tight">
            System <span className="text-lime">X</span> 1.0
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
            Hackathon hosted by {EVENT.organizer} at MUET Jamshoro on {EVENT.dateLabel} & 5th October 2026.
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-white/60">{EVENT.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {EXPLORE.map(([label, href]) => (
              <li key={href}>
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-3">Follow for updates</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={EVENT.socials.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram
              </a>
            </li>
            <li>
              <a href={EVENT.socials.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-x py-5 font-mono text-xs text-white/60">
          © {new Date().getFullYear()} {EVENT.name}. Organized by 24CS (Sec-1).
        </p>
      </div>
    </footer>
  );
}
