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
      body: 'Generic marketing doesn\'t work. We built this agency around one industry so we can go deeper than any generalist agency ever could. Your niche is our home base.',
    },
    {
      num: '02',
      title: 'Ownership Mentality',
      body: 'We treat every client\'s business like it\'s our own. That means honest feedback, proactive ideas, and showing up even when things need to be fixed — not just when things are easy.',
    },
    {
      num: '03',
      title: 'Real Results Only',
      body: 'Vanity metrics don\'t pay the bills. We focus on the numbers that matter: calls, bookings, leads, and revenue. Everything we do points back to actual growth.',
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
            Built by someone who knows what it's like to run a business
            that doesn't have enough customers.
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
                  Motion Marketing started with a feeling most business owners know
                  but rarely talk about — the quiet frustration of working hard every
                  day and still not having enough customers.
                </p>
              </RevealSection>

              <RevealSection delay={1}>
                <div className="about-story-body">
                  <p>
                    Jules Battiato started his first business and poured everything into the
                    work itself — the craft, the service, the quality. But the phone wasn't
                    ringing the way it should've been. Not because the business wasn't good.
                    Because nobody knew it existed.
                  </p>
                  <p>
                    That experience — being a great operator with a marketing problem — became
                    the foundation of Motion Marketing. Jules learned everything he could about
                    digital marketing, ran his own campaigns, built his own web presence, and
                    figured out what actually moves the needle for small businesses.
                  </p>
                  <p>
                    He chose to focus on auto businesses specifically because they're his people.
                    Shop owners who take pride in their work. People who care deeply about their
                    craft and their customers. People who deserve to be seen.
                  </p>
                  <p>
                    Motion Marketing exists for one reason: to make sure no shop owner ever has
                    to feel like their hard work is going unnoticed. Your business is your legacy.
                    We treat it that way.
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={2}>
                <div className="founder-tags" style={{marginTop: 'var(--sp-6)'}}>
                  <div className="founder-tag"><div className="founder-tag-dot"></div>Founder — Jules Battiato</div>
                  <div className="founder-tag"><div className="founder-tag-dot"></div>NJ Based</div>
                  <div className="founder-tag"><div className="founder-tag-dot"></div>Auto Industry Focus</div>
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
            Tell us about your shop. We'll put together a free audit and
            show you exactly what we'd do to help you grow.
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
