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
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  const serviceLinks = [
    { href: '/services/website-design', label: 'Website Design' },
    { href: '/services/ads',            label: 'Meta & Google Ads' },
    { href: '/services/social-media',   label: 'Social Media' },
    { href: '/services/seo',            label: 'SEO' },
    { href: '/services/logo-design',    label: 'Logo & Brand Design' },
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
            <li>
              <a href="/" className={`nav-link${currentPath === '/' ? ' active' : ''}`}>Home</a>
            </li>
            <li
              className="nav-item-services"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a href="/services" className={`nav-link${currentPath.startsWith('/services') ? ' active' : ''}`}>
                Services <span className="nav-dropdown-caret">▾</span>
              </a>
              {servicesOpen && (
                <div className="nav-dropdown">
                  {serviceLinks.map(l => (
                    <a key={l.href} href={l.href} className="nav-dropdown-link">{l.label}</a>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a href="/about" className={`nav-link${currentPath === '/about' ? ' active' : ''}`}>About</a>
            </li>
            <li>
              <a href="/contact" className={`nav-link${currentPath === '/contact' ? ' active' : ''}`}>Contact</a>
            </li>
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
        <a href="/" className="nav-mobile-link" onClick={() => setOpen(false)}>Home</a>
        <a href="/services" className="nav-mobile-link" onClick={() => setOpen(false)}>Services</a>
        <div className="nav-mobile-sub">
          {serviceLinks.map(l => (
            <a key={l.href} href={l.href} className="nav-mobile-sub-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
        <a href="/about" className="nav-mobile-link" onClick={() => setOpen(false)}>About</a>
        <a href="/contact" className="nav-mobile-link" onClick={() => setOpen(false)}>Contact</a>
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
              <li><a href="/services/website-design" className="footer-link">Website Design</a></li>
              <li><a href="/services/ads" className="footer-link">Meta &amp; Google Ads</a></li>
              <li><a href="/services/social-media" className="footer-link">Social Media</a></li>
              <li><a href="/services/seo" className="footer-link">SEO</a></li>
              <li><a href="/services/logo-design" className="footer-link">Logo Design</a></li>
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
