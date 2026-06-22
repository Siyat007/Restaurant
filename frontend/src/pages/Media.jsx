import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Share2, Award, Heart } from 'lucide-react';

const GALLERY_SLIDES = [
  {
    image: '/images/image1.jpg',
    title: 'Handcrafting the Legacy',
    description: 'Ansari Abdul Rahman scooping the rich palm sugar syrup at the iconic ice shaving station, following secret techniques handed down by his father.'
  },
  {
    image: '/images/image2.jpg',
    title: 'The Signature Heritage Bowl',
    description: 'A close-up of a perfect serving: soft bright green rice noodles, mountain of shaved ice, coconut milk, and caramel-like Gula Melaka.'
  },
  {
    image: '/images/image3.jpg',
    title: 'Street Heritage Illustration',
    description: 'Original pen-and-ink artwork by Ng Kok Hong of Studio Ayer, capturing the timeless experience of Abdul Kader serving customers in the 1940s.'
  },
  {
    image: '/images/image4.jpg',
    title: 'Generations of Smiles',
    description: 'Two young local children enjoying their bowls of cold Cendol, showing how this street food favorite continues to unite generations.'
  },
  {
    image: '/images/image5.jpg',
    title: 'The Jalan Taming Sari Shopfront',
    description: 'The historic flagship shop of Ansari Famous Cendol in Taiping, Perak, decorated with the Malaysian flag and welcoming guests daily.'
  }
];

const SPECIAL_THANKS = [
  'Ministry of Tourism Malaysia',
  'Tourism Malaysia',
  'Majlis Tindakan Pelancongan Negeri Perak',
  'Taiping Municipal Council (MPT)',
  'Pejabat Daerah Larut & Matang',
  'Muzium Perak',
  'Jabatan Penerangan Perak',
  'Ibu Pejabat Polis Trafik Taiping',
  'Jabatan Bomba Taiping',
  'JKR Taiping',
  'Chuan Sin Sdn. Bhd.',
  'Sanland Paint Industry Sdn. Bhd.',
  'Hotel Panorama Taiping',
  'Taiping Resort',
  'FINAS',
  'Taiping Tourist Association (2002–2004 Committee)'
];

export default function Media() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev === GALLERY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? GALLERY_SLIDES.length - 1 : prev - 1));
  };

  return (
    <div className="media-container">
      {/* Media Header */}
      <section className="media-hero">
        <div className="media-hero-content">
          <span className="section-subtitle">Heritage in Focus</span>
          <h1>Media & Gallery</h1>
          <p>
            Browse historical records, sketches, and photographs documenting the history 
            of Ansari's Famous Cendol in Taiping.
          </p>
        </div>
      </section>

      {/* Carousel Gallery Section */}
      <section className="carousel-section">
        <div className="section-header">
          <span className="section-subtitle">Visual Archives</span>
          <h2 className="section-title">A Window into History</h2>
        </div>

        <div className="carousel-wrapper glass-card">
          <div className="carousel-image-container">
            <img 
              src={GALLERY_SLIDES[activeSlide].image} 
              alt={GALLERY_SLIDES[activeSlide].title} 
              className="carousel-image animate-fade"
              key={activeSlide} // forces re-render for animation
            />
            
            {/* Nav Arrows */}
            <button className="carousel-arrow prev" onClick={handlePrev} aria-label="Previous image">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-arrow next" onClick={handleNext} aria-label="Next image">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="carousel-caption">
            <div className="caption-header">
              <h3>{GALLERY_SLIDES[activeSlide].title}</h3>
              <span className="slide-indicator">Slide {activeSlide + 1} of {GALLERY_SLIDES.length}</span>
            </div>
            <p>{GALLERY_SLIDES[activeSlide].description}</p>
            
            {/* Carousel Dots */}
            <div className="carousel-dots">
              {GALLERY_SLIDES.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot-btn ${activeSlide === i ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Thanks & Patron Section */}
      <section className="patrons-section">
        <div className="section-header">
          <span className="section-subtitle">With Heartfelt Gratitude</span>
          <h2 className="section-title">Special Acknowledgements</h2>
          <p className="section-desc">
            We honor the government ministries, municipal departments, and local organizations who contributed to the historic success of:
          </p>
          <div className="heritage-project-title">
            <Award size={20} /> "A Path to Street Heritage" • 27 November 2004
          </div>
        </div>

        <div className="patrons-grid">
          {SPECIAL_THANKS.map((name, index) => (
            <div key={index} className="patron-badge glass-card">
              <span className="badge-heart"><Heart size={12} fill="currentColor" /></span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .media-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--amber) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .media-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .media-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .media-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Carousel */
        .carousel-section {
          padding: 5rem 8%;
        }
        .carousel-wrapper {
          max-width: 900px;
          margin: 0 auto;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .carousel-image-container {
          position: relative;
          width: 100%;
          height: 500px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: var(--transition-smooth);
        }
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(15, 15, 15, 0.7);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .carousel-arrow:hover {
          background: var(--primary);
          border-color: var(--primary);
          transform: translateY(-50%) scale(1.05);
        }
        .carousel-arrow.prev { left: 20px; }
        .carousel-arrow.next { right: 20px; }

        .carousel-caption {
          padding: 2.5rem;
          background: #fff;
          border-top: 1px solid var(--border-color);
        }
        .caption-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
          gap: 1rem;
        }
        .caption-header h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--amber);
        }
        .slide-indicator {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          background: var(--cream);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }
        .carousel-caption p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
        }
        .dot-btn {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--amber-glow);
          transition: var(--transition-smooth);
        }
        .dot-btn.active {
          background: var(--primary);
          width: 30px;
          border-radius: 10px;
        }

        /* Patrons Section */
        .patrons-section {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .heritage-project-title {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-glow);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          border: 1px solid var(--primary-light);
          margin-top: 1rem;
        }
        .patrons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3.5rem;
        }
        .patron-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.2rem 1.5rem;
          background: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
          transition: var(--transition-smooth);
        }
        .patron-badge:hover {
          transform: translateY(-2px);
          border-color: var(--primary-light);
          box-shadow: var(--shadow-sm);
        }
        .badge-heart {
          color: var(--primary-light);
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .patrons-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .carousel-image-container {
            height: 350px;
          }
          .patrons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .patrons-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
