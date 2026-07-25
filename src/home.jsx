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
  const [expanded, setExpanded] = React.useState(null);

  const services = [
    { num: '01', title: 'Website Design', body: 'Your website is usually the first thing a customer sees. We make sure it earns their trust and turns that visit into a call, a booking, or a sale.', tags: ['Convert', 'Professional', 'SEO-Ready'] },
    { num: '02', title: 'Meta & Google Ads', body: 'The fastest way to get in front of people actively looking for what you offer. We run and optimize the campaigns so you can focus on the work.', tags: ['Meta Ads', 'Google Ads', 'Local'] },
    { num: '03', title: 'Social Media', body: 'Customers look you up before they call. We keep your accounts active and professional so what they find builds trust instead of doubt.', tags: ['Content', 'Strategy', 'Growth'] },
    { num: '04', title: 'SEO', body: 'Every day, people in your area search for exactly what you offer. SEO is what determines whether they find you or your competitor.', tags: ['Local SEO', 'Rankings', 'Traffic'] },
    { num: '05', title: 'Logo Design', body: 'Your brand builds trust before anyone ever meets you. We create identities that make you look as professional as you actually are.', tags: ['Branding', 'Identity', 'Logo'] },
  ];

  const niches = [
    'Tint & Wrap Shops',
    'Detail & PPF Shops',
    'Performance Shops',
    'Auto Repair',
    'HVAC Companies',
    'Landscaping',
    'Home Services',
    'Electricians',
  ];

  const reasons = [
    {
      num: '#01',
      title: 'We Go Deep',
      body: 'We don\'t take every client in every industry. We go deep on the businesses we work with, learning your customers, your competition, and exactly what it takes to make someone choose you.',
      detail: 'We learn your industry before we touch your marketing. We study what your ideal customer searches for, what your competitors are doing, and what messaging actually converts for businesses like yours. You get a strategy that fits, not a template someone else already used.',
    },
    {
      num: '#02',
      title: 'Your Business, Our Mission',
      body: 'Most agencies invoice and disappear. We don\'t work that way. We treat your business like it\'s ours, because we know exactly what\'s on the line when marketing isn\'t working.',
      detail: 'We bring ideas to the table before you ask. We flag problems before they become expensive. We show up with the same urgency as if our own name were on the door. Because if your business grows, we\'ve done our job right.',
    },
    {
      num: '#03',
      title: 'Everything Works Together',
      body: 'Website. Ads. Social. SEO. Brand. Under one roof, working as one strategy. Because fragmented marketing doesn\'t grow businesses. Coordinated marketing does.',
      detail: 'When your website, ads, social media, and SEO speak the same language, the result is compounding growth. Each piece reinforces the others. Instead of multiple contractors who don\'t talk, you get one team with one goal: more business for you.',
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
                Marketing shouldn't leave you wondering if it's working. We
                build websites, ads, and growth systems that bring in more
                calls, more booked jobs, and more revenue for local service
                businesses.
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

      {/* ── Who We Work With ── */}
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
              <RevealSection key={n} delay={(i % 3) + 1}>
                <div className="serve-card">
                  <span className="serve-card-name">{n}</span>
                </div>
              </RevealSection>
            ))}
          </div>
          <p className="serve-more">...and many more local service businesses ready to grow.</p>
        </div>
      </section>

      <AccentLine />

      {/* ── What Working With Us Looks Like ── */}
      <section className="section process-section">
        <div className="container">
          <RevealSection>
            <AccentHeader>
              <h2 className="display-md">What Working With Us Looks Like</h2>
            </AccentHeader>
            <p style={{fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: '1.7', marginTop: 'var(--sp-3)'}}>
              Most business owners are nervous because they don't know what happens after they reach out. Here's exactly what to expect.
            </p>
          </RevealSection>

          <div className="process-grid">
            {[
              { num: '01', title: 'Free Audit', body: 'We review your website, online presence, and current marketing to understand exactly where you stand.' },
              { num: '02', title: 'Strategy Call', body: 'We walk you through what we found: what\'s working, what\'s not, and where the biggest opportunities are.' },
              { num: '03', title: 'We Build', body: 'We create your website, campaigns, branding, or strategy with your goals at the center of every decision.' },
              { num: '04', title: 'We Optimize', body: 'We keep improving based on real data. Your results get better over time, not just at launch.' },
            ].map((s, i) => (
              <RevealSection key={s.num} delay={i + 1}>
                <div className="process-step">
                  <div className="process-num">{s.num}</div>
                  <div className="process-title">{s.title}</div>
                  <div className="process-body">{s.body}</div>
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
                <div
                  className="why-item"
                  onClick={() => setExpanded(expanded === w.num ? null : w.num)}
                >
                  <div className="why-number">{w.num}</div>
                  <div className="why-title">{w.title}</div>
                  <div className="why-body">{w.body}</div>
                  {expanded === w.num && (
                    <div className="why-detail">{w.detail}</div>
                  )}
                  <div className="why-toggle">{expanded === w.num ? '↑ Less' : '↓ More'}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── Trust ── */}
      <section className="section trust-section">
        <div className="container">
          <RevealSection>
            <div className="trust-intro">
              <AccentHeader>
                <h2 className="display-md">What You Can Expect</h2>
              </AccentHeader>
            </div>
          </RevealSection>
          <div className="trust-grid">
            {[
              { title: 'Founder-Led', body: 'You\'ll work directly with me on everything. No account managers, no handoffs, no surprises.' },
              { title: 'Strategy First', body: 'Every recommendation starts with your business goals, not the latest marketing trend.' },
              { title: 'Honest Always', body: 'If we don\'t think you should spend money yet, we\'ll tell you that. Even if it costs us the job.' },
              { title: 'Built Around You', body: 'No cookie-cutter packages. Every strategy is built specifically for your business and your goals.' },
              { title: 'Clear Reporting', body: 'You\'ll always know what we\'re doing, why we\'re doing it, and how it\'s performing.' },
              { title: 'Strategy Before Spend', body: 'We never suggest spending money on ads until the right foundation is in place.' },
            ].map((item, i) => (
              <RevealSection key={i} delay={(i % 4) + 1}>
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
              <p className="founder-quote-text">"Good marketing isn't magic. It's consistency."</p>
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
