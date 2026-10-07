import { EVENT } from "../config/event";

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="px-mobile-margin md:px-desktop-margin py-10 md:py-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display font-bold uppercase tracking-tight text-lg">
          System X <span className="text-lime">1.0</span>
        </span>

        <div className="flex gap-6">
          <a
            href={EVENT.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-white/60 hover:text-lime transition-colors"
          >
            Instagram
          </a>
          <a
            href={EVENT.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-white/60 hover:text-lime transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <span className="font-mono text-[11px] text-white/40 text-center md:text-right">
          © {new Date().getFullYear()} {EVENT.name}. All rights reserved to 24CS(Sec-1).
        </span>
      </div>
    </footer>
  );
}
