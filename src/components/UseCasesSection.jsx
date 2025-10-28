export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Use cases</h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            How Aame designs courses and presentations from YouTube, research papers, the open web, and target data for roles and exams.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Professional upskilling"
            subtitle="Skill and job-role aligned tracks"
            chips={["YouTube", "Research Papers", "Web", "Company Data"]}
            videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
            description="Practical, source-linked curricula that evolve with your projects and stack."
          />
          <Card
            title="Student preparation"
            subtitle="Competitive exams and syllabi"
            chips={["YouTube", "Papers", "Web", "Past Papers", "Exam Data"]}
            videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            description="Topic-by-topic plans with assessments and trusted references."
          />
          <Card
            title="Professor assistance"
            subtitle="Auto-generated lectures and decks"
            chips={["Syllabi", "Repos", "Papers", "Web Sources"]}
            videoSrc="https://www.w3schools.com/html/movie.mp4"
            description="Clean, cited presentations with speaker notes and links."
          />
          <Accuracy />
        </div>

        <p className="mt-10 text-sm text-white/60">Demo videos are placeholders. Replace with your assets.</p>
      </div>
    </section>
  );
}

function Card({ title, subtitle, chips, videoSrc, description }) {
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
        <h3 className="text-xl font-semibold">{title}</h3>
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

function Accuracy() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">Aame is accurate</h3>
      <p className="mt-2 text-white/70">
        Topic check-ins and mini-tests verify understanding with quick feedback.
      </p>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] rounded-lg bg-gradient-to-br from-red-500/10 via-orange-500/10 to-amber-400/10 border border-white/10 flex items-center justify-center text-xs text-white/60">
            Assessment {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
