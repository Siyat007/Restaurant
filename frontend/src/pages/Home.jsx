import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Award, ShieldCheck, Clock, MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';

const PHONE_NUMBER = '+60 5-808 2004';
const PHONE_LINK = 'tel:+6058082004';
const WHATSAPP_LINK = 'https://wa.me/6058082004';
const DIRECTIONS_LINK = 'https://www.google.com/maps/search/?api=1&query=Ansari%20Famous%20Cendol%2C%2092%20Jalan%20Barrack%2C%2034000%20Taiping%2C%20Perak%2C%20Malaysia';

function getStallStatus() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kuala_Lumpur',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === 'hour')?.value);
  const minute = Number(parts.find((part) => part.type === 'minute')?.value);
  const currentMinutes = hour * 60 + minute;

  return currentMinutes >= 10 * 60 && currentMinutes < 18 * 60 + 30
    ? { open: true, label: 'Open Now' }
    : { open: false, label: 'Closed — reopens at 10:00 AM' };
}

export default function Home() {
  const [bowlIngredients, setBowlIngredients] = useState([]);
  const [showSyrupAnimation, setShowSyrupAnimation] = useState(false);
  const [stallStatus, setStallStatus] = useState(getStallStatus);

  useEffect(() => {
    const updateStatus = () => setStallStatus(getStallStatus());
    const interval = window.setInterval(updateStatus, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const addIngredient = (ingredient) => {
    if (!bowlIngredients.includes(ingredient)) {
      setBowlIngredients([...bowlIngredients, ingredient]);
    }
  };

  const clearBowl = () => {
    setBowlIngredients([]);
    setShowSyrupAnimation(false);
  };

  const pourSyrup = () => {
    if (bowlIngredients.includes('Block Ice')) {
      setShowSyrupAnimation(true);
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge animate-fade">
            <Award size={16} /> Three Generations Since 1940
          </div>
          <h1>
            Taiping's Favourite Cendol <br />
            <span>Since 1940</span>
          </h1>
          <p>
            A family-run Indian-Muslim (Mamak) stall serving simple, refreshing cendol
            with a traditional recipe passed down through generations. Drop by for a cool
            bowl, a quick chat, or an easy takeaway in Taiping.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="btn-primary">
              View Our Menu <ArrowRight size={20} />
            </Link>
            <Link to="/story" className="btn-secondary">
              Discover Our Story
            </Link>
            <a href={WHATSAPP_LINK} className="btn-primary hero-order-cta" target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Call / WhatsApp to Order
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src="/images/shop-pic.png" alt="Ansari's Famous Cendol Storefront" className="hero-image" />
          <div className="hero-floating-card glass-card">
            <div className="stars">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p>"A must-visit whenever I'm in Taiping."</p>
            <span>— Customer experience</span>
          </div>
        </div>
      </section>

      <section className="visit-today-strip" aria-label="Visit Ansari's Famous Cendol today">
        <div className="visit-today-content glass-card">
          <div className="visit-today-heading">
            <span className={`open-status ${stallStatus.open ? 'is-open' : 'is-closed'}`}>
              <span aria-hidden="true"></span>{stallStatus.label}
            </span>
            <h2>Visit Us Today</h2>
          </div>
          <div className="visit-today-details">
            <div className="visit-today-item">
              <Clock size={20} aria-hidden="true" />
              <div><strong>Operating hours</strong><span>Open Daily: 10:00 AM - 6:30 PM</span></div>
            </div>
            <div className="visit-today-item">
              <Phone size={20} aria-hidden="true" />
              <div><strong>Phone or WhatsApp</strong><span><a href={PHONE_LINK}>{PHONE_NUMBER}</a> · <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp</a></span></div>
            </div>
            <div className="visit-today-item">
              <MapPin size={20} aria-hidden="true" />
              <div><strong>Taiping Stall</strong><a href={DIRECTIONS_LINK} target="_blank" rel="noreferrer">Get Directions <Navigation size={14} /></a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Spotlight */}
      <section className="ingredients-spotlight">
        <div className="section-header">
          <span className="section-subtitle">Made the familiar way</span>
          <h2 className="section-title">What Goes Into a Bowl</h2>
          <p className="section-desc">
            Straightforward ingredients and traditional preparation make each bowl cool, sweet, and satisfying.
          </p>
        </div>

        <div className="ingredients-grid">
          <div className="ingredient-card glass-card">
            <div className="ingredient-num">01</div>
            <h3>Pandan Noodles</h3>
            <p>
              Green cendol noodles give every bowl its familiar pandan flavour and gentle bite.
            </p>
          </div>
          <div className="ingredient-card glass-card">
            <div className="ingredient-num">02</div>
            <h3>Gula Melaka Syrup</h3>
            <p>
              Palm sugar syrup brings the deep, comforting sweetness that regulars remember.
            </p>
          </div>
          <div className="ingredient-card glass-card">
            <div className="ingredient-num">03</div>
            <h3>Creamy Coconut Milk</h3>
            <p>
              Coconut milk and shaved ice keep the bowl refreshing in Taiping's warm weather.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Introduction Section */}
      <section className="heritage-intro">
        <div className="heritage-intro-grid">
          <div className="heritage-intro-image">
            <img src="/images/image3.jpg" alt="Historical Drawing of Ansari Cendol" className="sketch-img" />
          </div>
          <div className="heritage-intro-text">
            <span className="section-subtitle">Since 1940</span>
            <h2>A Family Tradition, One Bowl at a Time</h2>
            <p>
              Ansari's Famous Cendol has been part of everyday Taiping life since the 1940s. Its Indian-Muslim family roots and traditional way of serving cendol have kept generations of locals coming back.
            </p>
            <p>
              Today, the family continues the simple routine: prepare, serve, and welcome everyone looking for a refreshing bowl at a fair price.
            </p>
            <Link to="/story" className="link-button">
              Read the Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="ingredients-spotlight">
        <div className="section-header">
          <span className="section-subtitle">Before You Visit</span>
          <h2 className="section-title">A Few Helpful Things to Know</h2>
          <p className="section-desc">
            Seating is limited and first-come, first-served. Peak times can mean a short wait, and takeaway orders are common. Popular flavours—especially Cendol Pulut—may sell out before closing, so visiting earlier is a good idea.
          </p>
          <Link to="/visit" className="link-button">Plan Your Visit <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Interactive Feature: Digital Cendol Bowl Builder */}
      <section className="interactive-bowl-section">
        <div className="section-header">
          <span className="section-subtitle">Interactive Recipe</span>
          <h2 className="section-title">Build Your Own Virtual Bowl</h2>
          <p className="section-desc">
            Follow the traditional preparation steps to create a perfect Malaysian Cendol.
          </p>
        </div>

        <div className="bowl-builder-container glass-card">
          <div className="ingredients-selectors">
            <h4>Select Ingredients in Order:</h4>
            <button 
              className={`select-btn ${bowlIngredients.includes('Green Noodles (Cendol)') ? 'active' : ''}`}
              onClick={() => addIngredient('Green Noodles (Cendol)')}
            >
              1. Add Pandan Noodles
            </button>
            <button 
              className={`select-btn ${bowlIngredients.includes('Red Beans') ? 'active' : ''}`}
              disabled={!bowlIngredients.includes('Green Noodles (Cendol)')}
              onClick={() => addIngredient('Red Beans')}
            >
              2. Add Red Beans
            </button>
            <button 
              className={`select-btn ${bowlIngredients.includes('Glutinous Rice (Pulut)') ? 'active' : ''}`}
              disabled={!bowlIngredients.includes('Green Noodles (Cendol)')}
              onClick={() => addIngredient('Glutinous Rice (Pulut)')}
            >
              3. Add Glutinous Rice (Pulut)
            </button>
            <button 
              className={`select-btn ${bowlIngredients.includes('Block Ice') ? 'active' : ''}`}
              disabled={!bowlIngredients.includes('Green Noodles (Cendol)')}
              onClick={() => addIngredient('Block Ice')}
            >
              4. Shave Block Ice
            </button>
            <button 
              className={`select-btn ${bowlIngredients.includes('Coconut Milk') ? 'active' : ''}`}
              disabled={!bowlIngredients.includes('Block Ice')}
              onClick={() => addIngredient('Coconut Milk')}
            >
              5. Pour Fresh Coconut Milk
            </button>
            <button 
              className={`select-btn ${showSyrupAnimation ? 'active' : ''}`}
              disabled={!bowlIngredients.includes('Coconut Milk')}
              onClick={pourSyrup}
            >
              6. Drizzle Gula Melaka Syrup
            </button>

            <button className="clear-btn" onClick={clearBowl}>Reset Bowl</button>
          </div>

          <div className="bowl-visualizer">
            <div className="bowl-rim">
              <div className="bowl-contents">
                {bowlIngredients.includes('Green Noodles (Cendol)') && (
                  <div className="visual-pandan-noodles animate-drop">
                    <span></span><span></span><span></span><span></span><span></span>
                  </div>
                )}
                {bowlIngredients.includes('Red Beans') && (
                  <div className="visual-beans animate-drop">
                    <span></span><span></span><span></span>
                  </div>
                )}
                {bowlIngredients.includes('Glutinous Rice (Pulut)') && (
                  <div className="visual-pulut animate-drop"></div>
                )}
                {bowlIngredients.includes('Block Ice') && (
                  <div className="visual-ice animate-drop">
                    <div className="ice-mound"></div>
                  </div>
                )}
                {bowlIngredients.includes('Coconut Milk') && (
                  <div className="visual-coconut-milk animate-fill"></div>
                )}
                {showSyrupAnimation && (
                  <div className="visual-gula-melaka animate-syrup"></div>
                )}
              </div>
            </div>

            <div className="bowl-status">
              {bowlIngredients.length === 0 && <p className="status-text">Select "Pandan Noodles" to begin your bowl!</p>}
              {bowlIngredients.length > 0 && bowlIngredients.length < 5 && <p className="status-text">Bowl in preparation... Keep adding ingredients!</p>}
              {bowlIngredients.length >= 5 && !showSyrupAnimation && <p className="status-text">Almost ready! Don't forget to drizzle the Gula Melaka syrup!</p>}
              {showSyrupAnimation && (
                <p className="status-text success-text">
                  <ShieldCheck size={18} /> Deliciously Complete! Ready to serve. Enjoy your cold dessert!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-container {
          padding-bottom: 2rem;
        }

        /* Hero */
        .hero {
          min-height: calc(90vh - 80px);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 4rem;
          padding: 4rem 8% 2rem 8%;
          background: radial-gradient(circle at 10% 20%, hsla(40, 25%, 94%, 0.8) 0%, hsla(142, 72%, 26%, 0.08) 90%);
        }
        .hero-content {
          animation: slideInLeft 1s var(--transition-smooth);
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--amber-light);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }
        .hero-content h1 {
          font-family: var(--font-serif);
          font-size: 4.8rem;
          line-height: 1.1;
          color: var(--dark);
          margin-bottom: 1.5rem;
        }
        .hero-content h1 span {
          color: var(--primary);
          background: linear-gradient(to right, var(--primary), var(--amber-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-content p {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 550px;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .hero-order-cta { background-color: var(--amber); box-shadow: 0 4px 15px hsla(28, 70%, 35%, 0.25); }
        .hero-order-cta:hover { background-color: var(--amber-light); }
        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeIn 1.2s ease-out;
        }
        .hero-image {
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          border: 4px solid #fff;
          transform: rotate(2deg);
          max-height: 480px;
          object-fit: cover;
          width: 100%;
          transition: var(--transition-smooth);
        }
        .hero-image:hover {
          transform: rotate(0deg) scale(1.02);
        }
        .hero-floating-card {
          position: absolute;
          bottom: -20px;
          left: -40px;
          padding: 1.5rem;
          max-width: 280px;
          animation: pulseGlow 5s infinite ease-in-out;
        }
        .stars {
          display: flex;
          gap: 0.25rem;
          color: gold;
          margin-bottom: 0.5rem;
        }
        .hero-floating-card p {
          font-size: 0.9rem;
          font-style: italic;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .hero-floating-card span {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary-light);
        }

        .visit-today-strip { padding: 0 8% 3rem; background: var(--cream); }
        .visit-today-content { max-width: 1200px; margin: -0.5rem auto 0; padding: 1.4rem 1.75rem; display: flex; align-items: center; gap: 2rem; z-index: 1; }
        .visit-today-heading { min-width: 170px; }
        .visit-today-heading h2 { color: var(--amber); font-family: var(--font-serif); font-size: 1.65rem; margin-top: 0.4rem; }
        .open-status { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
        .open-status span { width: 0.55rem; height: 0.55rem; border-radius: 50%; background: currentColor; }
        .open-status.is-open { color: var(--primary); }
        .open-status.is-closed { color: #a44720; }
        .visit-today-details { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; flex: 1; }
        .visit-today-item { display: flex; gap: 0.7rem; align-items: flex-start; color: var(--primary); }
        .visit-today-item > div { display: flex; flex-direction: column; gap: 0.15rem; color: var(--text-muted); font-size: 0.88rem; }
        .visit-today-item strong { color: var(--text-dark); font-size: 0.82rem; }
        .visit-today-item a { color: var(--primary); font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }
        .visit-today-item a:last-child { display: inline-flex; align-items: center; gap: 0.25rem; }

        /* Ingredient Spotlight */
        .ingredients-spotlight {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .ingredient-card {
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
        }
        .ingredient-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-light);
        }
        .ingredient-num {
          font-family: var(--font-serif);
          font-size: 4rem;
          font-weight: 700;
          color: var(--primary-glow);
          position: absolute;
          top: 10px;
          right: 20px;
          line-height: 1;
        }
        .ingredient-card h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--amber);
          margin-bottom: 1rem;
        }
        .ingredient-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        /* Heritage Intro */
        .heritage-intro {
          padding: 6rem 8%;
          background-color: var(--cream);
        }
        .heritage-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          align-items: center;
          gap: 5rem;
        }
        .sketch-img {
          width: 100%;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          background: #fff;
          padding: 10px;
        }
        .heritage-intro-text h2 {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          color: var(--amber);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .quote {
          font-size: 1.2rem;
          font-style: italic;
          color: var(--primary-light);
          border-left: 3px solid var(--primary-light);
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-serif);
        }
        .heritage-intro-text p {
          color: var(--text-dark);
          margin-bottom: 1.2rem;
          font-size: 1rem;
        }
        .link-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--primary);
          transition: var(--transition-smooth);
          margin-top: 1rem;
        }
        .link-button:hover {
          color: var(--primary-light);
          gap: 0.75rem;
        }

        /* Interactive Bowl Builder */
        .interactive-bowl-section {
          padding: 6rem 8%;
          background-color: var(--cream-light);
        }
        .bowl-builder-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          padding: 3.5rem;
          max-width: 1000px;
          margin: 0 auto;
          align-items: center;
        }
        .ingredients-selectors {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .ingredients-selectors h4 {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--amber);
        }
        .select-btn {
          text-align: left;
          padding: 0.9rem 1.5rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--border-color);
          color: var(--text-dark);
          font-weight: 500;
          transition: var(--transition-smooth);
        }
        .select-btn:not(:disabled):hover {
          background: #fff;
          border-color: var(--primary-light);
          transform: translateX(5px);
        }
        .select-btn.active {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }
        .select-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .clear-btn {
          margin-top: 1rem;
          padding: 0.9rem;
          border-radius: var(--radius-sm);
          border: 2px dashed var(--amber);
          color: var(--amber);
          font-weight: 600;
          text-align: center;
          transition: var(--transition-smooth);
        }
        .clear-btn:hover {
          background: var(--amber);
          color: #fff;
        }
        
        .bowl-visualizer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        /* Digital Bowl Drawing */
        .bowl-rim {
          width: 320px;
          height: 160px;
          background: #fdfdfd;
          border: 6px solid var(--amber-light);
          border-top: none;
          border-radius: 0 0 160px 160px;
          position: relative;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .bowl-rim::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 25px;
          background: #eaeaea;
          border-radius: 50%;
          z-index: 5;
        }
        .bowl-contents {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        /* Animations & Ingredients inside Bowl */
        .animate-drop {
          animation: dropIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes dropIn {
          from { transform: translateY(-100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .visual-pandan-noodles {
          position: absolute;
          bottom: 20px;
          left: 40px;
          right: 40px;
          height: 35px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          justify-content: center;
          z-index: 10;
        }
        .visual-pandan-noodles span {
          width: 40px;
          height: 8px;
          background: #3eb85d;
          border-radius: 10px;
          display: inline-block;
          transform: rotate(5deg);
        }
        .visual-pandan-noodles span:nth-child(even) {
          transform: rotate(-10deg);
          background: #4cc76c;
        }
        
        .visual-beans {
          position: absolute;
          bottom: 15px;
          left: 80px;
          right: 80px;
          height: 20px;
          display: flex;
          gap: 6px;
          justify-content: center;
          z-index: 12;
        }
        .visual-beans span {
          width: 14px;
          height: 10px;
          background: #7a2828;
          border-radius: 50%;
          display: inline-block;
        }

        .visual-pulut {
          position: absolute;
          bottom: 25px;
          left: 100px;
          width: 50px;
          height: 25px;
          background: #eae3d2;
          border-radius: 20px;
          z-index: 11;
          box-shadow: inset 2px 2px 5px rgba(0,0,0,0.05);
        }
        
        .visual-ice {
          position: absolute;
          bottom: 45px;
          left: 60px;
          right: 60px;
          height: 60px;
          z-index: 8;
        }
        .ice-mound {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #e2f1f6 100%);
          border-radius: 90px 90px 0 0;
          box-shadow: 0 -5px 15px rgba(255,255,255,0.8);
        }
        
        .visual-coconut-milk {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 115px;
          background: rgba(255, 255, 255, 0.65);
          z-index: 7;
          border-radius: 0 0 160px 160px;
          animation: milkFill 1.2s ease-out forwards;
        }
        @keyframes milkFill {
          from { height: 0; }
          to { height: 115px; }
        }

        .visual-gula-melaka {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 115px;
          background: linear-gradient(to top, rgba(93, 40, 5, 0.45) 20%, rgba(184, 98, 9, 0.25) 70%, transparent 100%);
          z-index: 9;
          border-radius: 0 0 160px 160px;
          animation: syrupPour 1.5s ease-out forwards;
        }
        @keyframes syrupPour {
          from { height: 0; opacity: 0; }
          to { height: 115px; opacity: 1; }
        }

        .bowl-status {
          min-height: 50px;
          text-align: center;
        }
        .status-text {
          font-weight: 500;
          color: var(--text-muted);
        }
        .success-text {
          color: var(--primary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          background: var(--primary-glow);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          border: 1px solid var(--primary-light);
          animation: pulseGlow 2s infinite;
        }

        /* Media Queries for Home */
        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 6rem 4% 3rem 4%;
            gap: 3rem;
          }
          .hero-content h1 {
            font-size: 3.5rem;
          }
          .hero-actions {
            justify-content: center;
          }
          .visit-today-content { flex-direction: column; align-items: flex-start; }
          .visit-today-details { width: 100%; }
          .hero-floating-card {
            left: 20px;
          }
          .ingredients-grid {
            grid-template-columns: 1fr;
          }
          .heritage-intro-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .bowl-builder-container {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }
        @media (max-width: 640px) {
          .hero-actions { gap: 0.75rem; }
          .hero-actions .btn-primary, .hero-actions .btn-secondary { justify-content: center; width: 100%; }
          .visit-today-strip { padding: 0 4% 2.5rem; }
          .visit-today-content { padding: 1.25rem; }
          .visit-today-details { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
