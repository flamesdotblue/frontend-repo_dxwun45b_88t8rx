import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HomeSection({ onNavigate }) {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Non-blocking gradient overlays for depth/glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-20 -top-40 h-72 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,200,140,0.25),transparent_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white/95">
          Build delightful apps, faster
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/80">
          A modern toolkit for crafting immersive experiences. Design, prototype, and ship with confidence.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={() => onNavigate('home#waitlist')}
            className="relative inline-flex items-center justify-center h-12 px-6 rounded-full text-base font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-amber-400/30 to-orange-500/30 blur-lg pointer-events-none" />
            <span className="relative z-10 bg-white/10 backdrop-blur px-6 h-12 rounded-full border border-white/15 hover:border-white/25 transition-colors">Join waitlist</span>
          </button>
          <button
            onClick={() => onNavigate('use-cases#overview')}
            className="h-12 px-6 rounded-full text-base font-medium text-white/90 hover:text-white border border-white/15 hover:border-white/25 bg-black/20 backdrop-blur"
          >
            Explore use cases
          </button>
        </div>

        {/* Feature anchors to demonstrate in-page scrolling */}
        <div id="features" className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            {
              title: 'Interactive 3D',
              desc: 'Seamless Spline integration with non-blocking overlays for true interactivity.'
            },
            {
              title: 'Beautiful by default',
              desc: 'Thoughtful defaults, gradients, and motion that elevate your product.'
            },
            {
              title: 'Accessible',
              desc: 'Keyboard-friendly and screen reader considerate from day one.'
            }
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="waitlist" className="mt-24 w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-left">
          <h2 className="text-white font-semibold text-lg">Join the waitlist</h2>
          <p className="mt-1 text-white/80 text-sm">Be the first to know when we launch.</p>
          <form
            className="mt-4 flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for joining!');
            }}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 h-11 rounded-xl bg-black/30 text-white placeholder-white/50 border border-white/15 px-3 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
            />
            <button
              type="submit"
              className="h-11 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset]"
            >
              Notify me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
