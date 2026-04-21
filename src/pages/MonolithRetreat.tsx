import { useState } from "react";

const MonolithRetreat = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    linkedin: "",
    company: "",
    stage: "",
    phone: "",
    email: "",
    location: "",
    hardestProblem: "",
    contribution: "",
    breakthrough: "",
    cohortDate: "Autumn Session (Oct 12-15)",
    dietary: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted for review!");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --inverse-primary: #775a19;
          --error-container: #93000a;
          --on-primary-fixed-variant: #5d4201;
          --secondary-fixed: #e2e2e2;
          --outline-variant: #4e4639;
          --surface-container-low: #1c1b1b;
          --secondary-fixed-dim: #c6c7c6;
          --surface-container-high: #2a2a2a;
          --on-primary-container: #4e3700;
          --on-secondary-fixed-variant: #454747;
          --tertiary-fixed: #d8e2ff;
          --surface-bright: #3a3939;
          --secondary: #c6c7c6;
          --primary-fixed-dim: #e9c176;
          --on-primary-fixed: #261900;
          --on-tertiary-fixed: #001a41;
          --tertiary-container: #8fa5d6;
          --outline: #9a8f80;
          --primary: #e9c176;
          --surface-container: #201f1f;
          --on-secondary-container: #b4b5b4;
          --on-secondary: #2f3130;
          --on-error-container: #ffdad6;
          --background: #131313;
          --primary-container: #c5a059;
          --on-surface-variant: #d1c5b4;
          --on-error: #690005;
          --inverse-surface: #e5e2e1;
          --on-surface: #e5e2e1;
          --primary-fixed: #ffdea5;
          --surface-variant: #353534;
          --surface-container-highest: #353534;
          --on-tertiary: #173059;
          --error: #ffb4ab;
          --surface-dim: #131313;
          --secondary-container: #454747;
          --surface-tint: #e9c176;
          --on-tertiary-container: #233a65;
          --on-secondary-fixed: #1a1c1c;
          --inverse-on-surface: #313030;
          --surface: #131313;
          --on-tertiary-fixed-variant: #304671;
          --on-background: #e5e2e1;
          --on-primary: #412d00;
          --tertiary-fixed-dim: #b0c6f9;
          --tertiary: #b0c6f9;
          --surface-container-lowest: #0e0e0e;
        }

        body {
          background: var(--background);
          color: var(--on-background);
          font-family: 'Manrope', sans-serif;
          overflow-x: hidden;
        }

        /* Nav */
        .glass-nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          background: rgba(14, 14, 14, 0.6);
          backdrop-filter: blur(20px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }

        .nav-logo {
          font-family: 'Epilogue', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.05em;
          color: #E5E2E1;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-family: 'Epilogue', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 12px;
          color: #E5E2E1;
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-link:hover { color: #E9C176; }

        .nav-btn {
          background: var(--primary-container);
          color: var(--on-primary-container);
          padding: 0.5rem 1.5rem;
          border-radius: 0.25rem;
          font-family: 'Epilogue', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 12px;
          border: none;
          cursor: pointer;
          transition: box-shadow 0.3s;
        }

        .nav-btn:hover {
          box-shadow: 0 0 20px rgba(233, 193, 118, 0.2);
        }

        /* Main */
        main {
          padding-top: 8rem;
          padding-bottom: 6rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        @media (min-width: 768px) {
          main { padding-left: 3rem; padding-right: 3rem; }
        }

        @media (min-width: 1024px) {
          main { padding-left: 6rem; padding-right: 6rem; }
        }

        /* Hero */
        .hero {
          margin-bottom: 8rem;
          max-width: 56rem;
        }

        .hero-eyebrow {
          font-family: 'Manrope', sans-serif;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 10px;
          margin-bottom: 1rem;
          display: block;
        }

        .hero-title {
          font-family: 'Epilogue', sans-serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          color: var(--on-surface);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .hero-sub {
          font-family: 'Manrope', sans-serif;
          font-size: 1.25rem;
          color: var(--on-surface-variant);
          max-width: 36rem;
          line-height: 1.7;
        }

        /* Grid layout */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 5rem;
        }

        @media (min-width: 1024px) {
          .form-grid {
            grid-template-columns: 7fr 5fr;
          }
        }

        /* Form sections */
        .form-left { display: flex; flex-direction: column; gap: 8rem; }

        .section-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .section-num {
          color: var(--primary);
          font-family: 'Epilogue', sans-serif;
          font-size: 1.5rem;
          font-weight: 300;
          font-style: italic;
        }

        .section-title {
          font-family: 'Epilogue', sans-serif;
          font-size: 1.875rem;
          font-weight: 700;
          color: var(--on-surface);
        }

        /* Fields grid */
        .fields-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem 3rem;
        }

        @media (min-width: 768px) {
          .fields-grid { grid-template-columns: 1fr 1fr; }
        }

        .field-group { position: relative; }

        .field-label {
          display: block;
          font-family: 'Manrope', sans-serif;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--on-surface-variant);
          margin-bottom: 0.5rem;
          transition: color 0.2s;
        }

        .field-input,
        .field-textarea,
        .field-select {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--outline-variant);
          padding: 0.75rem 0;
          color: var(--on-surface);
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .field-input::placeholder,
        .field-textarea::placeholder {
          color: #404040;
        }

        .field-input:focus,
        .field-textarea:focus,
        .field-select:focus {
          border-bottom-color: var(--primary);
        }

        .field-group:focus-within .field-label {
          color: var(--primary);
        }

        .field-textarea {
          resize: none;
        }

        .field-select {
          appearance: none;
          cursor: pointer;
        }

        .field-select option {
          background: var(--surface);
        }

        /* Textarea fields */
        .fields-stack { display: flex; flex-direction: column; gap: 4rem; }

        /* Submit button */
        .submit-wrapper { padding-top: 3rem; }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(to top right, var(--primary), var(--primary-container));
          color: var(--on-primary);
          padding: 1.25rem 2.5rem;
          border-radius: 0.25rem;
          font-family: 'Epilogue', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
          border: none;
          cursor: pointer;
          transition: box-shadow 0.5s, transform 0.2s;
          overflow: hidden;
        }

        .submit-btn:hover {
          box-shadow: 0 0 40px rgba(233, 193, 118, 0.3);
        }

        .submit-btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        .arrow-icon {
          font-family: 'Material Symbols Outlined';
          font-size: 20px;
          transition: transform 0.2s;
        }

        .submit-note {
          margin-top: 1.5rem;
          font-size: 11px;
          color: #737373;
          font-family: 'Manrope', sans-serif;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Right aside */
        .aside-sticky {
          position: sticky;
          top: 7rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .aside-panel { padding-left: 3rem; }
        }

        .image-card {
          aspect-ratio: 4/5;
          width: 100%;
          overflow: hidden;
          border-radius: 0.25rem;
          background: var(--surface-container-high);
          position: relative;
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          opacity: 0.5;
          transition: transform 0.7s;
        }

        .image-card:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--background), transparent, transparent);
        }

        .quote-block {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          right: 2rem;
        }

        .quote-mark {
          color: var(--primary);
          font-family: 'Epilogue', sans-serif;
          font-size: 3rem;
          opacity: 0.2;
          display: block;
          margin-bottom: 1rem;
          line-height: 1;
        }

        .quote-text {
          font-family: 'Manrope', sans-serif;
          color: var(--on-surface);
          font-style: italic;
          font-size: 1.125rem;
          line-height: 1.6;
        }

        /* Info card */
        .info-card {
          background: var(--surface-container-low);
          padding: 2.5rem;
          border-left: 1px solid rgba(233, 193, 118, 0.2);
        }

        .info-card h4 {
          font-family: 'Epilogue', sans-serif;
          font-weight: 700;
          font-size: 1.125rem;
          color: var(--on-surface);
          margin-bottom: 1.5rem;
        }

        .info-text {
          color: var(--on-surface-variant);
          font-size: 0.875rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .info-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }

        .badge-text {
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
        }

        .image-square {
          aspect-ratio: 1;
          width: 100%;
          overflow: hidden;
          border-radius: 0.25rem;
        }

        .image-square img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          opacity: 0.4;
          transition: opacity 0.3s;
        }

        .image-square:hover img { opacity: 0.6; }

        /* Footer */
        footer {
          width: 100%;
          padding: 5rem 3rem;
          border-top: 1px solid rgba(38, 38, 38, 0.5);
          background: #0E0E0E;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          footer {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .footer-logo {
          font-family: 'Epilogue', sans-serif;
          font-size: 1.125rem;
          font-weight: 900;
          color: #E5E2E1;
        }

        .footer-links {
          display: flex;
          gap: 2.5rem;
        }

        .footer-link {
          font-family: 'Manrope', sans-serif;
          font-size: 0.875rem;
          color: #737373;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-link:hover { color: #E9C176; }

        .footer-copy {
          font-family: 'Manrope', sans-serif;
          font-size: 0.875rem;
          color: #737373;
        }

        /* Logistics grid */
        .logistics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem 3rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .logistics-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* Nav */}
      <nav className="glass-nav">
        <div className="nav-logo">The Monolith Retreat</div>
        <div className="nav-links" style={{ display: "none" }}>
          <a className="nav-link" href="#">Agenda</a>
          <a className="nav-link" href="#">Venue</a>
          <a className="nav-link" href="#">Founders</a>
          <button className="nav-btn">Apply Now</button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {["Agenda", "Venue", "Founders"].map((link) => (
            <a key={link} className="nav-link" href="#">
              {link}
            </a>
          ))}
          <button className="nav-btn">Apply Now</button>
        </div>
      </nav>

      {/* Main */}
      <main>
        {/* Hero */}
        <header className="hero">
          <span className="hero-eyebrow">Phase One</span>
          <h1 className="hero-title">The Application.</h1>
          <p className="hero-sub">
            An intentional process for intentional founders. We curate our
            cohorts with surgical precision to ensure maximum collective
            intelligence.
          </p>
        </header>

        {/* Form + Aside Grid */}
        <form className="form-grid" onSubmit={handleSubmit}>
          {/* Left Column */}
          <div className="form-left">
            {/* Section 1: The Basics */}
            <section>
              <div className="section-header">
                <span className="section-num">01</span>
                <h2 className="section-title">The Basics</h2>
              </div>
              <div className="fields-grid">
                {[
                  {
                    label: "Full Name",
                    name: "fullName",
                    type: "text",
                    placeholder: "John Doe",
                  },
                  {
                    label: "LinkedIn Profile",
                    name: "linkedin",
                    type: "url",
                    placeholder: "linkedin.com/in/...",
                  },
                  {
                    label: "Company Name",
                    name: "company",
                    type: "text",
                    placeholder: "Acme Corp",
                  },
                  {
                    label: "Current Stage / Revenue",
                    name: "stage",
                    type: "text",
                    placeholder: "Series A / $5M ARR",
                  },
                  {
                    label: "Contact/WhatsApp Number",
                    name: "phone",
                    type: "tel",
                    placeholder: "+1 (555) 000-0000",
                  },
                  {
                    label: "Email ID",
                    name: "email",
                    type: "email",
                    placeholder: "john@example.com",
                  },
                  {
                    label: "Location",
                    name: "location",
                    type: "text",
                    placeholder: "San Francisco, CA",
                  },
                ].map((field) => (
                  <div className="field-group" key={field.name}>
                    <label className="field-label">{field.label}</label>
                    <input
                      className="field-input"
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Deep Dive */}
            <section>
              <div className="section-header">
                <span className="section-num">02</span>
                <h2 className="section-title">Deep Dive</h2>
              </div>
              <div className="fields-stack">
                {[
                  {
                    label:
                      "What is the hardest problem you're solving right now?",
                    name: "hardestProblem",
                    placeholder:
                      "Scaling cultural integrity during hyper-growth...",
                  },
                  {
                    label: "What do you hope to contribute to the group?",
                    name: "contribution",
                    placeholder:
                      "Hard-won expertise in GTM strategy and failure states...",
                  },
                  {
                    label: "Describe a recent breakthrough.",
                    name: "breakthrough",
                    placeholder: "Rethinking our fundamental unit economics...",
                  },
                ].map((field) => (
                  <div className="field-group" key={field.name}>
                    <label className="field-label">{field.label}</label>
                    <textarea
                      className="field-textarea"
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={3}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Logistics */}
            <section>
              <div className="section-header">
                <span className="section-num">03</span>
                <h2 className="section-title">Logistics</h2>
              </div>
              <div className="logistics-grid">
                <div className="field-group">
                  <label className="field-label">Preferred Cohort Date</label>
                  <select
                    className="field-select"
                    name="cohortDate"
                    value={formData.cohortDate}
                    onChange={handleChange}
                  >
                    <option>Autumn Session (Oct 12–15)</option>
                    <option>Winter Solstice (Dec 4–7)</option>
                    <option>Spring Ascent (Mar 20–23)</option>
                  </select>
                </div>
                <div className="field-group">
                  <label className="field-label">Dietary Requirements</label>
                  <input
                    className="field-input"
                    name="dietary"
                    type="text"
                    placeholder="None"
                    value={formData.dietary}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field-group">
                <label className="field-label">Additional Notes</label>
                <input
                  className="field-input"
                  name="notes"
                  type="text"
                  placeholder="Anything else we should know?"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </section>

            {/* Submit */}
            <div className="submit-wrapper">
              <button className="submit-btn" type="submit">
                <span>Submit Application for Review</span>
                <span
                  className="arrow-icon"
                  style={{ fontFamily: "Material Symbols Outlined" }}
                >
                  arrow_forward
                </span>
              </button>
              <p className="submit-note">
                By submitting, you agree to our terms of confidentiality.
              </p>
            </div>
          </div>

          {/* Right Aside */}
          <aside className="aside-panel">
            <div className="aside-sticky">
              {/* Image 1 */}
              <div className="image-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL8ICws2CRXOYbd0NRAFTsUaJc7gRUVNLpNz9miDX9JWHTYdxuSsxTbVS0M-h0ln4bnpA7LVi0EH5dPcyt0TG2eBB5E-Up2B7Ammv_ILzxP5rZ17vCJe7sSIt5UDBWxPjSaJzkg2f9kKaV5dx9u4oOznXbQXF-3Ck19cvMGHUmgV08FWbKQq0j2DwdhL4RReHrAW6w39-WUrBR8Usc7G6gRk2hXcON7Yd1MfclCRf8sKPFa_gPADDR3XUza3OAA6DkfcdH49aVDno"
                  alt="Interior architectural detail"
                />
                <div className="image-overlay" />
                <div className="quote-block">
                  <span className="quote-mark">"</span>
                  <p className="quote-text">
                    True breakthroughs happen in the space between silence and
                    conversation.
                  </p>
                </div>
              </div>

              {/* Info Card */}
              <div className="info-card">
                <h4>Selection Protocol</h4>
                <p className="info-text">
                  Selection is based on business stage and value contribution
                  potential. We look for founders who are not only scaling
                  revenue but scaling their own consciousness.
                </p>
                <div className="info-badge">
                  <div className="badge-dot" />
                  <span className="badge-text">Response within 48 hours</span>
                </div>
              </div>

              {/* Image 2 */}
              <div className="image-square">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZrKCOKHaWPNb1Y737vCorp7JRuSx-wcEZ9wNuT4C8XEQfUnpKfH8Kl3I4BHrbOST49OMzOUaSVhH4NljrtnRdSSsai3VIpPChoASYhbQr2elFhDDrB5xafEORUXUXTh03sN54dWUSf9MKKtk1H4iOD1VQcK2W_t4QneT0jIQDjGAm8iib2K30AnNLeDrw53Rzcyp5U-_61wya9UHDuoQvjrve3m1lKwFweq0An8psZ7xN8UKBLop--JMJSmktcBfOR0bhrk_-1Q0"
                  alt="Moody forest landscape"
                />
              </div>
            </div>
          </aside>
        </form>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-logo">The Monolith</div>
        <div className="footer-links">
          {["Privacy", "Terms of Service", "Press"].map((link) => (
            <a key={link} className="footer-link" href="#">
              {link}
            </a>
          ))}
        </div>
        <div className="footer-copy">© 2024 The Monolith. By Invitation Only.</div>
      </footer>
    </>
  );
};

export default MonolithRetreat;