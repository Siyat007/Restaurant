import React, { useState, useEffect, useRef } from 'react';
import { Heart, Camera, Send, CheckCircle2, AlertCircle, X, ImageOff } from 'lucide-react';

const FALLBACK_MEMORIES = [
  {
    id: 1,
    name: 'A Long-Time Regular',
    message: 'I have been coming here since I was a child with my grandfather. Nothing beats a hot afternoon in Taiping cooled down by a bowl of Ansari\'s cendol.',
    photo_url: null,
    created_at: new Date().toISOString(),
  },
];

export default function Memories() {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetch('/api/memories')
      .then((res) => {
        if (!res.ok) throw new Error('API server down');
        return res.json();
      })
      .then((data) => {
        setMemories(data);
        setLoading(false);
      })
      .catch(() => {
        setMemories(FALLBACK_MEMORIES);
        setLoading(false);
        setOffline(true);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Photo is too large. Please choose one under 5MB.');
      return;
    }

    setError(null);
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('message', formData.message);
    if (photoFile) payload.append('photo', photoFile);

    fetch('/api/memories', {
      method: 'POST',
      body: payload,
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Submission failed');
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        removePhoto();
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Something went wrong. Please check your connection and try again.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="memories-container">
      {/* Header */}
      <section className="memories-hero">
        <div className="memories-hero-content">
          <span className="section-subtitle">Shared By You</span>
          <h1>Community Memories</h1>
          <p>
            Every bowl of cendol carries a story. Share yours — a childhood memory, a family
            tradition, or simply a photo from your visit — and we'll feature it here for
            everyone to see.
          </p>
        </div>
      </section>

      {/* Submission Form */}
      <section className="submit-section">
        <div className="submit-card glass-card">
          <span className="info-card-badge">Share Your Story</span>
          <h2>Tell Us Your Memory</h2>
          <p className="submit-desc">
            Photos are optional but always welcome. Every submission is reviewed by our team
            before it appears on the wall below — usually within a day or two.
          </p>

          <form onSubmit={handleSubmit} className="memory-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Aisyah binti Ahmad"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email (optional, kept private)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Memory</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
                maxLength={2000}
                placeholder="Tell us about your visit or memory of Ansari's Famous Cendol..."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Add a Photo (optional)</label>
              {!photoPreview ? (
                <button
                  type="button"
                  className="photo-upload-btn"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Camera size={22} />
                  <span>Tap to take a photo or choose from your gallery</span>
                </button>
              ) : (
                <div className="photo-preview-wrapper">
                  <img src={photoPreview} alt="Selected preview" className="photo-preview" />
                  <button type="button" className="remove-photo-btn" onClick={removePhoto} aria-label="Remove photo">
                    <X size={18} />
                  </button>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoSelect}
                hidden
              />
            </div>

            <button type="submit" className="btn-primary form-submit-btn" disabled={submitting}>
              {submitting ? 'Sending...' : 'Share My Memory'} <Send size={16} />
            </button>

            {success && (
              <div className="alert alert-success animate-fade">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Thank you for sharing!</strong>
                  <p>Your memory has been received and will appear here once our team reviews it.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="alert alert-error animate-fade">
                <AlertCircle size={20} />
                <div>
                  <strong>Couldn't send that.</strong>
                  <p>{error}</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Community Wall */}
      <section className="wall-section">
        <div className="section-header">
          <span className="section-subtitle">The Wall</span>
          <h2 className="section-title">Memories From Our Guests</h2>
          <p className="section-desc">
            A collection of stories and photos shared by the people who make Ansari's Famous
            Cendol what it is.
          </p>
        </div>

        {offline && (
          <div className="api-notice">
            <span className="notice-badge">Offline Mode</span>
            <p>Displaying a sample memory. The Laravel database server is offline.</p>
          </div>
        )}

        {loading ? (
          <div className="wall-grid">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="memory-card glass-card loading-card">
                <div className="loading-line photo"></div>
                <div className="loading-line title"></div>
                <div className="loading-line desc"></div>
              </div>
            ))}
          </div>
        ) : memories.length === 0 ? (
          <div className="empty-wall glass-card">
            <Heart size={32} />
            <p>No memories published yet — be the first to share yours above!</p>
          </div>
        ) : (
          <div className="wall-grid">
            {memories.map((memory) => (
              <div key={memory.id} className="memory-card glass-card">
                <div className="memory-photo-frame">
                  {memory.photo_url ? (
                    <img src={memory.photo_url} alt={`Memory shared by ${memory.name}`} className="memory-photo" />
                  ) : (
                    <div className="memory-photo-placeholder">
                      <ImageOff size={28} />
                    </div>
                  )}
                </div>
                <div className="memory-card-body">
                  <p className="memory-message">&ldquo;{memory.message}&rdquo;</p>
                  <div className="memory-author">
                    <Heart size={14} fill="currentColor" />
                    <span>{memory.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <style>{`
        .memories-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .memories-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .memories-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .memories-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Submission Form */
        .submit-section {
          padding: 5rem 8% 2rem 8%;
        }
        .submit-card {
          max-width: 760px;
          margin: 0 auto;
          padding: 3rem;
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
        .submit-card h2 {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          color: var(--amber);
          margin-bottom: 0.75rem;
        }
        .submit-desc {
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .memory-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
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

        .photo-upload-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.2rem;
          border: 2px dashed var(--amber-light);
          border-radius: var(--radius-sm);
          background: var(--cream-light);
          color: var(--amber);
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition-smooth);
          width: 100%;
          text-align: left;
        }
        .photo-upload-btn:hover {
          background: var(--amber-glow);
          border-color: var(--amber);
        }
        .photo-preview-wrapper {
          position: relative;
          width: 100%;
          max-width: 260px;
        }
        .photo-preview {
          width: 100%;
          border-radius: var(--radius-sm);
          display: block;
          max-height: 220px;
          object-fit: cover;
        }
        .remove-photo-btn {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--dark);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .remove-photo-btn:hover {
          background: var(--primary);
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        /* Alerts (shared style) */
        .alert {
          margin-top: 0.5rem;
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
        .alert p {
          margin: 0;
          font-size: 0.85rem;
        }

        /* Wall Section */
        .wall-section {
          padding: 4rem 8% 6rem 8%;
        }
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3.5rem auto;
        }
        .section-title {
          font-family: var(--font-serif);
          font-size: 2.6rem;
          color: var(--amber);
          margin: 0.5rem 0 1rem 0;
        }
        .section-desc {
          color: var(--text-muted);
        }
        .section-subtitle {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary-light);
        }

        .api-notice {
          max-width: 600px;
          margin: -2rem auto 3rem auto;
          text-align: center;
          background: hsla(28, 70%, 20%, 0.08);
          border: 1px dashed var(--amber-light);
          border-radius: var(--radius-md);
          padding: 1rem 2rem;
        }
        .notice-badge {
          display: inline-block;
          background: var(--amber);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }
        .api-notice p {
          font-size: 0.85rem;
          color: var(--amber);
          font-weight: 500;
          margin: 0;
        }

        .empty-wall {
          max-width: 480px;
          margin: 0 auto;
          padding: 3rem;
          text-align: center;
          color: var(--text-muted);
        }
        .empty-wall svg {
          color: var(--primary-light);
          margin-bottom: 1rem;
        }

        .wall-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .memory-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }
        .memory-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .memory-photo-frame {
          width: 100%;
          height: 220px;
          background: var(--cream-light);
        }
        .memory-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .memory-photo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          opacity: 0.4;
        }
        .memory-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          flex-grow: 1;
        }
        .memory-message {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text-dark);
          line-height: 1.5;
          flex-grow: 1;
        }
        .memory-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary);
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        /* Loading Skeleton */
        .loading-card {
          min-height: 340px;
          border-style: dashed;
        }
        .loading-line {
          background: rgba(0,0,0,0.05);
          border-radius: 4px;
        }
        .loading-line.photo { height: 220px; border-radius: 0; }
        .loading-line.title { width: 50%; height: 20px; margin: 1.5rem 1.75rem 0.75rem 1.75rem; }
        .loading-line.desc { width: 80%; height: 60px; margin: 0 1.75rem; }

        /* Responsive */
        @media (max-width: 1024px) {
          .wall-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .submit-card {
            padding: 2rem 1.5rem;
          }
        }
        @media (max-width: 640px) {
          .wall-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}