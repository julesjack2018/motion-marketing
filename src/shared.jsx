// shared.jsx — Nav + Footer (loaded on every page)

function useScrolled() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return scrolled;
}

function AccentLine() {
  return <div className="accent-line" />;
}

function AccentHeader({ children }) {
  return (
    <div className="accent-header">
      <div className="accent-header-line"></div>
      {children}
    </div>
  );
}

function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = React.useState(false);
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  const links = [
    { href: '/',        label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about',   label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <React.Fragment>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="/" className="nav-logo">
            <img
              src="/assets/logo.png"
              alt="Motion Marketing LLC"
              style={{height: '48px', width: 'auto', display: 'block'}}
            />
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nav-link${currentPath === l.href ? ' active' : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <a href="tel:7327725590" className="nav-phone">732-772-5590</a>
            <a href="/contact" className="btn btn-primary">Get a Free Audit</a>
            <button
              className={`nav-hamburger${open ? ' open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="/contact" className="btn btn-primary btn-lg nav-mobile-cta" onClick={() => setOpen(false)}>
          Get a Free Audit
        </a>
        <a href="tel:7327725590" className="nav-mobile-phone" onClick={() => setOpen(false)}>
          Call or Text: 732-772-5590
        </a>
      </div>
    </React.Fragment>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent-line"></div>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <img
                src="/assets/logo.png"
                alt="Motion Marketing LLC"
                style={{height: '44px', width: 'auto', display: 'block'}}
              />
            </div>
            <div className="footer-tagline">
              Marketing built for local service businesses. We treat your business like our own.
            </div>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/motionmarketingads/"
                target="_blank"
                rel="noopener"
                className="social-link"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><a href="/services" className="footer-link">Website Design</a></li>
              <li><a href="/services" className="footer-link">Meta &amp; Google Ads</a></li>
              <li><a href="/services" className="footer-link">Social Media</a></li>
              <li><a href="/services" className="footer-link">SEO</a></li>
              <li><a href="/services" className="footer-link">Logo Design</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-label">Call or Text</div>
                <div className="footer-contact-value">
                  <a href="tel:7327725590">732-772-5590</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-label">Email</div>
                <div className="footer-contact-value">
                  <a href="mailto:jules@motionmarketingagency.com">jules@motionmarketingagency.com</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-label">Instagram</div>
                <div className="footer-contact-value">
                  <a href="https://www.instagram.com/motionmarketingads/" target="_blank" rel="noopener">@motionmarketingads</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-label">Hours</div>
                <div className="footer-contact-value" style={{fontSize: '13px', color: 'var(--text-muted)'}}>
                  Mon–Fri, 10AM–7PM<br/>Usually responds the same day
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Motion Marketing LLC. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
            <a href="/terms" className="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Nav = Nav;
window.Footer = Footer;
window.AccentLine = AccentLine;
window.AccentHeader = AccentHeader;
