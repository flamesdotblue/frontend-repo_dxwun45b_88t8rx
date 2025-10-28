import { BookOpen, Shield, HelpCircle, FileText } from "lucide-react";

export default function AboutPage() {
  const sections = [
    {
      id: "about",
      title: "About Aame",
      icon: BookOpen,
      body: (
        <div className="space-y-3 text-white/80">
          <p>
            Aame is an education‑first AI companion that transforms high‑quality sources—lectures, research papers, and trusted web content—into structured learning paths. We combine retrieval over trusted sources with transparent reasoning and citations so learners and organizations can validate every step.
          </p>
          <p>
            Built for students, professionals, and educators, Aame supports role‑based upskilling, exam preparation, and classroom delivery with export‑ready presentations and assessments.
          </p>
        </div>
      ),
    },
    {
      id: "guide",
      title: "Enterprise Guide",
      icon: FileText,
      body: (
        <div className="space-y-3 text-white/80">
          <p>
            Roll out Aame across teams with project‑aligned tracks, SSO, and governance. Define roles and objectives; Aame recommends curated modules with measurable outcomes (quizzes, project artifacts, and check‑ins).
          </p>
          <ul className="list-disc pl-5 space-y-1 marker:text-white/60">
            <li>Role and project aligned skill plans with citations</li>
            <li>Self‑paced paths plus manager dashboards for progress</li>
            <li>Auto‑generated slide decks and lesson outlines</li>
          </ul>
        </div>
      ),
    },
    {
      id: "security",
      title: "Security",
      icon: Shield,
      body: (
        <div className="space-y-3 text-white/80">
          <p>
            Security and privacy by default: encryption in transit and at rest, access segregation, and environment hardening. We support private deployments, fine‑grained permissions, and single sign‑on.
          </p>
          <ul className="list-disc pl-5 space-y-1 marker:text-white/60">
            <li>SSO (SAML/OIDC) and role‑based access</li>
            <li>Audit logs and least‑privilege access controls</li>
            <li>Regional data residency options</li>
          </ul>
        </div>
      ),
    },
    {
      id: "faq",
      title: "FAQ",
      icon: HelpCircle,
      body: (
        <div className="space-y-3 text-white/80">
          <p>
            Answers to common questions about sources, updates, and deployment.
          </p>
          <ul className="list-disc pl-5 space-y-1 marker:text-white/60">
            <li>Sources include YouTube lectures, peer‑reviewed papers, and reputable web content.</li>
            <li>Content refreshes as new high‑signal material appears.</li>
            <li>Deploy in our cloud or a private environment depending on your needs.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h1>
          <p className="mt-2 text-white/70 max-w-3xl">
            Explore Aame's mission, deployment guidance, security posture, and answers to common questions—all in one place.
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
              <div className="mt-3 text-sm">
                {body}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
