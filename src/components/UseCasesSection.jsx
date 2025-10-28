import { GraduationCap, Briefcase, Presentation, ShieldCheck, FileText, Lock, CheckCircle2 } from "lucide-react";

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Use cases</h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            How Aame designs courses and presentations from YouTube, research papers, the open web, and private data for roles, exams, and enterprise readiness.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Professional upskilling"
            subtitle="Skill and job‑role aligned tracks"
            chips={["YouTube", "Research Papers", "Web", "Company Data"]}
            videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
            description="Source‑linked curricula tailored to your stack, with measurable milestones and project artifacts that demonstrate on‑the‑job proficiency."
            Icon={Briefcase}
          />
          <Card
            title="Student preparation"
            subtitle="Competitive exams and syllabi"
            chips={["YouTube", "Papers", "Web", "Past Papers", "Exam Data"]}
            videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            description="Topic‑wise plans, spaced practice, and quick diagnostics—mapped to official syllabi and trusted references for transparent learning."
            Icon={GraduationCap}
          />
          <Card
            title="Professor assistance"
            subtitle="Auto‑generated lectures and decks"
            chips={["Syllabi", "Repos", "Papers", "Web Sources"]}
            videoSrc="https://www.w3schools.com/html/movie.mp4"
            description="Clean, cited presentations with speaker notes, structured outlines, and export‑ready slides for in‑class or online delivery."
            Icon={Presentation}
          />
          <ComplianceCard />
        </div>
      </div>
    </section>
  );
}

function Card({ title, subtitle, chips, videoSrc, description, Icon }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="aspect-video bg-black/30">
        <video
          src={videoSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="text-white/80" size={18} aria-hidden />}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-white/70 mt-1">{subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
              {c}
            </span>
          ))}
        </div>
        <p className="mt-4 text-white/80">{description}</p>
      </div>
    </div>
  );
}

function ComplianceCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="aspect-video bg-black/30">
        {/* Compliance‑themed explainer clip */}
        <video
          src="https://cdn.coverr.co/videos/coverr-business-man-typing-into-his-laptop-5351/1080p.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-white/80" size={18} aria-hidden />
          <h3 className="text-xl font-semibold">Data Processing Agreements</h3>
        </div>
        <p className="text-white/70 mt-1">Compliance‑ready by design</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["GDPR", "SOC 2", "ISO 27001", "FERPA"].map((c) => (
            <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
              {c}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-3 text-white/80">
          <Bullet icon={FileText} title="Contractual clarity" text="Standardized DPA terms with clear role definitions (controller/processor), sub‑processor disclosures, and audit mechanisms." />
          <Bullet icon={Lock} title="Data security" text="Encryption in transit and at rest, access segregation, and environment hardening aligned to enterprise policy baselines." />
          <Bullet icon={CheckCircle2} title="Rights & governance" text="Support for data subject rights (access, erasure), retention policies, and jurisdictional safeguards with verifiable logs." />
        </div>
      </div>
    </div>
  );
}

function Bullet({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">
        <Icon size={16} className="text-white/80" aria-hidden />
      </div>
      <div>
        <div className="text-sm font-medium text-white">{title}</div>
        <p className="text-sm text-white/70">{text}</p>
      </div>
    </div>
  );
}
