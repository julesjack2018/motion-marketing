// services.jsx — Full services breakdown page

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

function Services() {
  const groups = [
    {
      num: '01',
      icon: '🖥️',
      title: 'Website Design & Development',
      body: 'Your website is your #1 marketing tool. For most customers, it\'s the first impression they have of your business, and a bad one costs you jobs. We build fast, professional, conversion-focused sites that turn visitors into booked customers.',
      items: [
        'Custom design, no templates, no cookie-cutter layouts',
        'Mobile-first, fully responsive on every device',
        'Fast-loading pages optimized for Core Web Vitals',
        'Built-in SEO foundation (structure, meta, schema)',
        'Online booking or contact form integration',
        'Google Analytics + conversion tracking setup',
        'Professional copywriting for every page',
        'Service pages, about page, contact page, legal pages',
        'Launch support and post-launch testing',
        'Ongoing maintenance available',
      ],
    },
    {
      num: '02',
      icon: '📣',
      title: 'Meta & Google Ads',
      body: 'The fastest way to get new customers through the door. We run targeted paid ad campaigns on Meta (Facebook + Instagram) and Google that put your business in front of people actively looking for what you offer, right in your area.',
      items: [
        'Campaign strategy and audience research',
        'Ad creative: copy, graphics, and video concepts',
        'Geo-targeted campaigns for your service area',
        'Google Search + Display campaigns',
        'Meta (Facebook + Instagram) campaign management',
        'Retargeting campaigns to bring back lost visitors',
        'A/B testing for continuous improvement',
        'Monthly performance reports in plain English',
        'Budget management and bid optimization',
        'Landing page creation for ad traffic',
      ],
    },
    {
      num: '03',
      icon: '📱',
      title: 'Social Media Management',
      body: 'Consistency is what builds a brand. Most businesses post when they have time, which means they disappear for weeks then reappear. We keep your accounts active, professional, and growing with content that actually represents your brand.',
      items: [
        'Monthly content calendar and strategy',
        'Professional post creation (graphics + captions)',
        'Instagram and Facebook management',
        'Before/after content formats for automotive work',
        'Story and reel concepts',
        'Hashtag strategy and optimization',
        'Audience engagement monitoring',
        'Profile optimization and bio copywriting',
        'Monthly growth and engagement reporting',
        'DM response strategy guidance',
      ],
    },
    {
      num: '04',
      icon: '🔍',
      title: 'Search Engine Optimization (SEO)',
      body: 'When someone in your area searches for what you offer, you want to show up. SEO gets your business ranking in Google organically, without paying for every click. It takes time, but the results compound.',
      items: [
        'Local SEO: Google Business Profile optimization',
        'Keyword research for your specific niche and location',
        'On-page optimization for every service page',
        'Technical SEO audit and fixes',
        'Schema markup (LocalBusiness, FAQPage)',
        'Citation building and directory listings',
        'Review generation strategy',
        'Monthly rank tracking and reporting',
        'Competitor analysis',
        'Content strategy for long-term organic growth',
      ],
    },
    {
      num: '05',
      icon: '✏️',
      title: 'Logo & Brand Design',
      body: 'A professional logo and brand identity signal that you take your business seriously. Customers notice. Whether you\'re starting from scratch or need a refresh, we create clean, modern branding that looks sharp on everything from your sign to your Instagram page.',
      items: [
        'Custom logo design (not templates)',
        'Multiple initial concepts to choose from',
        'Revisions until you\'re happy',
        'Full brand color palette selection',
        'Typography / font pairing',
        'Final files in all formats (PNG, SVG, PDF, etc.)',
        'Light and dark versions',
        'Business card design available',
        'Social media profile assets (profile pic, banner)',
        'Brand guidelines document',
      ],
    },
  ];

  return (
    <React.Fragment>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-eyebrow">
            <span className="eyebrow">What We Offer</span>
          </div>
          <h1 className="page-header-title">
            Our<br/>Services
          </h1>
          <p className="page-header-sub">
            Five services. One agency. Everything your business needs
            to get found, look professional, and grow.
          </p>
        </div>
      </section>

      {/* ── Services Full ── */}
      <section className="section services-full">
        <div className="container">
          {groups.map((g, gi) => (
            <RevealSection key={g.num}>
              <div className="service-group">
                <div className="service-group-header">
                  <div className="service-group-num">{g.num}</div>
                  <div className="service-group-icon">{g.icon}</div>
                  <div className="service-group-title">{g.title}</div>
                </div>
                <p className="service-group-body">{g.body}</p>
                <div className="service-items">
                  {g.items.map((item, ii) => (
                    <div key={ii} className="service-item">
                      <div className="service-item-check"></div>
                      <div className="service-item-name">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      <AccentLine />

      {/* ── CTA ── */}
      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-eyebrow">
            <span className="eyebrow">Let's Talk</span>
          </div>
          <h2 className="cta-strip-headline">
            Not Sure<br/>Where To Start?
          </h2>
          <p className="cta-strip-sub">
            Fill out our short questionnaire and we'll tell you exactly
            what your business needs most. Free, no obligation.
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

window.__Page = Services;
