// services.jsx — Services landing page

function useReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealSection({ children, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${delay ? ' reveal-delay-' + delay : ''}`}
    >
      {children}
    </div>
  );
}

function Services() {
  const services = [
    {
      num: '01',
      title: 'Website Design',
      tagline: 'Your first impression before anyone walks through the door.',
      body: 'Most customers check your website before they call. A weak site loses jobs before you ever know about them. We build fast, professional sites that turn visitors into leads.',
      highlights: ['Custom design, not a template', 'Mobile-first and fast-loading', 'Built to rank on Google from day one'],
      href: '/services/website-design',
    },
    {
      num: '02',
      title: 'Meta & Google Ads',
      tagline: 'In front of the right people, right now.',
      body: 'SEO takes time. Ads get you leads today. We build and manage campaigns that target the customers you actually want, in the area you serve, and keep optimizing until they perform.',
      highlights: ['Google Search and Meta campaigns', 'Targeted to your real service area', 'Monthly reporting and ongoing optimization'],
      href: '/services/ads',
    },
    {
      num: '03',
      title: 'Social Media',
      tagline: 'Stay visible. Stay trusted. Stay top of mind.',
      body: 'When someone looks you up and your last post was months ago, they move on. We keep your accounts active, professional, and consistent so what they find builds trust.',
      highlights: ['Instagram and Facebook management', 'Content that actually showcases your work', 'Posting strategy built for your market'],
      href: '/services/social-media',
    },
    {
      num: '04',
      title: 'SEO',
      tagline: 'Get found by people already looking for you.',
      body: 'Every day, people search for exactly what you offer. SEO determines whether they find you or your competitor. We build the organic presence that keeps generating leads without a monthly ad spend.',
      highlights: ['Google Business Profile optimization', 'Local keyword targeting', 'Long-term rankings that compound over time'],
      href: '/services/seo',
    },
    {
      num: '05',
      title: 'Logo & Brand Design',
      tagline: 'Look as professional as you actually are.',
      body: 'Your brand builds trust before anyone meets you. We create clean, modern identities that look sharp everywhere your business shows up.',
      highlights: ['Custom logo, not stock icons rearranged', 'Full brand package including colors and type', 'Every file format you will ever need'],
      href: '/services/logo-design',
    },
  ];

  return (
    <React.Fragment>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-eyebrow">
            <span className="eyebrow">What We Offer</span>
          </div>
          <h1 className="page-header-title">
            Our<br/>Services
          </h1>
          <p className="page-header-sub">
            Everything a local service business needs to grow. Under one roof, working as one strategy.
          </p>
        </div>
      </section>

      <AccentLine />

      {/* ── Services Grid ── */}
      <section className="section services-landing">
        <div className="container">
          <div className="services-landing-grid">
            {services.map((s, i) => (
              <RevealSection key={s.num} delay={(i % 2) + 1}>
                <div className="service-landing-card">
                  <h2 className="service-landing-title">{s.title}</h2>
                  <p className="service-landing-tagline">{s.tagline}</p>
                  <p className="service-landing-body">{s.body}</p>
                  <ul className="service-landing-highlights">
                    {s.highlights.map((h, hi) => (
                      <li key={hi} className="service-landing-highlight">
                        <span className="service-landing-check">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a href={s.href} className="service-landing-link">
                    Full details <span>→</span>
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── CTA ── */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-eyebrow">
            <span className="eyebrow">Let's Talk</span>
          </div>
          <h2 className="cta-strip-headline">
            Not Sure<br/>Where To Start?
          </h2>
          <p className="cta-strip-sub">
            Fill out the questionnaire and we'll tell you exactly what would
            move the needle most for your business. Free, no obligation, no pitch.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary btn-lg">Get a Free Audit</a>
            <a href="tel:7327725590" className="btn btn-outline btn-lg">Call 732-772-5590</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = Services;
