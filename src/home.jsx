// home.jsx — Home page

function useReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealSection({ children, delay, className }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${delay ? ' reveal-delay-' + delay : ''}${className ? ' ' + className : ''}`}
    >
      {children}
    </div>
  );
}

function Home() {
  const niches = [
    { name: 'Tint & Wrap Shops',  img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80' },
    { name: 'Detail & PPF Shops', img: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80' },
    { name: 'Performance Shops',  img: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=600&q=80' },
    { name: 'Auto Repair',        img: 'https://images.unsplash.com/photo-1625047509252-ab38fb5c7343?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <React.Fragment>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-grid"></div>
          <div className="hero-bg-photo"></div>
          <div className="hero-bg-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-dot"></div>
                <span className="eyebrow">Local Business Marketing · New Jersey</span>
              </div>

              <h1 className="hero-headline">
                Great Work.<br/>
                Deserves Great<br/>
                <span className="hero-headline-accent">Visibility.</span>
              </h1>

              <p className="hero-sub">
                Your shop does the work. We make sure people find it —
                websites, ads, social, and SEO built for automotive businesses
                that are ready to grow.
              </p>

              <div className="hero-actions">
                <a href="/contact" className="btn btn-primary btn-lg">Get a Free Audit</a>
                <a href="/services" className="btn btn-outline btn-lg">See Services</a>
              </div>

              <div className="hero-divider"></div>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">Work directly with Jules</div>
                </div>
                <div>
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">Free audit, zero commitment</div>
                </div>
                <div>
                  <div className="hero-stat-value">✓</div>
                  <div className="hero-stat-label">Strategy before we spend a dollar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── Who We Work With ── */}
      <section className="section serve-section">
        <div className="container">
          <RevealSection>
            <div className="serve-intro">
              <AccentHeader>
                <h2 className="display-md">Who We Work With</h2>
              </AccentHeader>
              <p className="serve-intro-body">
                The automotive industry isn't just a niche to us, it's part
                of who we are. But at the end of the day, we love working
                with people who care deeply about what they do, whatever
                industry they're in.
              </p>
            </div>
          </RevealSection>

          <div className="serve-grid">
            {niches.map((n, i) => (
              <RevealSection key={n.name} delay={(i % 4) + 1}>
                <a href="/services" className="serve-card">
                  <img className="serve-card-img" src={n.img} alt={n.name} />
                  <span className="serve-card-name">{n.name}</span>
                </a>
              </RevealSection>
            ))}
          </div>
          <RevealSection delay={2}>
            <div className="serve-card serve-card-more">
              <span className="serve-card-name">...and many more local service businesses ready to grow.</span>
            </div>
          </RevealSection>
        </div>
      </section>

      <AccentLine />

      {/* ── Trust ── */}
      <section className="section trust-section">
        <div className="container">
          <div className="trust-grid">
            {[
              { title: 'Founder-Led', body: 'You work directly with me on everything. No account managers, no handoffs, no surprises.' },
              { title: 'Honest Always', body: 'If we don\'t think you should spend money yet, we\'ll tell you that. Even if it costs us the job.' },
              { title: 'Strategy Before Spend', body: 'We never suggest running ads until the right foundation is in place. Money spent too early is money wasted.' },
            ].map((item, i) => (
              <RevealSection key={i} delay={i + 1}>
                <div className="trust-item">
                  <div className="trust-check">✓</div>
                  <div>
                    <div className="trust-card-title">{item.title}</div>
                    <div className="trust-card-body">{item.body}</div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── Founder Quote ── */}
      <section className="section-sm founder-quote-section">
        <div className="container">
          <RevealSection>
            <blockquote className="founder-quote-block">
              <p className="founder-quote-text">"The problem was never the work. It was making sure the right people knew it existed."</p>
              <cite className="founder-quote-cite">Jules Battiato, Founder of Motion Marketing LLC</cite>
            </blockquote>
          </RevealSection>
        </div>
      </section>

      <AccentLine />

      {/* ── Meet Jules ── */}
      <section className="section founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-photo">
              <div className="founder-photo-frame">
                <img
                  src="/assets/jules.jpg"
                  alt="Jules Battiato, Founder of Motion Marketing LLC"
                  style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
                />
              </div>
            </div>

            <div className="founder-content">
              <RevealSection>
                <AccentHeader>
                  <div className="founder-title">Founder, Motion Marketing LLC</div>
                </AccentHeader>
                <h2 className="founder-name">Jules<br/>Battiato</h2>
              </RevealSection>

              <RevealSection delay={1}>
                <p className="founder-body">
                  Jules started Motion Marketing because she lived it. She ran her own business,
                  poured everything into it, and still couldn't get the sales to match the work
                  she was putting in. Not because the product wasn't good. Because not enough
                  people knew it existed.
                </p>
                <p className="founder-body">
                  That experience became the reason this agency exists. She built it for every
                  business owner who knows they're better than their online presence suggests
                  and is tired of watching the competition win customers they shouldn't be losing.
                </p>
                <p className="founder-body">
                  Motion Marketing works with local service businesses of all kinds. Auto is home
                  base. But if you're running a service business and you're serious about growing
                  it, you're exactly who we're here for.
                </p>
              </RevealSection>

              <RevealSection delay={2}>
                <div className="founder-tags">
                  <div className="founder-tag"><div className="founder-tag-dot"></div>NJ Based</div>
                  <div className="founder-tag"><div className="founder-tag-dot"></div>Local Business Specialist</div>
                  <div className="founder-tag"><div className="founder-tag-dot"></div>Full-Service Agency</div>
                  <div className="founder-tag"><div className="founder-tag-dot"></div>Results-Driven</div>
                </div>
              </RevealSection>

              <RevealSection delay={3}>
                <a href="/about" className="btn btn-outline">Full Story →</a>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── CTA Strip ── */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-eyebrow">
            <span className="eyebrow">Ready To Grow?</span>
          </div>
          <h2 className="cta-strip-headline">
            Let's Grow<br/>Something<br/>Great.
          </h2>
          <p className="cta-strip-sub">
            A free audit means we look at where you are, tell you honestly
            what's working and what isn't, and show you exactly what we'd
            do to grow your business. No pressure. No fluff. Just real answers.
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

window.__Page = Home;
