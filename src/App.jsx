import { useMemo, useState } from "react";
import SidebarNav from "./components/SidebarNav";
import HomeSection from "./components/HomeSection";
import UseCasesSection from "./components/UseCasesSection";
import SiteFooter from "./components/SiteFooter";

function App() {
  const [route, setRoute] = useState("home");
  const [screen, setScreen] = useState(null); // { key, title }

  const onNavigate = (key) => setRoute(key);
  const openScreen = (key) => setScreen({ key });
  const closeScreen = () => setScreen(null);

  const screenContent = useMemo(() => {
    switch (screen?.key) {
      case "use-cases-info":
        return {
          title: "Use Cases",
          body: (
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900">Study Prep</h4>
                <p className="mt-1">
                  Students can learn by syllabus, competitive exams, or skills/job-role based courses. Aame structures a clear path with curated videos, papers, and web references.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Upskilling</h4>
                <p className="mt-1">
                  Professionals upgrade their careers through targeted skill advancements. Aame even teaches how to use other AI tools by building hands-on, real-time courses.
                </p>
              </div>
            </div>
          ),
        };
      case "enterprise-aame":
        return {
          title: "Aame for Enterprise",
          body: (
            <p className="text-gray-700">
              Aame is a professional upskilling AI—think of it like a capable AI coach. Team members map career goals and Aame generates courses aligned with projects, stacks, and strategic targets.
            </p>
          ),
        };
      case "enterprise-guide":
        return {
          title: "Enterprise Guide",
          body: (
            <div className="space-y-4 text-gray-700">
              <p>
                Leaders describe active projects and constraints. Aame designs role-based tracks granting every employee access to 6 core skills plus a long-term, year-long program.
              </p>
              <ul className="list-disc pl-5 space-y-1">
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
            <p className="text-gray-700">
              Custom security deployments available. Data access rules, SSO, and governance can be tailored to your enterprise needs.
            </p>
          ),
        };
      case "enterprise-faq":
        return {
          title: "Enterprise FAQ",
          body: (
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
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
            <blockquote className="text-xl font-medium text-gray-800">
              “We are building education for anyone curious enough to ask and brave enough to try—where intelligence meets access.”
            </blockquote>
          ),
        };
      case "resources-pricing":
        return {
          title: "Pricing",
          body: (
            <div className="space-y-3 text-gray-700">
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Learner — $50</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                  <li>Curated learning paths</li>
                  <li>Source citations and links</li>
                  <li>Assessments after topics</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Enterprise — Custom</h4>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
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
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>What sources do you use? YouTube, papers, reputable web content.</li>
              <li>How often is content refreshed? Continuously with new signals.</li>
              <li>Do you support exams? Yes—competitive exams and university syllabi.</li>
            </ul>
          ),
        };
      case "support-help":
        return {
          title: "Help Center",
          body: (
            <div className="space-y-2 text-gray-700">
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
            <div className="space-y-2 text-gray-700">
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
            <p className="text-gray-700">We respect your privacy and handle data with care and transparency.</p>
          ),
        };
      case "legal-terms":
        return {
          title: "Terms of Service",
          body: (
            <p className="text-gray-700">By using Aame you agree to our fair-use and acceptable-use policies.</p>
          ),
        };
      case "legal-dpa":
        return {
          title: "Data Processing Agreement",
          body: (
            <p className="text-gray-700">Custom DPA available for enterprises requiring strict compliance.</p>
          ),
        };
      default:
        return null;
    }
  }, [screen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <SidebarNav current={route} onNavigate={onNavigate} />

      <main className="pl-56">
        {route === "home" && <HomeSection />}
        {route === "use-cases" && <UseCasesSection />}
        <SiteFooter onOpenScreen={openScreen} />
      </main>

      {screenContent && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={closeScreen} />
          <div className="absolute right-0 top-0 h-full w-full sm:w-[600px] bg-white shadow-2xl overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">{screenContent.title}</h3>
              <button onClick={closeScreen} className="rounded-md px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200">Close</button>
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
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input name="mobile" value={form.mobile} onChange={onChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
          <input name="linkedin" value={form.linkedin} onChange={onChange} placeholder="https://linkedin.com/in/username" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
        <input type="file" onChange={(e) => setResume(e.target.files?.[0] || null)} className="mt-1 block w-full text-sm text-gray-600" />
        {resume && <p className="text-xs text-gray-500 mt-1">Selected: {resume.name}. You will need to attach this file in your email client.</p>}
      </div>
      <button type="submit" className="rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white font-medium shadow hover:shadow-md">Send Application</button>
    </form>
  );
}

export default App;
