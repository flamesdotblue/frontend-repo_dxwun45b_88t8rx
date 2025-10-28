import React from 'react';

function Col({ title, children }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3">{title}</h4>
      <div className="space-y-2 text-sm text-white/80">{children}</div>
    </div>
  );
}

function FooterLink({ children, to, onNavigate }) {
  return (
    <button onClick={() => onNavigate(to)} className="hover:text-white transition-colors block">
      {children}
    </button>
  );
}

export default function SiteFooter({ onNavigate }) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <Col title="Use cases">
          <FooterLink to="use-cases#overview" onNavigate={onNavigate}>Overview</FooterLink>
          <FooterLink to="use-cases#product" onNavigate={onNavigate}>Product</FooterLink>
          <FooterLink to="use-cases#marketing" onNavigate={onNavigate}>Marketing</FooterLink>
        </Col>
        <Col title="Enterprise">
          <FooterLink to="enterprise#overview" onNavigate={onNavigate}>Overview</FooterLink>
          <FooterLink to="enterprise#security" onNavigate={onNavigate}>Security</FooterLink>
          <FooterLink to="enterprise#pricing" onNavigate={onNavigate}>Pricing</FooterLink>
        </Col>
        <Col title="Resources">
          <FooterLink to="resources#guides" onNavigate={onNavigate}>Guides</FooterLink>
          <FooterLink to="resources#templates" onNavigate={onNavigate}>Templates</FooterLink>
          <FooterLink to="resources#changelog" onNavigate={onNavigate}>Changelog</FooterLink>
        </Col>
        <Col title="Support">
          <FooterLink to="support#contact" onNavigate={onNavigate}>Contact</FooterLink>
          <FooterLink to="support#faq" onNavigate={onNavigate}>FAQ</FooterLink>
          <FooterLink to="support#status" onNavigate={onNavigate}>Status</FooterLink>
        </Col>
        <Col title="Legal">
          <FooterLink to="legal#terms" onNavigate={onNavigate}>Terms</FooterLink>
          <FooterLink to="legal#privacy" onNavigate={onNavigate}>Privacy</FooterLink>
          <FooterLink to="legal#compliance" onNavigate={onNavigate}>Compliance</FooterLink>
        </Col>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Vibe. All rights reserved.
      </div>
    </footer>
  );
}
