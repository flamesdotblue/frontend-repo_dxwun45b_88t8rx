import { BadgeDollarSign as Pricing, Briefcase, HelpCircle, FileText, UserPlus } from "lucide-react";

export default function ResourcesPage() {
  const sections = [
    {
      id: "aim",
      title: "AIM Aame",
      icon: Briefcase,
      body: (
        <div className="space-y-3 text-white/80">
          <p>
            We are building education for anyone curious enough to ask and brave enough to try — where intelligence meets access. AIM is our north star for product, content, and community.
          </p>
          <p>
            Join us as we collaborate with educators, industry experts, and learners to map skills to outcomes with radical transparency and citations.
          </p>
        </div>
      ),
    },
    {
      id: "pricing",
      title: "Pricing",
      icon: Pricing,
      body: (
        <div className="grid gap-4 text-white/80">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="font-semibold text-white">Learner — $50</h4>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm marker:text-white/60">
              <li>Curated learning paths with citations</li>
              <li>Assessments and progress tracking</li>
              <li>Exportable notes and slides</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <h4 className="font-semibold text-white">Enterprise — Custom</h4>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm marker:text-white/60">
              <li>Org-wide skill maps and analytics</li>
              <li>Private deployments and SSO</li>
              <li>SLAs and dedicated support</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "career",
      title: "Career — Join Aame",
      icon: UserPlus,
      body: <CareerForm />,
    },
    {
      id: "faq",
      title: "FAQ's",
      icon: HelpCircle,
      body: (
        <ul className="list-disc pl-5 space-y-2 text-white/80 marker:text-white/60">
          <li>Sources include YouTube, papers, and reputable web content.</li>
          <li>Content is refreshed continuously with new signals.</li>
          <li>We support competitive exams and university syllabi.</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Resources</h1>
          <p className="mt-2 text-white/70 max-w-3xl">
            Explore product principles, plans, opportunities, and quick answers.
          </p>
        </header>

        <nav className="mb-8 flex flex-wrap items-center gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10">
              {s.title}
            </a>
          ))}
        </nav>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map(({ id, title, icon: Icon, body }) => (
            <article id={id} key={id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2">
                <Icon size={18} className="text-white/80" aria-hidden />
                <h2 className="text-xl font-semibold">{title}</h2>
              </div>
              <div className="mt-3 text-sm">{body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const subject = encodeURIComponent("Career application — Aame");
        const body = encodeURIComponent(
          `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nMobile: ${form.get("mobile")}\nLinkedIn: ${form.get("linkedin")}\n\nNote: Please attach your resume file to this email before sending.`
        );
        window.location.href = `mailto:connect@theaame.com?subject=${subject}&body=${body}`;
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name">
          <input name="name" required className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
        </Field>
        <Field label="Email">
          <input type="email" name="email" required className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
        </Field>
        <Field label="Mobile Number">
          <input name="mobile" required className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
        </Field>
        <Field label="LinkedIn Profile">
          <input name="linkedin" placeholder="https://linkedin.com/in/username" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
        </Field>
      </div>
      <div>
        <label className="block text-sm font-medium text-white">Upload Resume</label>
        <input type="file" className="mt-1 block w-full text-sm text-white/70 file:mr-4 file:rounded-md file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-white hover:file:bg-white/15" />
        <p className="text-xs text-white/60 mt-1">Attach this file in your email client after clicking Send.</p>
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
