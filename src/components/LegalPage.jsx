import { FileCheck, Lock, Scale } from "lucide-react";

export default function LegalPage() {
  const sections = [
    {
      id: "privacy",
      title: "Privacy Policy",
      icon: Lock,
      body: (
        <p className="text-white/80">
          We respect your privacy and handle data with care and transparency. Learn how we collect, use, and protect data across our services.
        </p>
      ),
    },
    {
      id: "terms",
      title: "Terms of Service",
      icon: Scale,
      body: (
        <p className="text-white/80">
          By using Aame you agree to our fair-use and acceptable-use policies. Review your rights and responsibilities as a user.
        </p>
      ),
    },
    {
      id: "dpa",
      title: "Data Processing Agreement",
      icon: FileCheck,
      body: (
        <div className="space-y-3 text-white/80">
          <p>
            Our DPA sets clear controller/processor roles, outlines sub‑processor disclosures, and provides audit support. Security controls include encryption in transit and at rest, environment hardening, and access segregation.
          </p>
          <p>
            We honor data subject rights (access, rectification, erasure) and support retention policies, regional safeguards, and export controls to meet GDPR and sector standards.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Legal</h1>
          <p className="mt-2 text-white/70 max-w-3xl">
            Read our core legal documents and commitments.
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
