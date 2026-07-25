// contact.jsx — Contact / questionnaire page

function Contact() {
  const [status, setStatus] = React.useState('idle'); // idle | sending | success | error
  const [form, setForm] = React.useState({
    firstName: '', lastName: '',
    email: '', phone: '',
    businessName: '', businessType: '', location: '',
    services: [],
    budget: '', challenge: '', hearAbout: '', reachBy: 'text',
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm(f => ({
        ...f,
        services: checked
          ? [...f.services, value]
          : f.services.filter(s => s !== value),
      }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace YOUR_FORM_ID with your Formspree endpoint
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          services: form.services.join(', '),
        }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const steps = [
    { num: '1', title: 'Fill the Form', body: 'Takes about 2 minutes. Tell us about your shop and what you need.' },
    { num: '2', title: 'We Review', body: 'We look at your current online presence within 24 hours.' },
    { num: '3', title: 'Free Strategy Call', body: 'Quick 20–30 min call to go over what we found and what we\'d do.' },
    { num: '4', title: 'Custom Proposal', body: 'We send a clear, no-fluff proposal tailored to your shop.' },
  ];

  const serviceOptions = [
    'Website Design', 'Meta & Google Ads', 'Social Media', 'SEO', 'Logo Design',
  ];

  const businessTypes = [
    'Tint Shop', 'Wrap Shop', 'Detail Shop', 'Dashcam Install', 'Performance Shop',
    'Auto Repair', 'Import Shop', 'PPF Shop', 'Other',
  ];

  if (status === 'success') {
    return (
      <React.Fragment>
        <section className="page-header">
          <div className="container">
            <div className="page-header-eyebrow">
              <span className="eyebrow">Contact</span>
            </div>
            <h1 className="page-header-title">Get In Touch</h1>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="contact-form-wrap" style={{maxWidth: '560px', margin: '0 auto'}}>
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <div className="form-success-title">We Got It.</div>
                <p className="form-success-body">
                  Thanks for reaching out. We'll review your info and get back to you within
                  24 hours to set up your free strategy call.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-eyebrow">
            <span className="eyebrow">Let's Talk</span>
          </div>
          <h1 className="page-header-title">
            Get a<br/>Free Audit
          </h1>
          <p className="page-header-sub">
            Tell us about your shop and we'll show you exactly what we'd
            do to help you get more customers.
          </p>
        </div>
      </section>

      <AccentLine />

      {/* ── How It Works ── */}
      <section className="section-sm how-section">
        <div className="container">
          <div className="how-steps">
            {steps.map(s => (
              <div key={s.num} className="how-step">
                <div className="how-step-num">{s.num}</div>
                <div className="how-step-title">{s.title}</div>
                <div className="how-step-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccentLine />

      {/* ── Contact Grid ── */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <div className="contact-form-title">Tell Us About Your Shop</div>
              <div className="contact-form-sub">
                All fields marked with * are required. We'll never share your information.
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  {/* Name */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label form-label-required">First Name</label>
                      <input
                        className="form-input"
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Jules"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label form-label-required">Last Name</label>
                      <input
                        className="form-input"
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Battiato"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label form-label-required">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@yourshop.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label form-label-required">Phone</label>
                      <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="732-000-0000"
                        required
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div className="form-group">
                    <label className="form-label form-label-required">Business Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      placeholder="Your Shop Name"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label form-label-required">Business Type</label>
                      <select
                        className="form-select"
                        name="businessType"
                        value={form.businessType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select type...</option>
                        {businessTypes.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label form-label-required">Location (City, State)</label>
                      <input
                        className="form-input"
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Trenton, NJ"
                        required
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div className="form-group">
                    <label className="form-label">Services You're Interested In</label>
                    <div className="form-checkboxes">
                      {serviceOptions.map(s => (
                        <label key={s} className="form-checkbox-item">
                          <input
                            type="checkbox"
                            name="services"
                            value={s}
                            checked={form.services.includes(s)}
                            onChange={handleChange}
                          />
                          <span className="form-checkbox-label">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="form-group">
                    <label className="form-label">Monthly Marketing Budget</label>
                    <select
                      className="form-select"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a range...</option>
                      <option value="Under $500">Under $500/mo</option>
                      <option value="$500 - $1,000">$500 – $1,000/mo</option>
                      <option value="$1,000 - $2,500">$1,000 – $2,500/mo</option>
                      <option value="$2,500+">$2,500+/mo</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  {/* Challenge */}
                  <div className="form-group">
                    <label className="form-label">What's the #1 thing holding your shop back right now?</label>
                    <textarea
                      className="form-textarea"
                      name="challenge"
                      value={form.challenge}
                      onChange={handleChange}
                      placeholder="Not enough customers, no online presence, bad reviews, etc."
                    />
                  </div>

                  {/* How heard + reach by */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">How Did You Hear About Us?</label>
                      <select
                        className="form-select"
                        name="hearAbout"
                        value={form.hearAbout}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Google">Google</option>
                        <option value="Referral">Referral</option>
                        <option value="Direct outreach">Direct outreach</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Best Way To Reach You</label>
                      <select
                        className="form-select"
                        name="reachBy"
                        value={form.reachBy}
                        onChange={handleChange}
                      >
                        <option value="text">Text</option>
                        <option value="call">Call</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="form-submit-row">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{width: '100%', justifyContent: 'center'}}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Submit — Get My Free Audit'}
                    </button>
                    {status === 'error' && (
                      <p className="form-note" style={{marginTop: 'var(--sp-3)', color: '#ff5555'}}>
                        Something went wrong. Please email us directly at jules@motionmarketingagency.com or call 732-772-5590.
                      </p>
                    )}
                    <p className="form-note" style={{marginTop: 'var(--sp-3)'}}>
                      We respond within 24 hours. No spam, no pressure.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="contact-sidebar">
              <div className="contact-info-card">
                <div className="contact-info-title">Contact Info</div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <div className="contact-info-label">Phone / Text</div>
                    <div className="contact-info-value">
                      <a href="tel:7327725590">732-772-5590</a>
                    </div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">✉️</div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">
                      <a href="mailto:jules@motionmarketingagency.com">jules@motionmarketingagency.com</a>
                    </div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">📷</div>
                  <div>
                    <div className="contact-info-label">Instagram</div>
                    <div className="contact-info-value">
                      <a href="https://www.instagram.com/motionmarketingads/" target="_blank" rel="noopener">
                        @motionmarketingads
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-title">What You'll Get</div>
                {[
                  'A review of your current online presence',
                  'Honest assessment of what's working and what's not',
                  'Specific recommendations for your shop',
                  'No sales pressure — just real advice',
                ].map((item, i) => (
                  <div key={i} className="contact-info-item">
                    <div className="contact-info-icon" style={{fontSize: '13px', marginTop: '3px', opacity: 0.6}}>→</div>
                    <div className="contact-info-value" style={{fontSize: '13px', color: 'var(--text-secondary)'}}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = Contact;
