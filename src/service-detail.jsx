// service-detail.jsx — Individual service page (shared across all 5 services)

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

function ServiceDetail() {
  const s = window.__service;

  return (
    <React.Fragment>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-eyebrow">
            <a href="/services" style={{color: 'var(--text-muted)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase'}}>
              ← All Services
            </a>
          </div>
          <h1 className="page-header-title">{s.title}</h1>
          <p className="page-header-sub">{s.tagline}</p>
        </div>
      </section>

      <AccentLine />

      {/* ── Detail Content ── */}
      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div>
              <RevealSection>
                <p className="service-detail-body">{s.body}</p>
              </RevealSection>
              <RevealSection delay={1}>
                <div className="service-detail-items">
                  {s.items.map((item, i) => (
                    <div key={i} className="service-item">
                      <div className="service-item-check"></div>
                      <div className="service-item-name">{item}</div>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>

            <div className="service-detail-sidebar">
              <RevealSection delay={2}>
                <div className="contact-info-card">
                  <div className="contact-info-title">Ready to get started?</div>
                  <p style={{fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: 'var(--sp-5)'}}>
                    Get a free audit and see exactly what {s.title} could do for your business.
                  </p>
                  <a href="/contact" className="btn btn-primary" style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
                    Get a Free Audit
                  </a>
                  <div style={{marginTop: 'var(--sp-4)', textAlign: 'center'}}>
                    <a href="tel:7327725590" style={{fontSize: '13px', color: 'var(--text-muted)'}}>
                      or call 732-772-5590
                    </a>
                  </div>
                </div>

                <div className="contact-info-card" style={{marginTop: 'var(--sp-4)'}}>
                  <div className="contact-info-title">Other Services</div>
                  {s.otherServices.map(o => (
                    <a key={o.href} href={o.href} className="service-other-link">
                      {o.label} →
                    </a>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <AccentLine />

      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-eyebrow">
            <span className="eyebrow">Let's Talk</span>
          </div>
          <h2 className="cta-strip-headline">
            Ready To<br/>Grow?
          </h2>
          <p className="cta-strip-sub">
            Free audit. Real answers. No pressure.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-primary btn-lg">Get a Free Audit</a>
            <a href="/services" className="btn btn-outline btn-lg">All Services</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = ServiceDetail;
