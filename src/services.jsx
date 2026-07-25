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
      body: 'For most customers, your website is the first impression they get of your business. Before they call. Before they walk in. A weak site loses jobs before you ever know about them. We build sites that work as hard as you do.',
      items: [
        'A design built around your business, not a template someone else already has',
        'Looks great on every phone, tablet, and screen so you never lose a mobile visitor',
        'Fast load times that keep people on the page instead of bouncing to a competitor',
        'Built to rank from day one — structure, metadata, and schema dialed in',
        'Easy booking or contact flow so customers can reach you the moment they\'re ready',
        'Know exactly where your leads come from so you can make smarter decisions',
        'Copywriting that builds trust before customers ever contact you',
        'Every page your business needs, done right the first time',
        'Smooth launch with everything tested before it goes live',
        'Ongoing support so your site stays fast, secure, and up to date',
      ],
    },
    {
      num: '02',
      icon: '📣',
      title: 'Meta & Google Ads',
      body: 'While SEO builds over time, ads put you in front of the right people right now. We build and manage campaigns that target the customers you actually want, in the area you actually serve. Then we optimize until they perform.',
      items: [
        'Campaign strategy built around what your business actually needs to grow',
        'Ad creative — copy, graphics, and video — that stops the scroll and drives action',
        'Geo-targeted campaigns focused on your real service area, not wasted reach',
        'Google Search campaigns that capture customers actively looking for you',
        'Meta campaigns that build local awareness and bring in real leads',
        'Retargeting to bring back people who visited but didn\'t reach out yet',
        'Ongoing testing so performance keeps improving instead of plateauing',
        'Clear monthly reporting on what\'s working, what\'s not, and what\'s next',
        'Smart budget management so every dollar goes where it converts',
        'Dedicated landing pages built to turn ad traffic into actual leads',
      ],
    },
    {
      num: '03',
      icon: '📱',
      title: 'Social Media Management',
      body: 'Customers look you up before they call. If your last post was three months ago, they move on. We keep your presence consistent, professional, and on-brand so when someone finds you, what they see builds trust instead of doubt.',
      items: [
        'A content strategy built around your brand and what your customers actually care about',
        'Professional posts that look good and say something worth saying',
        'Instagram and Facebook management so you\'re active where your customers are',
        'Content formats that showcase the quality of your work and earn attention',
        'Reel and story concepts that build reach without the guesswork',
        'Posting and hashtag strategy optimized for your market',
        'Engagement monitoring so your audience feels heard',
        'Profile optimization that makes a strong first impression on every visitor',
        'Monthly performance reporting so you always know what\'s working',
        'DM strategy guidance so leads don\'t fall through the cracks',
      ],
    },
    {
      num: '04',
      icon: '🔍',
      title: 'Search Engine Optimization (SEO)',
      body: 'Every day, people in your area search for exactly what you offer. SEO is what determines whether they find you or your competitor. We build the long-term organic presence that keeps generating leads without a monthly ad spend.',
      items: [
        'Google Business Profile optimization so you dominate local search results',
        'Keyword research targeting the exact searches your customers actually use',
        'On-page optimization that tells Google exactly what you do and where you serve',
        'Technical SEO fixes that remove the roadblocks keeping your site from ranking',
        'Schema markup that helps Google understand and feature your business',
        'Citation and directory building to strengthen your local authority',
        'A review generation strategy that builds trust with both Google and new customers',
        'Rank tracking and monthly reporting so you can see the progress',
        'Competitor analysis so we always know what we\'re up against',
        'Long-term content strategy that compounds your visibility over time',
      ],
    },
    {
      num: '05',
      icon: '✏️',
      title: 'Logo & Brand Design',
      body: 'Your brand is what people remember, and what builds trust before anyone knows anything else about you. We create clean, modern identities that look sharp everywhere your business shows up.',
      items: [
        'Custom logo concepts built around your business, not stock icons rearranged',
        'Multiple directions to choose from so you can see what\'s possible',
        'Revisions until you\'re confident in what you\'ve got',
        'A full color palette that works across every application',
        'Typography choices that match your brand\'s personality',
        'Final files in every format you\'ll ever need (PNG, SVG, PDF, and more)',
        'Light and dark versions for every background',
        'Business card design so you\'re ready to make an impression in person',
        'Social media profile assets ready to upload immediately',
        'A simple brand guide so everything stays consistent going forward',
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
            Everything a local service business needs to grow, under one roof,
            working together as one strategy.
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
            Fill out the questionnaire and we'll tell you exactly what would
            move the needle most for your business. Free, no obligation, no pitch.
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
