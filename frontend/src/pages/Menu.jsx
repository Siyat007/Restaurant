import React, { useState, useEffect } from 'react';
import { Star, Leaf } from 'lucide-react';

const FALLBACK_MENU = [
  {
    id: 1,
    name: 'Biasa',
    description: 'Classic bowl of Ansari Famous Cendol.',
    price: 2.00,
    category: 'cendol',
    tag: 'Classic',
    badge: 'Original'
  },
  {
    id: 2,
    name: 'Berkacang',
    description: 'Cendol served with red beans.',
    price: 2.20,
    category: 'cendol',
    tag: 'Popular'
  },
  {
    id: 3,
    name: 'Berjagung',
    description: 'Cendol served with sweet corn.',
    price: 2.20,
    category: 'cendol'
  },
  {
    id: 4,
    name: 'Berpulut',
    description: 'Cendol served with glutinous rice.',
    price: 2.60,
    category: 'cendol',
    tag: 'Popular'
  },
  {
    id: 5,
    name: 'Kacang & Jagung',
    description: 'Cendol served with red beans and sweet corn.',
    price: 2.40,
    category: 'cendol'
  },
  {
    id: 6,
    name: 'Kacang & Pulut',
    description: 'Cendol served with red beans and glutinous rice.',
    price: 2.80,
    category: 'cendol'
  },
  {
    id: 7,
    name: 'Kacang & Pulut & Jagung (SP)',
    description: 'Special cendol with red beans, glutinous rice, and sweet corn.',
    price: 3.00,
    category: 'cendol',
    badge: 'Special'
  },
  {
    id: 8,
    name: 'Take Away Cendol Kecil',
    description: 'Small packed cendol for take away.',
    price: 2.50,
    category: 'takeaway'
  },
  {
    id: 9,
    name: 'Take Away Cendol Berkacang',
    description: 'Packed cendol with red beans for take away.',
    price: 2.70,
    category: 'takeaway'
  },
  {
    id: 10,
    name: 'Take Away Cendol Besar',
    description: 'Large packed cendol for take away.',
    price: 4.40,
    category: 'takeaway'
  },
  {
    id: 11,
    name: 'Take Away Cendol Besar Berkacang',
    description: 'Large packed cendol with red beans for take away.',
    price: 4.70,
    category: 'takeaway'
  },
  {
    id: 12,
    name: 'Pasembor',
    description: 'Pasembor served packed or plated.',
    price: 4.70,
    category: 'savory',
    tag: 'Local Favorite'
  }
];

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/menu')
      .then((res) => {
        if (!res.ok) throw new Error('API server down');
        return res.json();
      })
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(() => {
        // Fall back to local dataset if server is not running
        setMenuItems(FALLBACK_MENU);
        setLoading(false);
        setError(true);
      });
  }, []);

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-container">
      {/* Menu Header */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <span className="section-subtitle">Freshly Served Daily</span>
          <h1>Our Menu</h1>
          <p>
            Choose a classic bowl, add your favourite topping, or take it away. Traditional cendol and Pasembor, served simply in Taiping.
          </p>
        </div>
      </section>

      {/* Menu Navigation & Content */}
      <section className="menu-section">
        {/* Category Toggles */}
        <div className="category-filters">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Items
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'cendol' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cendol')}
          >
            Iced Cendol
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'savory' ? 'active' : ''}`}
            onClick={() => setActiveCategory('savory')}
          >
            Savory Pasembur
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'takeaway' ? 'active' : ''}`}
            onClick={() => setActiveCategory('takeaway')}
          >
            Take Away
          </button>
        </div>

        {error && (
          <div className="api-notice">
            <span className="notice-badge">Offline Mode</span>
            <p>Showing the stall menu while the menu service is unavailable.</p>
          </div>
        )}

        {/* Menu Grid */}
        <div className="menu-grid">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="menu-card glass-card loading-card">
                <div className="loading-line title"></div>
                <div className="loading-line desc"></div>
                <div className="loading-line price"></div>
              </div>
            ))
          ) : (
            filteredItems.map((item) => (
              <div key={item.id} className="menu-card glass-card">
                {item.badge && <span className="menu-card-badge">{item.badge}</span>}
                <div className="menu-card-header">
                  <h3>{item.name}</h3>
                  <span className="menu-card-price">RM {item.price.toFixed(2)}</span>
                </div>
                {item.tag && <span className="menu-card-tag"><Star size={12} fill="currentColor" /> {item.tag}</span>}
                <p className="menu-card-desc">{item.description}</p>
                <div className="menu-card-footer">
                  <span className="ingredient-indicator"><Leaf size={14} /> Traditional Preparation</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <style>{`
        .menu-hero {
          background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 100%);
          color: var(--text-light);
          padding: 8rem 8% 6rem 8%;
          text-align: center;
        }
        .menu-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .menu-hero h1 {
          font-family: var(--font-serif);
          font-size: 4rem;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .menu-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Filters */
        .menu-section {
          padding: 5rem 8%;
        }
        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.8rem 1.8rem;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-dark);
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }
        .filter-btn:hover {
          background: #fff;
          border-color: var(--primary-light);
          transform: translateY(-2px);
        }
        .filter-btn.active {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
          box-shadow: 0 4px 15px hsla(142, 72%, 26%, 0.2);
        }

        /* API Notice */
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

        /* Menu Grid */
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }
        .menu-card {
          padding: 2.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: var(--transition-smooth);
        }
        .menu-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-light);
        }
        .menu-card-badge {
          position: absolute;
          top: -12px;
          right: 25px;
          background: var(--primary);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.8rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .menu-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .menu-card-header h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--amber);
          line-height: 1.2;
        }
        .menu-card-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-light);
          flex-shrink: 0;
        }
        .menu-card-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--amber-light);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
        .menu-card-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .menu-card-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .ingredient-indicator {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 500;
        }
        .ingredient-indicator svg {
          color: var(--primary-light);
        }

        /* Loading Skeleton */
        .loading-card {
          min-height: 200px;
          border-style: dashed;
        }
        .loading-line {
          background: rgba(0,0,0,0.05);
          height: 15px;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .loading-line.title { width: 60%; height: 25px; }
        .loading-line.desc { width: 90%; height: 50px; }
        .loading-line.price { width: 30%; }

        /* Responsive */
        @media (max-width: 900px) {
          .menu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
