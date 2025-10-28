import { useState } from "react";
import { Home, Layers, Menu, X, Clock } from "lucide-react";

export default function SidebarNav({ current, onNavigate }) {
  const [open, setOpen] = useState(false);

  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "use-cases", label: "Use Cases", icon: Layers },
  ];

  const NavList = ({ onItem }) => (
    <nav className="flex flex-col gap-1">
      {items.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => {
            onNavigate(key);
            onItem?.();
          }}
          className={`inline-flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors text-left ${
            current === key
              ? "text-white bg-white/10"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </nav>
  );

  const WaitlistCTA = () => (
    <div className="mt-4">
      <button
        type="button"
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90"
        aria-label="Join waitlist"
      >
        <Clock size={16} />
        Join Waitlist
      </button>
      <p className="mt-2 text-xs text-white/50">Reserved spot — integration coming soon.</p>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl h-14">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded bg-gradient-to-br from-red-500 via-orange-500 to-amber-400" aria-hidden />
            <span className="text-white font-semibold tracking-tight">Aame</span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Desktop left rail */}
      <aside className="hidden md:flex fixed left-0 top-0 z-40 h-screen w-64 border-r border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="flex flex-col w-full h-full p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-7 w-7 rounded bg-gradient-to-br from-red-500 via-orange-500 to-amber-400" aria-hidden />
            <span className="text-white font-semibold tracking-tight">Aame</span>
          </div>
          <NavList />
          <div className="mt-auto">
            <WaitlistCTA />
            <div className="mt-4 text-xs text-white/50 px-1">The AI for Education</div>
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-[#0b0b0b] border-r border-white/10 shadow-2xl">
            <div className="h-14 px-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded bg-gradient-to-br from-red-500 via-orange-500 to-amber-400" aria-hidden />
                <span className="text-white font-semibold tracking-tight">Aame</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1.5 text-sm bg-white/10 text-white hover:bg-white/15"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-3">
              <NavList onItem={() => setOpen(false)} />
              <div className="mt-6">
                <WaitlistCTA />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
