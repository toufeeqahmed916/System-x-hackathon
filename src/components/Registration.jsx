import { QRCodeSVG } from "qrcode.react";
import Reveal from "./Reveal";
import { EVENT } from "../config/event";

export default function Registration() {
  return (
    <section id="register" className="border-b-[3px] border-lime bg-surface">
      <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 text-center md:text-left">
            <div>
              <span className="eyebrow">// last step</span>
              <h2 className="section-title mt-3 mb-6">Ready to build?</h2>
              <p className="font-mono text-sm text-white/60 max-w-sm mx-auto md:mx-0 mb-8">
                Fill out the registration form to lock in your team's spot for {EVENT.name}.
              </p>
              <a
                href={EVENT.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg md:text-xl"
              >
                Register Now →
              </a>
            </div>

            <div className="border-[3px] border-lime bg-black p-4" style={{ boxShadow: "6px 6px 0 0 #C6FF00" }}>
              <QRCodeSVG
                value={EVENT.registrationFormUrl}
                size={180}
                bgColor="#000000"
                fgColor="#C6FF00"
                level="M"
                includeMargin={false}
              />
              <p className="font-mono text-[10px] text-center tracking-widest text-white/50 uppercase mt-3">
                Scan to register
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
