import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

export default function SiteFooter({ onOpenScreen }) {
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <div className="text-2xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">Aame</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">The AI for Education</p>
            <div className="mt-4 flex items-center gap-3 text-gray-600">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-600" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="mailto:connect@theaame.com" className="hover:text-purple-600" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-purple-600" aria-label="X">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/i-am-aame" target="_blank" rel="noreferrer" className="hover:text-purple-600" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* USE CASES */}
          <div>
            <h4 className="font-semibold text-gray-900">Use Cases</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("use-cases-info")}>
                  Overview
                </button>
              </li>
            </ul>
          </div>

          {/* ENTERPRISE */}
          <div>
            <h4 className="font-semibold text-gray-900">Enterprise</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("enterprise-aame")}>Aame for Enterprise</button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("enterprise-guide")}>Enterprise Guide</button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("enterprise-security")}>Security</button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("enterprise-faq")}>FAQ</button>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold text-gray-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("resources-aim")}>AIM Aame</button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("resources-pricing")}>Pricing</button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("resources-career")}>Career</button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("resources-faq")}>FAQ's</button>
              </li>
            </ul>
          </div>

          {/* SUPPORT & LEGAL */}
          <div>
            <h4 className="font-semibold text-gray-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("support-help")}>Help Center</button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("support-contact")}>Contact Us</button>
              </li>
            </ul>
            <h4 className="font-semibold text-gray-900 mt-6">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("legal-privacy")}>Privacy Policy</button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("legal-terms")}>Terms of Service</button>
              </li>
              <li>
                <button className="text-gray-600 hover:text-gray-900" onClick={() => onOpenScreen("legal-dpa")}>Data Processing Agreement</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Aame. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              "ISO 27001",
              "SOC 2",
              "GDPR",
              "FERPA",
            ].map((c) => (
              <span key={c} className="text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-600 bg-white">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
