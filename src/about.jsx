// about.jsx — About page

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

function About() {
  const values = [
    {
      num: '01',
      title: 'Niche First',
      body: 'Generalist agencies don\'t win for niche businesses. We go deep on your industry, your customers, and your competition so the marketing we build actually fits your business instead of being copied from someone else\'s.',
    },
    {
      num: '02',
      title: 'Ownership Mentality',
      body: 'We show up like it\'s our name on the door. Honest when things need to change. Proactive when we see an opportunity. Present when things are hard, not just when things are going well.',
    },
    {
      num: '03',
      title: 'Real Results Only',
      body: 'Likes and impressions don\'t pay rent. We focus on the numbers that actually matter: calls, leads, bookings, and revenue. Every decision we make points back to one question: does this grow the business?',
    },
  ];

  return (
    <React.Fragment>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-eyebrow">
            <span className="eyebrow">Our Story</span>
          </div>
          <h1 className="page-header-title">
            About<br/>Motion Marketing
          </h1>
          <p className="page-header-sub">
            Built by someone who lived the frustration of running a great
            business that nobody knew existed, and decided to do something about it.
          </p>
        </div>
      </section>

      <AccentLine />

      {/* ── Founder Story ── */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-photo">
              <div className="about-story-frame">
                <img
                  src="/assets/jules.jpg"
                  alt="Jules Battiato, Founder of Motion Marketing LLC"
                  style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
                />
              </div>
            </div>

            <div>
              <RevealSection>
                <p className="about-story-intro">
                  We believe great local businesses deserve to be found.
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <div className="about-story-body">
                  <p>
                    Not just because it's good for business. Because the alternative is watching
                    someone who cares less, does less, and delivers less walk away with jobs that
                    should've been yours. That's genuinely frustrating. And it happens every day
                    to businesses that are better than their online presence suggests.
                  </p>
                  <p>
                    That belief is what started Motion Marketing.
                  </p>
                  <p>
                    Hi, I'm Jules. I built my own business, poured everything into it, and still
                    couldn't get the momentum to match the effort. Not because the work wasn't
                    good. Because the right people didn't know it existed. That frustration became
                    an obsession with figuring out what actually works, not in theory, but through
                    real campaigns, real feedback, and real results.
                  </p>
                  <p>
                    The way we do it is through websites, ads, social media, SEO, and branding
                    that's built specifically for your business. No templates. No account managers.
                    Just a real strategy, built around your goals, worked on directly by me.
                  </p>
                  <p>
                    If your business is better than your online presence suggests, you're exactly
                    who this was built for.
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={2}>
                <div className="founder-tags" style={{marginTop: 'var(--sp-6)'}}>
                  <div className="founder-tag"><div className="founder-tag-dot"></div>Founder, Jules Battiato</div>
                  <div className="founder-tag"><div className="founder-tag-dot"></div>NJ Based</div>
                  <div className="founder-tag"><div className="founder-tag-dot"></div>Local Business Focus</div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── Values ── */}
      <section className="section values-section">
        <div className="container">
          <RevealSection>
            <div style={{marginBottom: 'var(--sp-7)'}}>
              <AccentHeader>
                <h2 className="display-md">How We Work</h2>
              </AccentHeader>
            </div>
          </RevealSection>

          <div className="values-grid">
            {values.map((v, i) => (
              <RevealSection key={v.num} delay={i + 1}>
                <div className="value-editorial">
                  <div className="value-editorial-title">{v.title}</div>
                  <div className="value-editorial-body">{v.body}</div>
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
            <span className="eyebrow">Work With Us</span>
          </div>
          <h2 className="cta-strip-headline">
            Let's Build<br/>Something.
          </h2>
          <p className="cta-strip-sub">
            Tell us where you are and where you want to be. We'll put together
            a free audit and give you a clear, honest picture of what's possible.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary btn-lg">Get a Free Audit</a>
            <a href="/services" className="btn btn-outline btn-lg">See Services</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = About;
