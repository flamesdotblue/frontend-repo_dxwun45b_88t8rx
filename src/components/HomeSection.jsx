import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function HomeSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0A0A0A]">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle vignette + top gradient to enhance contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Centered hero copy */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-24 text-center text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-white/70">Introducing</p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          The AI for Education
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/70">
          Curate, structure, and personalize learning from trusted sources. Built for students, professionals, and educators.
        </p>
        <div className="mt-8 inline-flex items-center gap-3">
          {/* Join Waitlist – elevated appearance */}
          <a
            href="mailto:connect@theaame.com?subject=Join%20the%20waitlist&body=Hi%20Aame%20team%2C%20please%20add%20me%20to%20the%20waitlist."
            className="relative inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
            aria-label="Join the waitlist"
          >
            <span className="absolute -inset-px rounded-full bg-gradient-to-r from-white via-orange-200 to-amber-300 opacity-80 blur-md transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
            <span className="relative rounded-full bg-gradient-to-r from-white via-orange-200 to-amber-300 px-6 py-2.5 text-black shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_1px_2px_0_rgba(0,0,0,0.4)]">
              Join waitlist
            </span>
          </a>

          {/* Secondary link */}
          <a
            href="#use-cases"
            className="group rounded-full px-5 py-2.5 text-sm font-medium text-white/85 hover:text-white bg-white/0 hover:bg-white/10 transition inline-flex items-center gap-2"
          >
            See use cases
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
