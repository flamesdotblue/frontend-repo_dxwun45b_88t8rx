import { useEffect, useMemo, useState } from "react";
import SidebarNav from "./components/SidebarNav";
import HomeSection from "./components/HomeSection";
import UseCasesSection from "./components/UseCasesSection";
import SiteFooter from "./components/SiteFooter";
import AboutPage from "./components/AboutPage";
import ResourcesPage from "./components/ResourcesPage";
import SupportPage from "./components/SupportPage";
import LegalPage from "./components/LegalPage";

function App() {
  const [route, setRoute] = useState("home");
  const [anchor, setAnchor] = useState("");
  const [screen, setScreen] = useState(null); // { key }

  const onNavigate = (key) => {
    if (typeof key === "string" && key.includes("#")) {
      const [base, frag] = key.split("#");
      setRoute(base);
      setAnchor(frag || "");
    } else {
      setRoute(key);
      setAnchor("");
    }
  };
  const openScreen = (key) => setScreen({ key });
  const closeScreen = () => setScreen(null);

  useEffect(() => {
    if (anchor) {
      const t = setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setAnchor("");
      }, 0);
      return () => clearTimeout(t);
    }
  }, [route, anchor]);

  const screenContent = useMemo(() => {
    switch (screen?.key) {
      case "use-cases-info":
        return {
          title: "Use cases",
          body: (
            <div className="space-y-6 text-white/80">
              <div>
                <h4 className="font-semibold text-white">Study prep</h4>
                <p className="mt-1">
                  Learn by syllabus, competitive exams, or skills/job roles. Aame structures clear paths with curated videos, papers, and links.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Upskilling</h4>
                <p className="mt-1">
                  Professionals advance with targeted, project-aligned tracks. Aame also teaches how to use other AI tools via hands-on courses.
                </p>
              </div>
            </div>
          ),
        };
      default:
        return null;
    }
  }, [screen]);

  return (
    <div className="min-h-screen bg-black">
      <SidebarNav current={route} onNavigate={onNavigate} />

      <main className="pt-14 md:pt-0 md:pl-64">
        {route === "home" && (
          <>
            <HomeSection />
            <UseCasesSection />
          </>
        )}
        {route === "use-cases" && <UseCasesSection />}
        {route === "about" && <AboutPage />}
        {route === "resources" && <ResourcesPage />}
        {route === "support" && <SupportPage />}
        {route === "legal" && <LegalPage />}
        <SiteFooter onOpenScreen={openScreen} onNavigate={onNavigate} />
      </main>

      {screenContent && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={closeScreen} />
          <div className="absolute right-0 top-0 h-full w-full sm:w-[560px] bg-[#0b0b0b] border-l border-white/10 shadow-2xl overflow-y-auto">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">{screenContent.title}</h3>
              <button onClick={closeScreen} className="rounded-md px-3 py-1.5 text-sm bg-white/10 text-white hover:bg-white/15">Close</button>
            </div>
            <div className="p-6">{screenContent.body}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
