import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HomeSection from './components/HomeSection.jsx';
import ContentPage from './components/ContentPage.jsx';
import SiteFooter from './components/SiteFooter.jsx';

export default function App() {
  const [route, setRoute] = useState('home');
  const [anchor, setAnchor] = useState('hero');

  const onNavigate = (path) => {
    const [r, a] = path.split('#');
    const newRoute = r || 'home';
    const newAnchor = a || undefined;
    setRoute(newRoute);
    setAnchor(newAnchor);
  };

  // Smooth scroll when anchor changes after content is rendered
  useEffect(() => {
    if (!anchor) return;
    const t = setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
    return () => clearTimeout(t);
  }, [route, anchor]);

  // Background for inner pages to keep aesthetic consistent
  const Background = useMemo(
    () => (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,200,150,0.08),transparent_60%)]" />
      </div>
    ),
    []
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {Background}
      <Navbar onNavigate={onNavigate} />

      {/* Pages */}
      {route === 'home' ? (
        <HomeSection onNavigate={onNavigate} />
      ) : (
        <ContentPage route={route} />
      )}

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
