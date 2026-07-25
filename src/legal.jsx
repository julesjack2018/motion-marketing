// legal.jsx — Privacy Policy + Terms of Service

function PrivacyPolicy() {
  return (
    <React.Fragment>
      <section className="page-header">
        <div className="container">
          <div className="page-header-eyebrow"><span className="eyebrow">Legal</span></div>
          <h1 className="page-header-title">Privacy Policy</h1>
          <p className="page-header-sub">Last updated: July 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Information We Collect</h2>
            <p>When you submit our contact form or communicate with us, we collect personal information you voluntarily provide, including your name, email address, phone number, business name, and details about your business. We may also collect information automatically when you visit our website, such as your IP address, browser type, and pages viewed.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information you provide to: respond to your inquiries and provide services you request; send you proposals, updates, and information about our services; improve our website and services; and comply with legal obligations.</p>

            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business (such as email platforms and analytics providers), subject to confidentiality agreements.</p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

            <h2>5. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

            <h2>6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>

            <h2>7. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information that we hold. To exercise these rights, please contact us at jules@motionmarketingagency.com.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on this page with an updated date.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:jules@motionmarketingagency.com">jules@motionmarketingagency.com</a> or call 732-772-5590.</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

function TermsOfService() {
  return (
    <React.Fragment>
      <section className="page-header">
        <div className="container">
          <div className="page-header-eyebrow"><span className="eyebrow">Legal</span></div>
          <h1 className="page-header-title">Terms of Service</h1>
          <p className="page-header-sub">Last updated: July 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Agreement to Terms</h2>
            <p>By accessing and using the Motion Marketing LLC website (motionmarketingagency.com), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>

            <h2>2. Services</h2>
            <p>Motion Marketing LLC provides digital marketing services including website design and development, paid advertising management, social media management, search engine optimization, and logo design. Specific terms for client engagements are governed by individual service agreements.</p>

            <h2>3. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Motion Marketing LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>This website and its content are provided "as is" without warranties of any kind, either express or implied. Motion Marketing LLC does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>

            <h2>5. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Motion Marketing LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services.</p>

            <h2>6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We have no control over the content or practices of those sites and accept no responsibility for them.</p>

            <h2>7. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of the State of New Jersey. Any disputes shall be resolved in the courts of New Jersey.</p>

            <h2>8. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Continued use of the website after any changes constitutes your acceptance of the new Terms.</p>

            <h2>9. Contact</h2>
            <p>Questions about these Terms? Contact us at <a href="mailto:jules@motionmarketingagency.com">jules@motionmarketingagency.com</a>.</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.__Page = window.__route === '/privacy' ? PrivacyPolicy : TermsOfService;
