import { HelpCircle, Mail } from "lucide-react";

export default function SupportPage() {
  const sections = [
    {
      id: "help",
      title: "Help Center",
      icon: HelpCircle,
      body: (
        <div className="space-y-2 text-white/80">
          <p>Browse articles and FAQs to get the most out of Aame.</p>
          <p>
            Can’t find it? Email
            {" "}
            <a className="underline" href="mailto:connect@theaame.com">connect@theaame.com</a>.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: Mail,
      body: (
        <div className="space-y-2 text-white/80">
          <p>We’d love to hear from you.</p>
          <p>
            Write to {" "}
            <a className="underline" href="mailto:connect@theaame.com">connect@theaame.com</a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Support</h1>
          <p className="mt-2 text-white/70 max-w-3xl">
            Get help, find contact options, and explore guidance for using Aame.
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
