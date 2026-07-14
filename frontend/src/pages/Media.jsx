import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Share2, Award, Heart } from 'lucide-react';

const GALLERY_SLIDES = [
  {
    image: '/images/afc-shop-pic.png',
    title: 'Ansari Famous Cendol Shop',
    description: 'The real stall front and counter where bowls are served to Taiping regulars and visitors.'
  },
  {
    image: '/images/afc-customers.png',
    title: 'Customers at the Shop',
    description: 'Local customers enjoying a simple break over cendol.'
  },
  {
    image: '/images/afc-customerss.png',
    title: 'A Busy Cendol Stop',
    description: 'An everyday busy moment at the family-run stall.'
  },
  {
    image: '/images/afc-happy-customers.png',
    title: 'Happy Customers',
    description: 'Customers sharing a cheerful cendol stop together.'
  },
  {
    image: '/images/afc-customer.jpg',
    title: 'Customer Moment',
    description: 'A real customer moment from the stall.'
  },
  {
    image: '/images/afc-2-cust.jpg',
    title: 'Cendol Together',
    description: 'Cendol shared the easy, local way.'
  },
  {
    image: '/images/afc-image4.jpg',
    title: 'Shop Gallery Photo',
    description: 'A look inside the everyday atmosphere around the stall.'
  },
  {
    image: '/images/afc-screenshot-1.png',
    title: 'AFC Photo Collection',
    description: 'Freshly prepared cendol and the people who make the stall lively.'
  },
  {
    image: '/images/afc-screenshot-2.png',
    title: 'AFC Gallery Highlight',
    description: 'A glimpse of the simple serving tradition at Ansari Famous Cendol.'
  },
  {
    image: '/images/afc-screenshot-3.png',
    title: 'AFC Customer Gallery',
    description: 'A familiar Taiping cendol moment with local customers.'
  }
];

const REPUTATION_VIDEOS = [
  { id: 'Fp9Rq_QhnbU', title: 'Ansari Famous Cendol Reputation Video 1' },
  { id: '9sA_P6GMHVU', title: 'Ansari Famous Cendol Reputation Video 2' },
  { id: '1n59qWD2vrI', title: 'Ansari Famous Cendol Reputation Video 3' },
  { id: 'H6TTUvmPrsw', title: 'Ansari Famous Cendol Reputation Video 4' },
  { id: 'HMqaMcnhpPo', title: 'Ansari Famous Cendol Reputation Video 5' },
  { id: 'Vv912w-Qveg', title: 'Ansari Famous Cendol Reputation Video 6' },
  { id: 'ijA_vyLKLbg', title: 'Ansari Famous Cendol Reputation Video 7' },
  { id: 'E_hzRn8yzxM', title: 'Ansari Famous Cendol Reputation Video 8' },
  { id: 'ObjZ9GeoaJ8', title: 'Ansari Famous Cendol Reputation Video 9' }
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
          <span className="section-subtitle">Life at the Stall</span>
          <h1>Media & Gallery</h1>
          <p>
            See the real stall atmosphere, freshly prepared cendol, and the customers who make Ansari's part of Taiping.
          </p>
        </div>
      </section>

      {/* Carousel Gallery Section */}
      <section className="carousel-section">
        <div className="section-header">
          <span className="section-subtitle">From Our Stall</span>
          <h2 className="section-title">Everyday Taiping Moments</h2>
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

      {/* Reputation Videos Section */}
      <section className="videos-section">
        <div className="section-header">
          <span className="section-subtitle">Videos</span>
          <h2 className="section-title">Watch the Stall in Action</h2>
          <p className="section-desc">
            Watch visits and moments that show the simple, busy rhythm of Ansari's Famous Cendol.
          </p>
        </div>

        <div className="videos-grid">
          {REPUTATION_VIDEOS.map((video) => (
            <div key={video.id} className="video-card glass-card">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
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

        /* Videos Section */
        .videos-section {
          padding: 5rem 8% 6rem;
          background-color: var(--cream-light);
        }
        .videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1180px;
          margin: 3rem auto 0;
        }
        .video-card {
          overflow: hidden;
          background: #000;
          aspect-ratio: 16 / 9;
        }
        .video-card iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
        }

        /* Patrons Section */
        .patrons-section {
          padding: 6rem 8%;
          background-color: #fff;
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
          .videos-grid {
            grid-template-columns: repeat(2, 1fr);
          }
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
          .videos-grid {
            grid-template-columns: 1fr;
          }
          .patrons-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
