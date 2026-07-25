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
  const services = [
    { num: '01', title: 'Website Design', body: 'Your website is usually the first thing a customer sees. We make sure it earns their trust and turns that visit into a call, a booking, or a sale.', tags: ['Convert', 'Professional', 'SEO-Ready'] },
    { num: '02', title: 'Meta & Google Ads', body: 'The fastest way to get in front of people actively looking for what you offer. We run and optimize the campaigns so you can focus on the work.', tags: ['Meta Ads', 'Google Ads', 'Local'] },
    { num: '03', title: 'Social Media', body: 'Customers look you up before they call. We keep your accounts active and professional so what they find builds trust instead of doubt.', tags: ['Content', 'Strategy', 'Growth'] },
    { num: '04', title: 'SEO', body: 'Every day, people in your area search for exactly what you offer. SEO is what determines whether they find you or your competitor.', tags: ['Local SEO', 'Rankings', 'Traffic'] },
    { num: '05', title: 'Logo Design', body: 'Your brand builds trust before anyone ever meets you. We create identities that make you look as professional as you actually are.', tags: ['Branding', 'Identity', 'Logo'] },
  ];

  const niches = [
    { icon: '🎨', name: 'Tint & Wrap Shops' },
    { icon: '✨', name: 'Detail & PPF Shops' },
    { icon: '⚡', name: 'Performance Shops' },
    { icon: '🔧', name: 'Auto Repair' },
    { icon: '❄️', name: 'HVAC Companies' },
    { icon: '🌿', name: 'Landscaping' },
    { icon: '🏠', name: 'Home Services' },
    { icon: '🔌', name: 'Electricians' },
    { icon: '✚', name: 'And More' },
  ];

  const reasons = [
    {
      num: '#01',
      title: 'We Go Deep',
      body: 'We don\'t take every client in every industry. We go deep on the businesses we work with, learning your customers, your competition, and exactly what it takes to make someone choose you.',
    },
    {
      num: '#02',
      title: 'Your Business, Our Mission',
      body: 'Most agencies invoice and disappear. We don\'t work that way. We treat your business like it\'s ours, because we know exactly what\'s on the line when marketing isn\'t working.',
    },
    {
      num: '#03',
      title: 'Everything Works Together',
      body: 'Website. Ads. Social. SEO. Brand. Under one roof, working as one strategy. Because fragmented marketing doesn\'t grow businesses. Coordinated marketing does.',
    },
  ];

  return (
    <React.Fragment>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-grid"></div>
          <div className="hero-bg-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-dot"></div>
                <span className="eyebrow">Local Business Marketing · New Jersey</span>
              </div>

              <h1 className="hero-headline">
                Your<br/>
                Growth<br/>
                Is Our<br/>
                Business.
              </h1>

              <p className="hero-sub">
                More customers. More calls. More booked jobs. Motion Marketing
                builds and runs the marketing systems that make local service
                businesses grow consistently, without you having to figure it
                out alone.
              </p>

              <div className="hero-actions">
                <a href="/contact" className="btn btn-primary btn-lg">Get a Free Audit</a>
                <a href="/services" className="btn btn-outline btn-lg">See Services</a>
              </div>

              <div className="hero-divider"></div>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-value">Local</div>
                  <div className="hero-stat-label">Business Focus</div>
                </div>
                <div>
                  <div className="hero-stat-value">5</div>
                  <div className="hero-stat-label">Core Services</div>
                </div>
                <div>
                  <div className="hero-stat-value">NJ</div>
                  <div className="hero-stat-label">Based &amp; Beyond</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-card">
                <div className="hero-visual-label">What We Handle</div>
                <div className="hero-visual-services">
                  {['Website Design', 'Meta & Google Ads', 'Social Media', 'SEO', 'Logo Design'].map(s => (
                    <div key={s} className="hero-visual-service">
                      <span>{s}</span>
                      <div className="hero-visual-dot"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── Services Preview ── */}
      <section className="section services-preview">
        <div className="container">
          <div className="services-header">
            <div>
              <AccentHeader>
                <h2 className="display-md">What We Do</h2>
              </AccentHeader>
            </div>
            <a href="/services" className="btn btn-outline">All Services →</a>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <RevealSection key={s.num} delay={(i % 3) + 1}>
                <div className="service-card">
                  <div className="service-card-num">{s.num}</div>
                  <div className="service-card-title">{s.title}</div>
                  <div className="service-card-body">{s.body}</div>
                  <div className="service-card-tags">
                    {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── Who We Serve ── */}
      <section className="section serve-section">
        <div className="container">
          <RevealSection>
            <div className="serve-intro">
              <AccentHeader>
                <h2 className="display-md">Who We Work With</h2>
              </AccentHeader>
              <p className="serve-intro-body">
                From auto shops to HVAC to home services. If you run a local
                service business and you're serious about growing it, you're
                exactly who we're here for.
              </p>
            </div>
          </RevealSection>

          <div className="serve-grid">
            {niches.map((n, i) => (
              <RevealSection key={n.name} delay={(i % 3) + 1}>
                <div className="serve-card">
                  <span className="serve-card-icon">{n.icon}</span>
                  <span className="serve-card-name">{n.name}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── Why Motion Marketing ── */}
      <section className="section why-section">
        <div className="container">
          <RevealSection>
            <div style={{marginBottom: 'var(--sp-7)'}}>
              <AccentHeader>
                <h2 className="display-md">Why Motion Marketing</h2>
              </AccentHeader>
            </div>
          </RevealSection>

          <div className="why-grid">
            {reasons.map((w, i) => (
              <RevealSection key={w.num} delay={i + 1}>
                <div className="why-item">
                  <div className="why-number">{w.num}</div>
                  <div className="why-title">{w.title}</div>
                  <div className="why-body">{w.body}</div>
                </div>
              </RevealSection>
            ))}
          </div>
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
            Let's Find Out<br/>What's<br/>Possible.
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
