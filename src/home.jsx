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
    { num: '01', title: 'Website Design', body: 'Fast, professional, designed to convert visitors into booked appointments.', tags: ['Design', 'Dev', 'SEO-Ready'] },
    { num: '02', title: 'Meta & Google Ads', body: 'Targeted ad campaigns that put your shop in front of local customers who are actively looking.', tags: ['Meta Ads', 'Google Ads', 'Local'] },
    { num: '03', title: 'Social Media', body: 'Consistent, on-brand content that builds your presence and keeps customers coming back.', tags: ['Content', 'Strategy', 'Growth'] },
    { num: '04', title: 'SEO', body: 'Show up when customers search for your services. Get found on Google without paying for every click.', tags: ['Local SEO', 'Rankings', 'Traffic'] },
    { num: '05', title: 'Logo Design', body: 'A brand that looks as professional as the work you do. First impressions matter.', tags: ['Branding', 'Identity', 'Logo'] },
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
      title: 'Niche Expertise',
      body: 'We don\'t spread thin across every industry. We go deep on yours. We learn your customers, your competition, and what actually makes someone choose you over the next option.',
    },
    {
      num: '#02',
      title: 'Your Business, Our Mission',
      body: 'Most agencies treat clients like a number. We don\'t. We show up with the same urgency and care as if your business were our own, because we know exactly what\'s at stake.',
    },
    {
      num: '#03',
      title: 'Full-Service Growth',
      body: 'Website. Ads. Social. SEO. Brand. Everything under one roof so your marketing actually works together instead of pulling in five different directions.',
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
                Motion Marketing helps local service businesses get found,
                look professional, and grow. Websites, ads, social, SEO,
                and branding from someone who treats your business like her own.
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
                We work with local service businesses of all kinds. Auto is our home
                base, but if you run a service business and need marketing that
                actually works, you're exactly who we're here for.
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
                <div className="photo-placeholder" style={{height: '100%', minHeight: '500px'}}>
                  <span>👤</span>
                  [Jules Photo]<br/>
                  <small style={{color: 'var(--text-muted)', fontSize: '11px'}}>Replace with your photo</small>
                </div>
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
                  Jules started Motion Marketing after experiencing firsthand what it feels
                  like when a business doesn't have enough customers. That frustration became fuel.
                </p>
                <p className="founder-body">
                  She built this agency for every business owner who's ever wondered why their hard
                  work isn't getting the recognition it deserves. Running a business is personal,
                  and the marketing behind it should be too.
                </p>
                <p className="founder-body">
                  Motion Marketing works with local service businesses of all kinds. Auto is our
                  home base, but any business ready to grow is exactly who we're here for.
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
            Your Business<br/>Deserves<br/>More Customers.
          </h2>
          <p className="cta-strip-sub">
            Let's build the marketing engine your business deserves.
            Free audit. No pressure, no fluff.
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
