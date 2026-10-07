import { EVENT } from "../config/event";

export default function Header() {
  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-[3px] border-lime shadow-[0_6px_0_0_rgba(198,255,0,0.15)]">
      <div className="flex items-center justify-between px-mobile-margin md:px-desktop-margin py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-mono text-lime text-lg group-hover:animate-blink">&gt;_</span>
          <span className="font-display font-bold uppercase tracking-tight text-lg md:text-xl">
            System X <span className="text-lime">1.0</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ["About", "#about"],
            ["Prizes", "#prizes"],
            ["Timeline", "#how-it-works"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs tracking-[0.15em] uppercase text-white/80 hover:text-lime transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <button onClick={scrollToRegister} className="btn-primary !px-5 !py-2.5 !text-sm">
          Register
        </button>
      </div>
    </header>
  );
}
