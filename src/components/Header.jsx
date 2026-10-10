import { useEffect, useState } from "react";
import { EVENT } from "../config/event";

const LINKS = [
  ["Winners", "#winners"],
  ["About", "#about"],
  ["Judges", "#judges"],
  ["Gallery", "#gallery"],
  ["Reviews", "#reviews"],
  ["FAQ", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="System X Hackathon 1.0, back to top"
          className="font-display text-lg font-bold uppercase tracking-tight"
        >
          System <span className="text-lime">X</span>{" "}
          <span className="font-mono text-sm text-white/70">1.0</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-lime"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={EVENT.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !min-h-0 !px-4 !py-2 !text-sm hidden sm:inline-flex"
          >
            Follow us
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="btn-secondary !min-h-[40px] !px-4 !py-2 !text-sm lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-background lg:hidden">
          <ul className="container-x py-2">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 font-mono text-sm uppercase tracking-[0.15em]"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={EVENT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 font-mono text-sm uppercase tracking-[0.15em] text-lime"
              >
                Follow us on Instagram
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
