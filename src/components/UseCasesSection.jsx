export default function UseCasesSection() {
  return (
    <section className="min-h-screen px-6 md:px-12 py-16">
      <header className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Use Cases
        </h2>
        <p className="mt-3 text-gray-600">
          Real examples of how Aame builds courses and presentations from real-time sources like YouTube, research papers, the open web, and target company or exam data.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Professional Upskilling */}
        <Card
          title="Professional Upskilling"
          subtitle="Skill and job-role based course creation"
          sources={["YouTube", "Research Papers", "Web Search", "Target Company Data"]}
          videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
          description="Aame curates a practical curriculum, gathering videos, papers, and relevant resources. It also links recommended YouTube videos and source papers directly inside the course."
        />

        {/* Student Preparation */}
        <Card
          title="Student Preparation"
          subtitle="Competitive exam oriented course creation"
          sources={["YouTube", "Research Papers", "Web Search", "Test Papers", "Target Exam Data"]}
          videoSrc="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          description="Aame builds a topic-by-topic plan, collecting past papers, lectures, and study guides. It keeps the course updated with new, high-quality sources over time."
        />

        {/* Professor Assistance */}
        <Card
          title="Professor Assistance"
          subtitle="University-grade AI presentation generation"
          sources={["Syllabi", "University Repos", "Research Papers", "Web Sources"]}
          videoSrc="https://www.w3schools.com/html/movie.mp4"
          description="Automatically creates clean, structured presentations for lectures with citations and speaker notes that reference reputable sources."
        />

        {/* AAME is Accurate */}
        <div className="rounded-2xl border border-gray-200 p-6 bg-white/70 backdrop-blur-sm">
          <h3 className="text-xl font-semibold">AAME is Accurate</h3>
          <p className="mt-2 text-gray-600">
            After each topic, Aame generates quick assessments to verify understanding. Here are snapshots of topic check-ins and mini tests.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100">
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                  Assessment Photo {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 text-sm text-gray-500">
        Note: Example videos are for demonstration only.
      </div>
    </section>
  );
}

function Card({ title, subtitle, sources, videoSrc, description }) {
  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white/70 backdrop-blur-sm">
      <div className="aspect-video bg-black/5">
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
        <p className="text-gray-600 mt-1">{subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {sources.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-4 text-gray-700">{description}</p>
      </div>
    </div>
  );
}
