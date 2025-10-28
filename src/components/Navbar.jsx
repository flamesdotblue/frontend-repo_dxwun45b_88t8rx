import React from 'react';

function NavItem({ label, target, onNavigate }) {
  return (
    <button
      onClick={() => onNavigate(target)}
      className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
    >
      {label}
    </button>
  );
}

export default function Navbar({ onNavigate }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600" />
          <span className="text-white font-semibold tracking-tight">Vibe</span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem label="Home" target="home#hero" onNavigate={onNavigate} />
          <NavItem label="Use cases" target="use-cases#overview" onNavigate={onNavigate} />
          <NavItem label="Enterprise" target="enterprise#overview" onNavigate={onNavigate} />
          <NavItem label="Resources" target="resources#guides" onNavigate={onNavigate} />
          <NavItem label="Support" target="support#contact" onNavigate={onNavigate} />
          <NavItem label="Legal" target="legal#terms" onNavigate={onNavigate} />
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home#waitlist')}
            className="relative inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-amber-400/30 to-orange-500/30 blur-md pointer-events-none" />
            <span className="relative z-10 bg-white/10 backdrop-blur px-5 h-10 rounded-full border border-white/15 hover:border-white/25 transition-colors">Join waitlist</span>
          </button>
        </div>
      </div>
    </header>
  );
}
