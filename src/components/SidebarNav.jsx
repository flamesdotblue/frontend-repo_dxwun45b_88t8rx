import { Home, Layers } from "lucide-react";

export default function SidebarNav({ current, onNavigate }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "use-cases", label: "Use Case", icon: Layers },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 border-r border-gray-200 bg-white/70 backdrop-blur-xl">
      <div className="h-16 flex items-center px-5 border-b border-gray-200">
        <div className="text-xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
            Aame
          </span>
        </div>
      </div>
      <nav className="p-3 space-y-1">
        {items.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium ${
              current === key
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
