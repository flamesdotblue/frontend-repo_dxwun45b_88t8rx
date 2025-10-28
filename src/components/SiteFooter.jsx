import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

export default function SiteFooter({ onOpenScreen }) {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded bg-gradient-to-br from-red-500 via-orange-500 to-amber-400" aria-hidden />
              <div className="text-lg font-semibold">Aame</div>
            </div>
            <p className="mt-2 text-sm text-white/70">The AI for Education</p>
            <div className="mt-4 flex items-center gap-3 text-white/70">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="mailto:connect@theaame.com" className="hover:text-white" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="X">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/i-am-aame" target="_blank" rel="noreferrer" className="hover:text-white" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Use cases</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("use-cases-info")}>
                  Overview
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium">Enterprise</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("enterprise-aame")}>About</button>
              </li>
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("enterprise-guide")}>Enterprise Guide</button>
              </li>
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("enterprise-security")}>Security</button>
              </li>
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("enterprise-faq")}>FAQ</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("resources-aim")}>AIM Aame</button>
              </li>
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("resources-pricing")}>Pricing</button>
              </li>
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("resources-career")}>Career</button>
              </li>
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("resources-faq")}>FAQ's</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("support-help")}>Help Center</button>
              </li>
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("support-contact")}>Contact Us</button>
              </li>
            </ul>
            <h4 className="font-medium mt-6">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("legal-privacy")}>Privacy Policy</button>
              </li>
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("legal-terms")}>Terms of Service</button>
              </li>
              <li>
                <button className="hover:text-white" onClick={() => onOpenScreen("legal-dpa")}>Data Processing Agreement</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Aame. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-2">
            {["ISO 27001", "SOC 2", "GDPR", "FERPA"].map((c) => (
              <span key={c} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/70 bg-white/5">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
