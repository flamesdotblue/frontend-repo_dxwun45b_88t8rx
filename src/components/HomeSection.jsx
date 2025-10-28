import Spline from "@splinetool/react-spline";

export default function HomeSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0A0A0A]">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
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
          <a
            href="mailto:connect@theaame.com?subject=Get%20Aame&body=Hi%20team%2C%20I%27d%20like%20access%20to%20Aame."
            className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
          >
            Get Aame
          </a>
          <a
            href="#use-cases"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-white/80 hover:text-white bg-white/0 hover:bg-white/10 transition"
          >
            See use cases
          </a>
        </div>
      </div>
    </section>
  );
}
