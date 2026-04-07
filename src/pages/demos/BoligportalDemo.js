import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './BoligportalDemo.css';

function BoligportalDemo() {
  const [activeFilter, setActiveFilter] = useState('alle');
  const [savedListings, setSavedListings] = useState([]);
  const [showListing, setShowListing] = useState(null);
  const [showSaved, setShowSaved] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 25000]);
  const [sizeRange, setSizeRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('newest');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    moveDate: ''
  });
  const [showLogin, setShowLogin] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  const listings = [
    {
      id: 1,
      type: 'lejlighed',
      title: '3-værelses lejlighed med altan',
      address: 'Vesterbrogade 142, 1620 København V',
      price: 12500,
      size: 85,
      rooms: 3,
      floor: '3. sal',
      available: '1. maj 2026',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
      ],
      features: ['Altan', 'Parkering', 'Vaskeri'],
      description: 'Lys og velholdt lejlighed med sydvendt altan. Tæt på offentlig transport og indkøb.'
    },
    {
      id: 2,
      type: 'værelse',
      title: 'Stort værelse i delelejlighed',
      address: 'Nørrebrogade 88, 2200 København N',
      price: 5500,
      size: 18,
      rooms: 1,
      floor: '2. sal',
      available: 'Nu',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop'
      ],
      features: ['Møbleret', 'Internet inkl.'],
      description: 'Hyggeligt værelse i delelejlighed med 2 andre. Fælles køkken og bad.'
    },
    {
      id: 3,
      type: 'hus',
      title: 'Familievilla med have',
      address: 'Skovvej 24, 2880 Bagsværd',
      price: 22000,
      size: 165,
      rooms: 5,
      floor: '2 plan',
      available: '1. juni 2026',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
      ],
      features: ['Have', 'Garage', 'Terrasse', 'Kælder'],
      description: 'Charmerende villa med stor have og garage. Roligt familiekvarter tæt på skov og skole.'
    },
    {
      id: 4,
      type: 'lejlighed',
      title: '2-værelses i Frederiksberg',
      address: 'Godthåbsvej 56, 2000 Frederiksberg',
      price: 9800,
      size: 62,
      rooms: 2,
      floor: '1. sal',
      available: '15. april 2026',
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop'
      ],
      features: ['Altan', 'Nyistandsat'],
      description: 'Nyistandsat 2-værelses med moderne køkken og bad. 5 min gang til metro.'
    },
    {
      id: 5,
      type: 'lejlighed',
      title: 'Penthouse med tagterrasse',
      address: 'Islands Brygge 43, 2300 København S',
      price: 18500,
      size: 110,
      rooms: 4,
      floor: '6. sal',
      available: '1. august 2026',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
      ],
      features: ['Tagterrasse', 'Udsigt', 'Parkering', 'Elevator'],
      description: 'Eksklusiv penthouse med 40m² tagterrasse og panoramaudsigt over havnen.'
    },
    {
      id: 6,
      type: 'værelse',
      title: 'Studieværelse nær DTU',
      address: 'Lundtoftevej 16, 2800 Kgs. Lyngby',
      price: 4200,
      size: 14,
      rooms: 1,
      floor: 'Stuen',
      available: 'Nu',
      images: [
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop'
      ],
      features: ['Møbleret', 'Internet inkl.', 'Alle forbrugsudgifter inkl.'],
      description: 'Perfekt til studerende. 10 min cykeltur til DTU campus.'
    }
  ];

  const filterTypes = [
    { id: 'alle', name: 'Alle boliger' },
    { id: 'lejlighed', name: 'Lejligheder' },
    { id: 'værelse', name: 'Værelser' },
    { id: 'hus', name: 'Huse' }
  ];

  const filteredListings = useMemo(() => {
    let results = listings.filter(listing => {
      const matchesType = activeFilter === 'alle' || listing.type === activeFilter;
      const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1];
      const matchesSize = listing.size >= sizeRange[0] && listing.size <= sizeRange[1];
      const matchesSearch = listing.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           listing.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesPrice && matchesSize && matchesSearch;
    });

    // Sort results
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'size':
        results.sort((a, b) => b.size - a.size);
        break;
      default: // newest
        results.sort((a, b) => b.id - a.id);
    }

    return results;
  }, [activeFilter, priceRange, sizeRange, searchQuery, sortBy]);

  const toggleSaved = (id) => {
    if (savedListings.includes(id)) {
      setSavedListings(savedListings.filter(listingId => listingId !== id));
    } else {
      setSavedListings([...savedListings, id]);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('da-DK').format(price);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setShowContact(false);
      setContactSent(false);
      setContactForm({ name: '', email: '', phone: '', message: '', moveDate: '' });
    }, 2500);
  };

  const getSavedListingDetails = () => {
    return listings.filter(l => savedListings.includes(l.id));
  };

  return (
    <div className="bolig-demo">
      {/* Back Button */}
      <button onClick={() => window.close()} className="demo-back-btn bolig-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Luk demo
      </button>

      {/* Header */}
      <header className="bolig-header">
        <div className="bolig-container">
          <div className="header-content">
            <div className="bolig-logo">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <span>BoligFinder</span>
            </div>

            <nav className="header-nav">
              <button className="active" onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}>Find bolig</button>
              <button onClick={() => document.getElementById('udlej')?.scrollIntoView({ behavior: 'smooth' })}>Udlej bolig</button>
              <button onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}>Boligguide</button>
              <button onClick={() => document.getElementById('om')?.scrollIntoView({ behavior: 'smooth' })}>Om os</button>
            </nav>

            <div className="header-actions">
              <button className="saved-btn" onClick={() => setShowSaved(true)}>
                <svg viewBox="0 0 24 24" fill={savedListings.length > 0 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                Gemte ({savedListings.length})
              </button>
              <button className="login-btn" onClick={() => setShowLogin(true)}>Log ind</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Search */}
      <section className="bolig-hero">
        <div className="hero-bg"></div>
        <div className="bolig-container">
          <div className="hero-content">
            <h1>Find dit næste hjem</h1>
            <p>Søg blandt tusindvis af boliger til leje i hele Danmark</p>

            <div className="search-box">
              <div className="search-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Søg på adresse, by eller postnummer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              </div>
              <button
                className="search-btn"
                onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Søg boliger
              </button>
            </div>

            <div className="quick-stats">
              <div className="stat">
                <strong>2.847</strong>
                <span>Aktive boliger</span>
              </div>
              <div className="stat">
                <strong>156</strong>
                <span>Nye i dag</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>Verificerede</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section className="listings-section" id="search">
        <div className="bolig-container">
          <div className="listings-header">
            <div className="filter-tabs">
              {filterTypes.map(type => (
                <button
                  key={type.id}
                  className={activeFilter === type.id ? 'active' : ''}
                  onClick={() => setActiveFilter(type.id)}
                >
                  {type.name}
                </button>
              ))}
            </div>

            <div className="filter-controls">
              <div className="price-filter">
                <label>Max pris: {formatPrice(priceRange[1])} kr/md</label>
                <input
                  type="range"
                  min="0"
                  max="25000"
                  step="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                />
              </div>
              <div className="size-filter">
                <label>Min størrelse: {sizeRange[0]} m²</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="5"
                  value={sizeRange[0]}
                  onChange={(e) => setSizeRange([parseInt(e.target.value), 200])}
                />
              </div>
              <div className="sort-select">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="newest">Nyeste først</option>
                  <option value="price-low">Laveste pris</option>
                  <option value="price-high">Højeste pris</option>
                  <option value="size">Størrelse</option>
                </select>
              </div>
            </div>
          </div>

          <div className="listings-count">
            <span>{filteredListings.length} boliger fundet</span>
          </div>

          <div className="listings-grid">
            {filteredListings.map(listing => (
              <article key={listing.id} className="listing-card" onClick={() => setShowListing(listing)}>
                <div className="listing-image">
                  <img src={listing.images[0]} alt={listing.title} />
                  <span className={`listing-type ${listing.type}`}>{listing.type}</span>
                  <button
                    className={`save-listing ${savedListings.includes(listing.id) ? 'saved' : ''}`}
                    onClick={(e) => { e.stopPropagation(); toggleSaved(listing.id); }}
                  >
                    <svg viewBox="0 0 24 24" fill={savedListings.includes(listing.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                  {listing.available === 'Nu' && <span className="available-badge">Ledig nu</span>}
                </div>
                <div className="listing-content">
                  <div className="listing-price">
                    <strong>{formatPrice(listing.price)} kr</strong>
                    <span>/ måned</span>
                  </div>
                  <h3>{listing.title}</h3>
                  <p className="listing-address">{listing.address}</p>
                  <div className="listing-specs">
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      </svg>
                      {listing.size} m²
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                      {listing.rooms} vær.
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                      {listing.floor}
                    </span>
                  </div>
                  <div className="listing-features">
                    {listing.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="no-results">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <h3>Ingen boliger fundet</h3>
              <p>Prøv at justere dine søgekriterier</p>
            </div>
          )}
        </div>
      </section>

      {/* Udlej Section */}
      <section className="udlej-section" id="udlej">
        <div className="bolig-container">
          <div className="udlej-content">
            <div className="udlej-text">
              <h2>Udlej din bolig</h2>
              <p>Nå tusindvis af potentielle lejere med BoligFinder. Nem oprettelse, sikker betaling og professionel support.</p>
              <ul className="udlej-benefits">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Gratis oprettelse af annonce
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Verificerede lejere
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Sikker lejekontrakt
                </li>
              </ul>
              <button className="udlej-btn">Opret annonce gratis</button>
            </div>
            <div className="udlej-image">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop" alt="Udlej bolig" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="guide">
        <div className="bolig-container">
          <div className="section-header">
            <h2>Hvorfor vælge BoligFinder?</h2>
            <p>Vi gør boligsøgningen nemmere og mere sikker</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Verificerede annoncer</h3>
              <p>Alle boliger gennemgås og verificeres før de vises på platformen.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Sikker kommunikation</h3>
              <p>Kommuniker sikkert med udlejere direkte gennem platformen.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Daglige opdateringer</h3>
              <p>Nye boliger tilføjes løbende - få besked når din drømmebolig dukker op.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <h3>Nem betaling</h3>
              <p>Betal depositum og leje sikkert gennem vores betalingsløsning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bolig-footer" id="om">
        <div className="bolig-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="bolig-logo">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                <span>BoligFinder</span>
              </div>
              <p>Danmarks mest brugervenlige boligportal. Vi hjælper dig med at finde dit næste hjem.</p>
            </div>
            <div className="footer-col">
              <h4>For lejere</h4>
              <ul>
                <li><a href="#search">Søg bolig</a></li>
                <li><a href="#guide">Lejerguide</a></li>
                <li><a href="#tips">Tips til ansøgning</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>For udlejere</h4>
              <ul>
                <li><a href="#opret">Opret annonce</a></li>
                <li><a href="#priser">Priser</a></li>
                <li><a href="#tips-udlejer">Udlejerguide</a></li>
                <li><a href="#love">Lejeloven</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kontakt</h4>
              <ul>
                <li><a href="#kundeservice">Kundeservice</a></li>
                <li><a href="#mail">support@boligfinder.dk</a></li>
                <li><a href="#tel">+45 70 20 30 40</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 BoligFinder. Alle rettigheder forbeholdes.</p>
            <p className="demo-credit">Demo bygget af <Link to="/cases">Nordic Digital</Link></p>
          </div>
        </div>
      </footer>

      {/* Saved Listings Sidebar */}
      {showSaved && (
        <>
          <div className="sidebar-overlay" onClick={() => setShowSaved(false)}></div>
          <div className="saved-sidebar">
            <div className="sidebar-header">
              <h3>Gemte boliger</h3>
              <button className="close-sidebar" onClick={() => setShowSaved(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="sidebar-content">
              {getSavedListingDetails().length === 0 ? (
                <div className="empty-saved">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <p>Ingen gemte boliger endnu</p>
                  <span>Klik på hjertet for at gemme boliger</span>
                </div>
              ) : (
                <div className="saved-list">
                  {getSavedListingDetails().map(listing => (
                    <div key={listing.id} className="saved-item" onClick={() => { setShowSaved(false); setShowListing(listing); }}>
                      <img src={listing.images[0]} alt={listing.title} />
                      <div className="saved-item-info">
                        <h4>{listing.title}</h4>
                        <p>{listing.address}</p>
                        <span className="saved-price">{formatPrice(listing.price)} kr/md</span>
                      </div>
                      <button className="remove-saved" onClick={(e) => { e.stopPropagation(); toggleSaved(listing.id); }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {getSavedListingDetails().length > 1 && (
              <div className="sidebar-footer">
                <button className="compare-btn" onClick={() => { setShowSaved(false); setShowCompare(true); }}>
                  Sammenlign boliger ({getSavedListingDetails().length})
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Contact Form Modal */}
      {showContact && (
        <>
          <div className="modal-overlay" onClick={() => { setShowContact(false); setContactSent(false); }}></div>
          <div className="contact-modal">
            <button className="close-modal" onClick={() => { setShowContact(false); setContactSent(false); }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {contactSent ? (
              <div className="contact-success">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Besked sendt!</h3>
                <p>Udlejer vil kontakte dig snarest muligt.</p>
              </div>
            ) : (
              <>
                <div className="contact-header">
                  <h3>Kontakt udlejer</h3>
                  <p>Vedr. {showContact.title}</p>
                </div>
                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Fulde navn *</label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Dit navn"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="din@email.dk"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Telefon</label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        placeholder="+45 12 34 56 78"
                      />
                    </div>
                    <div className="form-group">
                      <label>Ønsket indflytningsdato</label>
                      <input
                        type="date"
                        value={contactForm.moveDate}
                        onChange={(e) => setContactForm({...contactForm, moveDate: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Besked *</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Skriv din besked til udlejeren..."
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="submit-btn">Send besked</button>
                    <button type="button" className="cancel-btn" onClick={() => setShowContact(false)}>Annuller</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </>
      )}

      {/* Listing Detail Modal */}
      {showListing && (
        <>
          <div className="modal-overlay" onClick={() => setShowListing(null)}></div>
          <div className="listing-modal">
            <button className="close-modal" onClick={() => setShowListing(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="modal-gallery">
              {showListing.images.map((img, i) => (
                <img key={i} src={img} alt={`${showListing.title} - billede ${i + 1}`} />
              ))}
            </div>

            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <span className={`listing-type ${showListing.type}`}>{showListing.type}</span>
                  <h2>{showListing.title}</h2>
                  <p className="modal-address">{showListing.address}</p>
                </div>
                <div className="modal-price">
                  <strong>{formatPrice(showListing.price)} kr</strong>
                  <span>/ måned</span>
                </div>
              </div>

              <div className="modal-specs">
                <div className="spec">
                  <span className="spec-label">Størrelse</span>
                  <span className="spec-value">{showListing.size} m²</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Værelser</span>
                  <span className="spec-value">{showListing.rooms}</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Etage</span>
                  <span className="spec-value">{showListing.floor}</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Ledig fra</span>
                  <span className="spec-value">{showListing.available}</span>
                </div>
              </div>

              <div className="modal-description">
                <h3>Beskrivelse</h3>
                <p>{showListing.description}</p>
              </div>

              <div className="modal-features">
                <h3>Faciliteter</h3>
                <div className="features-list">
                  {showListing.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-primary" onClick={() => setShowContact(showListing)}>Kontakt udlejer</button>
                <button
                  className={`btn-secondary ${savedListings.includes(showListing.id) ? 'saved' : ''}`}
                  onClick={() => toggleSaved(showListing.id)}
                >
                  <svg viewBox="0 0 24 24" fill={savedListings.includes(showListing.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  {savedListings.includes(showListing.id) ? 'Gemt' : 'Gem bolig'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Login Modal */}
      {showLogin && (
        <>
          <div className="modal-overlay" onClick={() => setShowLogin(false)}></div>
          <div className="login-modal">
            <button className="close-modal" onClick={() => setShowLogin(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="login-header">
              <h3>Log ind på BoligFinder</h3>
              <p>Log ind for at gemme søgninger og kontakte udlejere</p>
            </div>
            <form className="login-form" onSubmit={(e) => { e.preventDefault(); setShowLogin(false); }}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="din@email.dk" required />
              </div>
              <div className="form-group">
                <label>Adgangskode</label>
                <input type="password" placeholder="••••••••" required />
              </div>
              <button type="submit" className="submit-btn">Log ind</button>
              <p className="login-alt">
                Har du ikke en konto? <button type="button" className="link-btn">Opret konto</button>
              </p>
            </form>
          </div>
        </>
      )}

      {/* Compare Modal */}
      {showCompare && (
        <>
          <div className="modal-overlay" onClick={() => setShowCompare(false)}></div>
          <div className="compare-modal">
            <button className="close-modal" onClick={() => setShowCompare(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <h3>Sammenlign boliger</h3>
            <div className="compare-grid">
              {getSavedListingDetails().map(listing => (
                <div key={listing.id} className="compare-card">
                  <img src={listing.images[0]} alt={listing.title} />
                  <h4>{listing.title}</h4>
                  <div className="compare-specs">
                    <div className="compare-row">
                      <span>Pris</span>
                      <strong>{formatPrice(listing.price)} kr/md</strong>
                    </div>
                    <div className="compare-row">
                      <span>Størrelse</span>
                      <strong>{listing.size} m²</strong>
                    </div>
                    <div className="compare-row">
                      <span>Værelser</span>
                      <strong>{listing.rooms}</strong>
                    </div>
                    <div className="compare-row">
                      <span>Etage</span>
                      <strong>{listing.floor}</strong>
                    </div>
                    <div className="compare-row">
                      <span>Ledig</span>
                      <strong>{listing.available}</strong>
                    </div>
                  </div>
                  <button className="btn-primary" onClick={() => { setShowCompare(false); setShowContact(listing); }}>
                    Kontakt udlejer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BoligportalDemo;
