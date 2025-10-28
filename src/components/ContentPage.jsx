import React from 'react';

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white/95">{title}</h2>
      <div className="mt-4 text-white/80 leading-relaxed">{children}</div>
    </section>
  );
}

export default function ContentPage({ route }) {
  const sectionsByRoute = {
    'use-cases': [
      { id: 'overview', title: 'Overview', body: 'See how teams across product, design, and marketing ship faster with an integrated toolchain.' },
      { id: 'product', title: 'Product teams', body: 'Prototype rich interactions quickly and deliver polished interfaces with confidence.' },
      { id: 'marketing', title: 'Marketing', body: 'Create immersive landing pages and iterate on visuals without handoff friction.' },
    ],
    'enterprise': [
      { id: 'overview', title: 'Enterprise', body: 'Security, scale, and support built for the largest organizations.' },
      { id: 'security', title: 'Security', body: 'SSO, SCIM, audit logs, and enterprise compliance to keep your data safe.' },
      { id: 'pricing', title: 'Pricing', body: 'Flexible plans tailored to your organization’s needs.' },
    ],
    'resources': [
      { id: 'guides', title: 'Guides', body: 'Step-by-step walkthroughs and best practices to get the most out of the platform.' },
      { id: 'templates', title: 'Templates', body: 'Kickstart new projects with curated templates for common workflows.' },
      { id: 'changelog', title: 'Changelog', body: 'Track new features, improvements, and fixes as they ship.' },
    ],
    'support': [
      { id: 'contact', title: 'Contact', body: 'We’re here to help. Reach us via chat, email, or the community forum.' },
      { id: 'faq', title: 'FAQ', body: 'Find quick answers to common questions.' },
      { id: 'status', title: 'Status', body: 'Real-time updates on uptime and incidents.' },
    ],
    'legal': [
      { id: 'terms', title: 'Terms', body: 'Our terms of service govern your use of the platform.' },
      { id: 'privacy', title: 'Privacy', body: 'How we collect, use, and protect your personal data.' },
      { id: 'compliance', title: 'Compliance', body: 'Information on certifications and regulatory compliance.' },
    ],
  };

  const sections = sectionsByRoute[route] ?? [];

  return (
    <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white/95 capitalize">
        {route.replace('-', ' ')}
      </h1>
      <p className="mt-3 text-white/70">
        Explore key information and quick links for {route.replace('-', ' ')}.
      </p>

      <div className="mt-10">
        {sections.map((s) => (
          <Section key={s.id} id={s.id} title={s.title}>
            {s.body}
          </Section>
        ))}
      </div>
    </div>
  );
}
