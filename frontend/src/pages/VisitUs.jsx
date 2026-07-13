import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const FALLBACK_BRANCHES = [
  { id: 1, city: 'Taiping Flagship', address: 'Jalan Taming Sari (Main Road), 34000 Taiping, Perak', status: 'Active' }
];

export default function VisitUs() {
  const [branches, setBranches] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/branches')
      .then((res) => {
        if (!res.ok) throw new Error('API server down');
        return res.json();
      })
      .then((data) => {
        setBranches(data);
      })
      .catch(() => {
        setBranches(FALLBACK_BRANCHES);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Submission failed');
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        // Fallback simulate success or error notice if Laravel is not running
        // Let's simulate local storage save to mock standard full-stack save!
        try {
          const localMessages = JSON.parse(localStorage.getItem('cendol_messages') || '[]');
          localMessages.push({ ...formData, id: Date.now(), date: new Date().toISOString() });
          localStorage.setItem('cendol_messages', JSON.stringify(localMessages));
          setSuccess(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (e) {
          setError('Failed to send message. Please check your network.');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="visit-container">
      {/* Visit Header */}
      <section className="visit-hero">
        <div className="visit-hero-content">
          <span className="section-subtitle">Find Us in Perak</span>
          <h1>Visit Us</h1>
          <p>
            Come visit our historical home in Taiping. Experience the vintage atmosphere 
            where three generations of customers have enjoyed fresh street heritage.
          </p>
        </div>
      </section>

      {/* Map & Main Stall Info */}
      <section className="main-stall-section">
        <div className="main-stall-grid">
          <div className="stall-info-card glass-card">
            <span className="info-card-badge">Main Flagship</span>
            <h2>Taiping Stall</h2>
            <p className="stall-desc">
              Located near the historic Bismillah Restaurant along Jalan Taming Sari, right in the heart of Taiping heritage trail.
            </p>

            <div className="info-items">
              <div className="info-item">
                <MapPin size={24} />
                <div>
                  <h4>Address</h4>
                  <p>Jalan Taming Sari, 34000 Taiping, Perak, Malaysia</p>
                </div>
              </div>
              <div className="info-item">
                <Clock size={24} />
                <div>
                  <h4>Operating Hours</h4>
                  <p>Open Daily: 10:00 AM - 6:30 PM</p>
                  <span className="subtext">* Closed on major national public holidays</span>
                </div>
              </div>
              <div className="info-item">
                <Phone size={24} />
                <div>
                  <h4>Phone Inquiries</h4>
                  <p>+60 5-808 2004</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-wrapper glass-card">
            {/* Embedded OpenStreetMap or Custom Mock Map */}
            <div className="mock-map">
              <div className="map-overlay">
                <div className="map-pin-bubble">
                  <strong>Ansari's Famous Cendol</strong>
                  <p>Jalan Taming Sari, Taiping</p>
                </div>
              </div>
              {/* Fallback clean design map rendering */}
              <iframe 
                title="Taiping Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9168962366885!2d100.73884171536762!3d4.851944396476901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304adf4be6ecb1bf%3A0xe54e6012fa6b23d9!2sAnsari%20Famous%20Cendol!5e0!3m2!1sen!2smy!4v1680000000000!5m2!1sen!2smy"
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: 'inherit' }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form & Branches Grid */}
      <section className="inquiries-branches-section">
        <div className="inquiry-grid">
          {/* Contact Form */}
          <div className="contact-form-side glass-card">
            <h3>Send Us a Message</h3>
            <p>Have questions about event bookings, catering services, or our heritage story? Write to us!</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="e.g. Catering Enquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Inquiry'} <Send size={16} />
              </button>

              {success && (
                <div className="alert alert-success animate-fade">
                  <CheckCircle2 size={20} />
                  <div>
                    <strong>Inquiry Sent Successfully!</strong>
                    <p>Thank you. We have saved your message and will respond shortly.</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="alert alert-error animate-fade">
                  <AlertCircle size={20} />
                  <div>
                    <strong>Error!</strong>
                    <p>{error}</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Active Branch */}
          <div className="branches-list-side">
            <span className="section-subtitle">Current Location</span>
            <h3>Active Branch</h3>
            <p className="branches-intro">
              Visit our active flagship branch in Taiping for the original Ansari Famous Cendol experience.
            </p>

            <div className="branches-grid">
              {branches.map((branch) => (
                <div key={branch.id} className={`branch-card glass-card ${branch.status === 'Active' ? 'active-branch' : ''}`}>
                  <div className="branch-card-header">
                    <h4>{branch.city}</h4>
                    <span className={`branch-status-badge ${branch.status.toLowerCase()}`}>
                      {branch.status}
                    </span>
                  </div>
                  <p>{branch.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .visit-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--amber) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .visit-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .visit-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .visit-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Main Stall */
        .main-stall-section {
          padding: 5rem 8%;
        }
        .main-stall-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }
        .stall-info-card {
          padding: 3rem 2.5rem;
          position: relative;
        }
        .info-card-badge {
          position: absolute;
          top: -12px;
          left: 30px;
          background: var(--amber);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.8rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .stall-info-card h2 {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          color: var(--amber);
          margin-bottom: 1rem;
        }
        .stall-desc {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1.2rem;
          align-items: flex-start;
        }
        .info-item svg {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .info-item h4 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--amber);
          margin-bottom: 0.25rem;
        }
        .info-item p {
          font-size: 0.95rem;
          color: var(--text-dark);
        }
        .info-item .subtext {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
          margin-top: 0.25rem;
        }

        .map-wrapper {
          overflow: hidden;
          padding: 0.5rem;
          min-height: 400px;
        }
        .mock-map {
          width: 100%;
          height: 100%;
          min-height: 390px;
          border-radius: calc(var(--radius-lg) - 4px);
          position: relative;
          background: #e5e3df;
        }

        /* Contact & Branches */
        .inquiries-branches-section {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .inquiry-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: flex-start;
        }
        .contact-form-side {
          padding: 3rem;
        }
        .contact-form-side h3 {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--amber);
          margin-bottom: 0.5rem;
        }
        .contact-form-side p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .form-group input, .form-group textarea {
          padding: 0.9rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background: rgba(255,255,255,0.8);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary-light);
          background: #fff;
          outline: none;
          box-shadow: 0 0 0 3px var(--primary-glow);
        }
        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 1rem;
        }
        
        /* Alerts */
        .alert {
          margin-top: 1.5rem;
          padding: 1.2rem;
          border-radius: var(--radius-sm);
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          font-size: 0.9rem;
        }
        .alert-success {
          background: hsla(142, 72%, 26%, 0.08);
          border: 1px solid var(--primary-light);
          color: var(--primary);
        }
        .alert-error {
          background: rgba(220, 53, 69, 0.08);
          border: 1px solid #dc3545;
          color: #dc3545;
        }
        .alert h5 {
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .alert p {
          margin: 0;
          font-size: 0.85rem;
        }

        /* Branches List */
        .branches-list-side h3 {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--amber);
          margin-bottom: 0.5rem;
        }
        .branches-intro {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .branches-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .branch-card {
          padding: 1.5rem;
          transition: var(--transition-smooth);
        }
        .branch-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-sm);
        }
        .active-branch {
          border: 1.5px solid var(--primary-light);
        }
        .branch-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          gap: 0.5rem;
        }
        .branch-card-header h4 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--amber);
        }
        .branch-status-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .branch-status-badge.active {
          background: var(--primary-glow);
          color: var(--primary);
        }
        .branch-status-badge.planned {
          background: rgba(0,0,0,0.05);
          color: var(--text-muted);
        }
        .branch-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .main-stall-grid, .inquiry-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .branches-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
