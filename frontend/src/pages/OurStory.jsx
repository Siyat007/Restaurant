import React from 'react';
import { History, Award, BookOpen, User, Star } from 'lucide-react';

export default function OurStory() {
  return (
    <div className="story-container">
      {/* Page Header */}
      <section className="story-hero">
        <div className="story-hero-content">
          <span className="section-subtitle">Since 1940</span>
          <h1>Our Story</h1>
          <p className="hero-lead">
            A family-run Indian-Muslim (Mamak) cendol stall that has been part of Taiping life for generations.
          </p>
        </div>
      </section>

      {/* Main Historical Chapter */}
      <section className="history-chapter">
        <div className="chapter-grid">
          <div className="chapter-text">
            <h2>A Taiping Family Tradition</h2>
            <p>
              Ansari's Famous Cendol began as a humble family street-food business in Taiping in the 1940s. Its Indian-Muslim roots, familiar flavours, and straightforward service have made it a local favourite across generations.
            </p>
            <p>
              From its Taiping home at <strong>92, Jalan Barrack</strong>, the stall continues to offer a simple place to cool down, catch up, and enjoy traditional cendol. It is the kind of everyday stop that locals remember and visitors are glad to discover.
            </p>
            <div className="story-quote glass-card">
              <Star size={24} className="quote-icon" />
              <p>
                "The cendol tastes exactly like I remember from childhood."
              </p>
            </div>
          </div>
          <div className="chapter-image">
            <img src="/images/image3.jpg" alt="Vintage Drawing of P.M. Abdul Kader Stall" className="heritage-photo" />
            <span className="image-caption">A glimpse of the family street-food tradition behind every bowl.</span>
          </div>
        </div>
      </section>

      {/* The Timeline */}
      <section className="timeline-section">
        <div className="section-header">
          <span className="section-subtitle">Our Journey</span>
          <h2 className="section-title">Generations of Familiar Flavour</h2>
          <p className="section-desc">
            A long-standing family recipe, prepared simply for the Taiping community.
          </p>
        </div>

        <div className="timeline">
          {/* Milestone 1 */}
          <div className="timeline-item left">
            <div className="timeline-dot"><History size={16} /></div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">1940s</span>
              <h3>The Arrival</h3>
              <p>
                The family starts serving traditional cendol in Taiping, building a following one bowl at a time.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="timeline-item right">
            <div className="timeline-dot"><History size={16} /></div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">1970s</span>
              <h3>Keeping It Familiar</h3>
              <p>
                The next generation carries on the family recipe and the small-stall spirit that regulars know.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="timeline-item left">
            <div className="timeline-dot"><History size={16} /></div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">2000s</span>
              <h3>Growing With the Community</h3>
              <p>
                Word of mouth brings families, friends, and visitors back for a refreshing, affordable bowl.
              </p>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="timeline-item right">
            <div className="timeline-dot"><History size={16} /></div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">Present Day</span>
              <h3>Still Serving Taiping</h3>
              <p>
                The family keeps the focus on the Taiping stall: traditional cendol, honest portions, and familiar faces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Family Legacy Tree */}
      <section className="family-legacy-section">
        <div className="section-header">
          <span className="section-subtitle">The Family Behind the Stall</span>
          <h2 className="section-title">The Family Lineage</h2>
          <p className="section-desc">
            A family tradition passed from one generation to the next.
          </p>
        </div>

        <div className="family-tree">
          <div className="tree-node glass-card">
            <div className="node-icon"><User size={24} /></div>
            <span className="node-title">The Initiator</span>
            <h3>P.M. Abdul Kader</h3>
            <span className="node-period">1940s - 1970s</span>
            <p>Helped establish the family tradition of serving cendol in Taiping.</p>
          </div>

          <div className="tree-connector"></div>

          <div className="tree-node glass-card">
            <div className="node-icon"><User size={24} /></div>
            <span className="node-title">The Next Generation</span>
            <h3>S.M. Abdul Rahman</h3>
            <span className="node-period">1970s - 2000s</span>
            <p>Continued the traditional recipe and the family-run way of serving customers.</p>
          </div>

          <div className="tree-connector"></div>

          <div className="tree-node glass-card highlight-node">
            <div className="node-icon"><User size={24} /></div>
            <span className="node-title">Keeping the Tradition Going</span>
            <h3>Ansari Abdul Rahman</h3>
            <span className="node-period">2000s - Present</span>
            <p>Keeps the Taiping stall welcoming for regulars and first-time visitors alike.</p>
          </div>
        </div>
      </section>

      {/* Secret Recipe Showcase */}
      <section className="secret-showcase">
        <div className="secret-grid">
          <div className="secret-image">
            <img src="/images/image1.jpg" alt="Ansari preparing Cendol" className="heritage-photo heritage-photo-portrait" />
          </div>
          <div className="secret-content">
            <h2>Made the Traditional Way</h2>
            <p>
              The taste people know comes from a family recipe and a simple, careful preparation passed down over time.
            </p>
            <p>
              Green cendol, shaved ice, coconut milk, and palm sugar come together in the familiar balance that makes a hot day in Taiping feel a little easier.
            </p>
            <div className="heritage-seal">
              <Award size={36} />
              <div>
                <h4>Family-Run Since 1940</h4>
                <p>Traditional cendol served simply for the Taiping community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .story-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--amber) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .story-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .story-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .hero-lead {
          font-size: 1.25rem;
          opacity: 0.9;
          font-weight: 300;
        }

        /* History Chapter */
        .history-chapter {
          padding: 6rem 8%;
        }
        .chapter-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .chapter-text h2 {
          font-family: var(--font-serif);
          font-size: 3rem;
          color: var(--amber);
          margin-bottom: 1.5rem;
        }
        .chapter-text p {
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          color: var(--text-dark);
        }
        .story-quote {
          padding: 2rem;
          border-left: 4px solid var(--amber-light);
          margin-top: 2rem;
          position: relative;
        }
        .quote-icon {
          position: absolute;
          top: -15px;
          right: 20px;
          color: var(--amber-glow);
        }
        .story-quote p {
          margin: 0;
          font-style: italic;
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--amber);
        }
        .heritage-photo {
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          border: 4px solid #fff;
          object-fit: cover;
          max-height: 400px;
        }
        .heritage-photo-portrait {
          display: block;
          width: min(100%, 360px);
          max-height: none;
          margin: 0 auto;
          object-fit: contain;
        }
        .image-caption {
          display: block;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 1rem;
          font-style: italic;
        }

        /* Timeline */
        .timeline-section {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        .timeline::after {
          content: '';
          position: absolute;
          width: 4px;
          background-color: var(--amber-glow);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
        }
        .timeline-item {
          padding: 10px 40px;
          position: relative;
          width: 50%;
        }
        .timeline-item.left { left: 0; }
        .timeline-item.right { left: 50%; }
        
        .timeline-dot {
          width: 32px;
          height: 32px;
          position: absolute;
          background-color: var(--primary);
          border: 4px solid var(--cream-light);
          border-radius: 50%;
          top: 15px;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .timeline-item.left .timeline-dot { right: -16px; }
        .timeline-item.right .timeline-dot { left: -16px; }
        
        .timeline-content {
          padding: 2rem;
          position: relative;
        }
        .timeline-date {
          display: inline-block;
          font-weight: 700;
          color: var(--primary-light);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .timeline-content h3 {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: var(--amber);
          margin-bottom: 0.5rem;
        }
        .timeline-content p {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* Family Legacy Tree */
        .family-legacy-section {
          padding: 6rem 8%;
        }
        .family-tree {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .tree-node {
          padding: 2.5rem;
          width: 100%;
          text-align: center;
          position: relative;
          border-radius: var(--radius-md);
          transition: var(--transition-smooth);
        }
        .tree-node:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .highlight-node {
          border: 2px solid var(--primary-light);
          background: rgba(255, 255, 255, 0.9);
        }
        .node-icon {
          width: 48px;
          height: 48px;
          background: var(--amber-glow);
          color: var(--amber);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem auto;
        }
        .highlight-node .node-icon {
          background: var(--primary-glow);
          color: var(--primary);
        }
        .node-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.25rem;
        }
        .tree-node h3 {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--amber);
          margin-bottom: 0.25rem;
        }
        .node-period {
          font-size: 0.9rem;
          color: var(--primary-light);
          font-weight: 600;
          display: block;
          margin-bottom: 1rem;
        }
        .tree-node p {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin: 0;
        }
        .tree-connector {
          width: 4px;
          height: 50px;
          background: var(--amber-glow);
        }
        .highlight-node .node-title {
          color: var(--primary-light);
        }

        /* Secret Showcase */
        .secret-showcase {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .secret-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: center;
        }
        .secret-content h2 {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          color: var(--amber);
          margin-bottom: 1.5rem;
        }
        .secret-content p {
          margin-bottom: 1.2rem;
          color: var(--text-dark);
        }
        .heritage-seal {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: #fff;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
          margin-top: 2rem;
        }
        .heritage-seal svg {
          color: var(--amber-light);
          flex-shrink: 0;
        }
        .heritage-seal h4 {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--amber);
          margin-bottom: 0.25rem;
        }
        .heritage-seal p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .chapter-grid, .secret-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .chapter-image {
            order: -1;
          }
          .timeline::after {
            left: 31px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          .timeline-item.right {
            left: 0;
          }
          .timeline-dot {
            left: 15px !important;
            right: auto !important;
          }
        }
        @media (max-width: 600px) {
          .story-hero { padding: 4rem 1.25rem 3rem; }
          .story-hero h1 { font-size: 2.75rem; }
          .hero-lead { font-size: 1rem; }
          .history-chapter, .timeline-section, .family-legacy-section, .secret-showcase { padding: 3.5rem 1.25rem; }
          .chapter-grid, .secret-grid { gap: 2rem; }
          .chapter-text h2, .secret-content h2 { font-size: 2.25rem; }
          .timeline-content { padding: 1.15rem; }
          .tree-node { padding: 1.5rem 1.15rem; }
          .heritage-seal { padding: 1rem; gap: 0.85rem; }
        }
      `}</style>
    </div>
  );
}
