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
                <div className="photo-placeholder" style={{height: '100%', minHeight: '540px'}}>
                  <span>👤</span>
                  [Jules Photo]<br/>
                  <small style={{color: 'var(--text-muted)', fontSize: '11px'}}>Replace with your photo</small>
                </div>
              </div>
            </div>

            <div>
              <RevealSection>
                <p className="about-story-intro">
                  Motion Marketing started from a feeling most business owners know
                  but don't usually say out loud: you put everything into building
                  something real, and the sales just aren't where they should be.
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <div className="about-story-body">
                  <p>
                    Jules Battiato started her own business and poured everything into it.
                    The product was good. The work was real. But the orders weren't coming in
                    the way they should've been, not because the business wasn't worth it, but
                    because not enough people knew it existed.
                  </p>
                  <p>
                    That experience became the foundation of Motion Marketing. Jules dove deep
                    into digital marketing, figured out what actually moves the needle for small
                    businesses, and built the agency she wished she'd had access to when she was
                    on the other side of it.
                  </p>
                  <p>
                    She built this for every business owner who's putting in the work and still
                    not seeing the growth they deserve. If that's you, this is exactly where you
                    should be.
                  </p>
                  <p>
                    We work with local service businesses of all kinds. Auto is home base. But
                    the mission is always the same: help good businesses grow.
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
                <div className="value-card">
                  <div className="value-card-num">{v.num}</div>
                  <div className="value-card-title">{v.title}</div>
                  <div className="value-card-body">{v.body}</div>
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
