import { Home, Layers } from "lucide-react";

export default function SidebarNav({ current, onNavigate }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "use-cases", label: "Use Cases", icon: Layers },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded bg-gradient-to-br from-red-500 via-orange-500 to-amber-400" aria-hidden />
          <span className="text-white font-semibold tracking-tight">Aame</span>
        </div>
        <nav className="flex items-center gap-1">
          {items.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
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
      </div>
    </header>
  );
}
