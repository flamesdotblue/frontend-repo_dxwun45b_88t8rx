import Spline from "@splinetool/react-spline";

export default function HomeSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      {/* Floating capsule */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="animate-float">
          <div className="mx-auto max-w-xl">
            <div className="rounded-full bg-white/90 shadow-2xl ring-1 ring-black/5 px-10 py-8 backdrop-blur-lg">
              <div className="text-center">
                <p className="text-xs tracking-widest uppercase text-gray-500">The Aame</p>
                <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-orange-500">
                  AI For Education
                </h1>
                <p className="mt-4 text-gray-600">
                  An intelligent learning companion that curates, structures, and personalizes knowledge from the open web.
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:connect@theaame.com?subject=Get%20Aame&body=Hi%20Aame%20team%2C%20I%27d%20like%20to%20get%20Aame.%20Please%20share%20the%20download%20link.%20%F0%9F%9A%80"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Get Aame
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              Hovering aura powered by a real-time 3D animation
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
