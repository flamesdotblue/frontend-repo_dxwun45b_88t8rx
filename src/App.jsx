import { useMemo, useState } from "react";
import SidebarNav from "./components/SidebarNav";
import HomeSection from "./components/HomeSection";
import UseCasesSection from "./components/UseCasesSection";
import SiteFooter from "./components/SiteFooter";

function App() {
  const [route, setRoute] = useState("home");
  const [screen, setScreen] = useState(null); // { key }

  const onNavigate = (key) => setRoute(key);
  const openScreen = (key) => setScreen({ key });
  const closeScreen = () => setScreen(null);

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
      case "enterprise-aame":
        return {
          title: "Aame for Enterprise",
          body: (
            <p className="text-white/80">
              A capable AI coach for teams. Map goals and generate role-based programs aligned with projects, stacks, and strategy.
            </p>
          ),
        };
      case "enterprise-guide":
        return {
          title: "Enterprise guide",
          body: (
            <div className="space-y-4 text-white/80">
              <p>
                Describe projects and constraints; Aame designs tracks granting each employee access to core skills and long-term plans.
              </p>
              <ul className="list-disc pl-5 space-y-1 marker:text-white/60">
                <li>Role and project aligned skill plans</li>
                <li>Citations and links to source materials</li>
                <li>Auto-generated presentations and check-ins</li>
              </ul>
            </div>
          ),
        };
      case "enterprise-security":
        return {
          title: "Security",
          body: (
            <p className="text-white/80">
              Custom security deployments, fine-grained access, SSO, and governance tailored to enterprise requirements.
            </p>
          ),
        };
      case "enterprise-faq":
        return {
          title: "Enterprise FAQ",
          body: (
            <ul className="list-disc pl-5 space-y-2 text-white/80 marker:text-white/60">
              <li>Deployment options: cloud or private</li>
              <li>Integrations: SSO, LMS, Confluence, Drive</li>
              <li>Support: guided onboarding, SLAs</li>
            </ul>
          ),
        };
      case "resources-aim":
        return {
          title: "AIM Aame",
          body: (
            <blockquote className="text-xl font-medium text-white">
              “We are building education for anyone curious enough to ask and brave enough to try—where intelligence meets access.”
            </blockquote>
          ),
        };
      case "resources-pricing":
        return {
          title: "Pricing",
          body: (
            <div className="grid gap-4 text-white/80">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h4 className="font-semibold text-white">Learner — $50</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm marker:text-white/60">
                  <li>Curated learning paths</li>
                  <li>Source citations and links</li>
                  <li>Assessments after topics</li>
                </ul>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h4 className="font-semibold text-white">Enterprise — Custom</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm marker:text-white/60">
                  <li>Org-wide skill maps</li>
                  <li>Private deployments and SSO</li>
                  <li>Admin analytics and SLAs</li>
                </ul>
              </div>
            </div>
          ),
        };
      case "resources-career":
        return {
          title: "Career — Join Aame",
          body: <CareerForm />,
        };
      case "resources-faq":
        return {
          title: "FAQ's",
          body: (
            <ul className="list-disc pl-5 space-y-2 text-white/80 marker:text-white/60">
              <li>Sources include YouTube, papers, reputable web content.</li>
              <li>Content is refreshed continuously with new signals.</li>
              <li>We support competitive exams and university syllabi.</li>
            </ul>
          ),
        };
      case "support-help":
        return {
          title: "Help Center",
          body: (
            <div className="space-y-2 text-white/80">
              <p>Browse articles and FAQs to get the most out of Aame.</p>
              <p>
                Can’t find it? Email <a className="underline" href="mailto:connect@theaame.com">connect@theaame.com</a>.
              </p>
            </div>
          ),
        };
      case "support-contact":
        return {
          title: "Contact Us",
          body: (
            <div className="space-y-2 text-white/80">
              <p>We’d love to hear from you.</p>
              <p>
                Write to <a className="underline" href="mailto:connect@theaame.com">connect@theaame.com</a>
              </p>
            </div>
          ),
        };
      case "legal-privacy":
        return {
          title: "Privacy Policy",
          body: (
            <p className="text-white/80">We respect your privacy and handle data with care and transparency.</p>
          ),
        };
      case "legal-terms":
        return {
          title: "Terms of Service",
          body: (
            <p className="text-white/80">By using Aame you agree to our fair-use and acceptable-use policies.</p>
          ),
        };
      case "legal-dpa":
        return {
          title: "Data Processing Agreement",
          body: (
            <p className="text-white/80">Custom DPA available for enterprises requiring strict compliance.</p>
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
        {route === "home" && <HomeSection />}
        {route === "use-cases" && <UseCasesSection />}
        <SiteFooter onOpenScreen={openScreen} />
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

function CareerForm() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", linkedin: "" });
  const [resume, setResume] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Career application — Aame");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}\nLinkedIn: ${form.linkedin}\n\nNote: Please attach your resume file to this email before sending.`
    );
    window.location.href = `mailto:connect@theaame.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name">
          <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
        </Field>
        <Field label="Email">
          <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
        </Field>
        <Field label="Mobile Number">
          <input name="mobile" value={form.mobile} onChange={onChange} required className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
        </Field>
        <Field label="LinkedIn Profile">
          <input name="linkedin" value={form.linkedin} onChange={onChange} placeholder="https://linkedin.com/in/username" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
        </Field>
      </div>
      <div>
        <label className="block text-sm font-medium text-white">Upload Resume</label>
        <input type="file" onChange={(e) => setResume(e.target.files?.[0] || null)} className="mt-1 block w-full text-sm text-white/70 file:mr-4 file:rounded-md file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-white hover:file:bg-white/15" />
        {resume && <p className="text-xs text-white/60 mt-1">Selected: {resume.name}. Attach this file in your email client.</p>}
      </div>
      <button type="submit" className="rounded-md bg-white px-4 py-2 text-black font-medium hover:bg-white/90">Send application</button>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white">{label}</label>
      {children}
    </div>
  );
}

export default App;
