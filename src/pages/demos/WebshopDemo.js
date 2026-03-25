import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './WebshopDemo.css';

function WebshopDemo() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showQuickView, setShowQuickView] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(0); // 0 = cart, 1 = shipping, 2 = payment, 3 = confirmation
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [selectedColor, setSelectedColor] = useState({});
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    country: 'Danmark'
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const products = [
    {
      id: 1,
      name: 'Nordisk Lænestol',
      category: 'stole',
      price: 4995,
      originalPrice: 5995,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=600&fit=crop'
      ],
      colors: ['Grå', 'Beige', 'Grøn'],
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller',
      description: 'Elegant lænestol i skandinavisk design med blødt stofbetræk og solide egetræsben. Perfekt til stuen eller læsehjørnet.',
      material: 'Egetræ, Bomuld',
      dimensions: 'H: 85cm, B: 75cm, D: 80cm'
    },
    {
      id: 2,
      name: 'Minimalist Sofa',
      category: 'sofaer',
      price: 12995,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=600&fit=crop'
      ],
      colors: ['Sort', 'Hvid', 'Blå'],
      rating: 4.9,
      reviews: 87,
      badge: null,
      description: 'Luksuriøs 3-personers sofa med dybtsiddende komfort og tidløst design. Fremstillet med omtanke for både æstetik og holdbarhed.',
      material: 'Bøgetræ, Uld',
      dimensions: 'H: 75cm, B: 220cm, D: 95cm'
    },
    {
      id: 3,
      name: 'Egetræs Spisebord',
      category: 'borde',
      price: 8495,
      originalPrice: 9995,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=600&h=600&fit=crop'
      ],
      colors: ['Natur', 'Mørk eg'],
      rating: 4.7,
      reviews: 56,
      badge: 'Tilbud',
      description: 'Massivt spisebord i dansk egetræ med plads til 6-8 personer. Håndlavet med synlige samlinger og naturlig olie-finish.',
      material: '100% Massivt Egetræ',
      dimensions: 'H: 75cm, B: 200cm, D: 100cm'
    },
    {
      id: 4,
      name: 'Skandinavisk Lampe',
      category: 'lamper',
      price: 1295,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop'
      ],
      colors: ['Hvid', 'Sort', 'Messing'],
      rating: 4.6,
      reviews: 203,
      badge: null,
      description: 'Elegant bordlampe med afdæmpet lys og minimalistisk udtryk. Inkl. LED-pære med varm farvetemperatur.',
      material: 'Metal, Glas',
      dimensions: 'H: 45cm, Ø: 20cm'
    },
    {
      id: 5,
      name: 'Fløjlsstol',
      category: 'stole',
      price: 2995,
      originalPrice: 3495,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop'
      ],
      colors: ['Rosa', 'Grøn', 'Blå'],
      rating: 4.8,
      reviews: 92,
      badge: 'Ny',
      description: 'Moderne spisestuestol beklædt med blødt fløjl. Ergonomisk sæde og elegant metalramme i mat sort.',
      material: 'Fløjl, Metal',
      dimensions: 'H: 82cm, B: 55cm, D: 58cm'
    },
    {
      id: 6,
      name: 'Marmor Sofabord',
      category: 'borde',
      price: 5495,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&h=600&fit=crop'
      ],
      colors: ['Hvid marmor', 'Sort marmor'],
      rating: 4.9,
      reviews: 41,
      badge: null,
      description: 'Eksklusivt sofabord med ægte marmorbordplade og slank metalramme. Hvert bord er unikt grundet marmorets naturlige variation.',
      material: 'Marmor, Rustfrit stål',
      dimensions: 'H: 40cm, Ø: 80cm'
    },
    {
      id: 7,
      name: 'Moderne Reol',
      category: 'opbevaring',
      price: 3995,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&h=600&fit=crop'
      ],
      colors: ['Hvid', 'Sort', 'Eg'],
      rating: 4.5,
      reviews: 78,
      badge: null,
      description: 'Funktionel vægreol med asymmetrisk design. Ideel til bøger, planter og dekorative genstande.',
      material: 'MDF, Stål',
      dimensions: 'H: 180cm, B: 90cm, D: 30cm'
    },
    {
      id: 8,
      name: 'Gulvlampe Bue',
      category: 'lamper',
      price: 2495,
      originalPrice: 2995,
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop'
      ],
      colors: ['Sort', 'Messing'],
      rating: 4.7,
      reviews: 156,
      badge: 'Tilbud',
      description: 'Ikonisk buelampe med justerbar arm og stor skærm. Skaber perfekt stemningslys over sofa eller læsekrog.',
      material: 'Metal, Stof',
      dimensions: 'H: 210cm, Arm: 150cm'
    }
  ];

  const categories = [
    { id: 'all', name: 'Alle produkter', icon: 'grid' },
    { id: 'sofaer', name: 'Sofaer', icon: 'sofa' },
    { id: 'stole', name: 'Stole', icon: 'chair' },
    { id: 'borde', name: 'Borde', icon: 'table' },
    { id: 'lamper', name: 'Lamper', icon: 'lamp' },
    { id: 'opbevaring', name: 'Opbevaring', icon: 'storage' }
  ];

  const getCategoryIcon = (iconType) => {
    const icons = {
      grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
      sofa: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 11V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M4 18v2"/><path d="M20 18v2"/></svg>,
      chair: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 11V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><rect x="4" y="11" width="16" height="5" rx="1"/><path d="M6 16v5"/><path d="M18 16v5"/></svg>,
      table: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="4" rx="1"/><path d="M4 11v9"/><path d="M20 11v9"/></svg>,
      lamp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 18v4"/><path d="M5 10a7 7 0 0 1 14 0c0 3-2 5-3 7H8c-1-2-3-4-3-7z"/></svg>,
      storage: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 9v12"/></svg>
    };
    return icons[iconType] || icons.grid;
  };

  const filteredProducts = useMemo(() => {
    let result = activeFilter === 'all'
      ? products
      : products.filter(p => p.category === activeFilter);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeFilter, searchQuery]);

  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    return products
      .filter(p => p.name.toLowerCase().includes(query))
      .slice(0, 5);
  }, [searchQuery]);

  const addToCart = (product, color = null) => {
    const selectedProductColor = color || selectedColor[product.id] || product.colors[0];
    const cartKey = `${product.id}-${selectedProductColor}`;
    const existing = cart.find(item => item.cartKey === cartKey);

    if (existing) {
      setCart(cart.map(item =>
        item.cartKey === cartKey
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, cartKey, selectedColor: selectedProductColor, quantity: 1 }]);
    }
  };

  const removeFromCart = (cartKey) => {
    setCart(cart.filter(item => item.cartKey !== cartKey));
  };

  const updateQuantity = (cartKey, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartKey);
    } else {
      setCart(cart.map(item =>
        item.cartKey === cartKey
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

  const moveWishlistToCart = (product) => {
    addToCart(product);
    setWishlist(wishlist.filter(item => item.id !== product.id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const shippingCost = cartTotal >= 1000 ? 0 : 49;
  const totalWithShipping = cartTotal + shippingCost;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('da-DK').format(price);
  };

  const handleCheckout = () => {
    setCheckoutStep(1);
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setCheckoutStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Generate order number
    setOrderNumber(`NH-${Date.now().toString().slice(-8)}`);
    setOrderComplete(true);
    setCheckoutStep(3);
  };

  const resetCheckout = () => {
    setCheckoutStep(0);
    setOrderComplete(false);
    setCart([]);
    setShowCart(false);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <div className="webshop-demo">
      {/* Back Button */}
      <Link to="/cases" className="demo-back-btn webshop-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Tilbage til Nordic Digital
      </Link>

      {/* Header */}
      <header className="webshop-header">
        <div className="header-top">
          <div className="webshop-container">
            <span className="shipping-notice">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shipping-icon">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              Gratis fragt ved køb over 1.000 kr
            </span>
            <div className="header-links">
              <a href="#kundeservice">Kundeservice</a>
              <a href="#track">Spor ordre</a>
              <a href="#butikker">Find butik</a>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="webshop-container">
            <div className="header-content">
              <div className="shop-logo">
                <span className="logo-icon">◈</span>
                <span className="logo-text">NordicHome</span>
              </div>

              <div className="search-bar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Søg blandt 500+ produkter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSearchResults(true)}
                  onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                />
                {showSearchResults && searchSuggestions.length > 0 && (
                  <div className="search-dropdown">
                    {searchSuggestions.map(product => (
                      <div
                        key={product.id}
                        className="search-suggestion"
                        onClick={() => {
                          setShowQuickView(product);
                          setSearchQuery('');
                        }}
                      >
                        <img src={product.image} alt={product.name} />
                        <div className="suggestion-info">
                          <span className="suggestion-name">{product.name}</span>
                          <span className="suggestion-price">{formatPrice(product.price)} kr</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="header-actions">
                <button className="icon-btn" onClick={() => setShowWishlist(true)}>
                  <svg viewBox="0 0 24 24" fill={wishlist.length > 0 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span className="btn-label">Ønskeliste</span>
                  {wishlist.length > 0 && <span className="wishlist-badge">{wishlist.length}</span>}
                </button>
                <button className="icon-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span className="btn-label">Konto</span>
                </button>
                <button className="cart-trigger" onClick={() => setShowCart(true)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                  <span className="btn-label">Kurv</span>
                  {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav className="header-nav">
          <div className="webshop-container">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={activeFilter === cat.id ? 'active' : ''}
                onClick={() => { setActiveFilter(cat.id); setSearchQuery(''); }}
              >
                <span className="cat-icon">{getCategoryIcon(cat.icon)}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Banner - Only show on "all" products view without search */}
      {activeFilter === 'all' && !searchQuery && (
        <section className="webshop-hero">
          <div className="webshop-container">
            <div className="hero-content">
              <span className="hero-tag">Ny kollektion 2026</span>
              <h1>Skandinavisk design til dit hjem</h1>
              <p>Tidløse møbler der kombinerer funktion, kvalitet og æstetik. Designet i Danmark, leveret til din dør.</p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => setActiveFilter('all')}>Shop kollektion</button>
                <button className="btn-secondary">Se lookbook</button>
              </div>
              <div className="hero-features">
                <div className="hero-feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="check-icon"><polyline points="20 6 9 17 4 12"/></svg>
                  Gratis fragt over 1.000 kr
                </div>
                <div className="hero-feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="check-icon"><polyline points="20 6 9 17 4 12"/></svg>
                  30 dages returret
                </div>
                <div className="hero-feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="check-icon"><polyline points="20 6 9 17 4 12"/></svg>
                  2 års garanti
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop" alt="Scandinavian interior" />
              <div className="hero-badge">
                <span className="badge-discount">-25%</span>
                <span className="badge-text">På udvalgte varer</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* USP Bar */}
      <section className="usp-bar">
        <div className="webshop-container">
          <div className="usp-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <div>
              <strong>Gratis levering</strong>
              <span>Ved køb over 1.000 kr</span>
            </div>
          </div>
          <div className="usp-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 4 23 10 17 10"/>
              <path d="M21 14a9 9 0 1 1-2.63-6.37L23 10"/>
            </svg>
            <div>
              <strong>30 dages returret</strong>
              <span>Fuld refundering</span>
            </div>
          </div>
          <div className="usp-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div>
              <strong>Sikker betaling</strong>
              <span>SSL-krypteret</span>
            </div>
          </div>
          <div className="usp-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <div>
              <strong>Kundeservice</strong>
              <span>Alle hverdage 9-17</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="webshop-container">
          <div className="section-header">
            <h2>
              {searchQuery
                ? `Søgeresultater for "${searchQuery}"`
                : activeFilter === 'all'
                  ? 'Alle produkter'
                  : categories.find(c => c.id === activeFilter)?.name}
            </h2>
            <span className="product-count">{filteredProducts.length} produkter</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <h3>Ingen produkter fundet</h3>
              <p>Prøv at søge efter noget andet eller se alle produkter.</p>
              <button className="btn-primary" onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}>
                Se alle produkter
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.badge && (
                      <span className={`product-badge ${product.badge.toLowerCase()}`}>
                        {product.badge}
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="discount-percent">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    )}
                    <div className="product-actions">
                      <button
                        className={`action-btn wishlist ${isInWishlist(product.id) ? 'active' : ''}`}
                        onClick={() => toggleWishlist(product)}
                      >
                        <svg viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                      </button>
                      <button className="action-btn quickview" onClick={() => setShowQuickView(product)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                    </div>
                    <button className="quick-add-btn" onClick={() => addToCart(product)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                      Tilføj til kurv
                    </button>
                  </div>
                  <div className="product-info">
                    <div className="product-rating">
                      <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5-Math.floor(product.rating))}</span>
                      <span className="rating-number">{product.rating}</span>
                      <span className="review-count">({product.reviews})</span>
                    </div>
                    <h3 onClick={() => setShowQuickView(product)}>{product.name}</h3>
                    <div className="color-options">
                      {product.colors.map((color, i) => (
                        <span
                          key={i}
                          className={`color-dot ${selectedColor[product.id] === color ? 'selected' : ''}`}
                          title={color}
                          onClick={() => setSelectedColor({ ...selectedColor, [product.id]: color })}
                        ></span>
                      ))}
                      <span className="color-count">+{product.colors.length} farver</span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">{formatPrice(product.price)} kr</span>
                      {product.originalPrice && (
                        <span className="original-price">{formatPrice(product.originalPrice)} kr</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="webshop-container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3>Bæredygtigt</h3>
              <p>FSC-certificeret træ og genanvendelige materialer i alle vores møbler.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>Nem montering</h3>
              <p>Klar instruktion og alt værktøj medfølger. De fleste møbler samles på under 30 min.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <h3>Kvalitetsgaranti</h3>
              <p>2 års garanti på alle produkter. Vi står bag vores håndværk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="webshop-container">
          {newsletterSubscribed ? (
            <div className="newsletter-success">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h2>Tak for din tilmelding!</h2>
              <p>Du vil snart modtage en velkomstmail med din rabatkode på 10%.</p>
            </div>
          ) : (
            <div className="newsletter-content">
              <h2>Få 10% rabat på din første ordre</h2>
              <p>Tilmeld dig vores nyhedsbrev og modtag eksklusive tilbud, inspiration og 10% rabat.</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Din e-mail adresse"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit">Tilmeld</button>
              </form>
              <p className="newsletter-note">Ved tilmelding accepterer du vores privatlivspolitik. Du kan til enhver tid afmelde dig.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="webshop-footer">
        <div className="webshop-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="shop-logo">
                <span className="logo-icon">◈</span>
                <span className="logo-text">NordicHome</span>
              </div>
              <p>Tidløst skandinavisk design til moderne hjem. Kvalitetsmøbler siden 2015.</p>
              <div className="social-icons">
                <a href="#facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#pinterest" aria-label="Pinterest">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a href="#sofaer" onClick={() => setActiveFilter('sofaer')}>Sofaer</a></li>
                <li><a href="#stole" onClick={() => setActiveFilter('stole')}>Stole</a></li>
                <li><a href="#borde" onClick={() => setActiveFilter('borde')}>Borde</a></li>
                <li><a href="#lamper" onClick={() => setActiveFilter('lamper')}>Lamper</a></li>
                <li><a href="#tilbud">Tilbud</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kundeservice</h4>
              <ul>
                <li><a href="#kontakt">Kontakt os</a></li>
                <li><a href="#levering">Levering</a></li>
                <li><a href="#retur">Returret</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#stoerrelse">Størrelseguide</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Om os</h4>
              <ul>
                <li><a href="#historie">Vores historie</a></li>
                <li><a href="#baeredygtighed">Bæredygtighed</a></li>
                <li><a href="#showroom">Showrooms</a></li>
                <li><a href="#karriere">Karriere</a></li>
                <li><a href="#presse">Presse</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 NordicHome. Alle rettigheder forbeholdes.</p>
            <div className="payment-icons">
              <span className="payment-visa">Visa</span>
              <span className="payment-mc">Mastercard</span>
              <span className="payment-mp">MobilePay</span>
              <span className="payment-klarna">Klarna</span>
            </div>
            <p className="demo-credit">Demo bygget af <Link to="/cases">Nordic Digital</Link></p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${showCart ? 'open' : ''}`}>
        {checkoutStep === 0 && (
          <>
            <div className="cart-header">
              <h3>Din indkøbskurv ({cartCount})</h3>
              <button className="close-cart" onClick={() => setShowCart(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="cart-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <p>Din kurv er tom</p>
                <button className="btn-primary" onClick={() => setShowCart(false)}>Fortsæt shopping</button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.cartKey} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <span className="cart-item-color">{item.selectedColor}</span>
                        <span className="cart-item-price">{formatPrice(item.price)} kr</span>
                        <div className="cart-item-quantity">
                          <button onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}>+</button>
                        </div>
                      </div>
                      <button className="remove-item" onClick={() => removeFromCart(item.cartKey)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-summary">
                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>{formatPrice(cartTotal)} kr</span>
                    </div>
                    <div className="summary-row">
                      <span>Fragt</span>
                      <span>{shippingCost === 0 ? 'Gratis' : `${shippingCost} kr`}</span>
                    </div>
                    {cartTotal < 1000 && (
                      <div className="free-shipping-note">
                        Køb for {formatPrice(1000 - cartTotal)} kr mere og få gratis fragt!
                      </div>
                    )}
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>{formatPrice(totalWithShipping)} kr</span>
                    </div>
                  </div>
                  <button className="checkout-btn" onClick={handleCheckout}>Gå til kassen</button>
                  <button className="continue-btn" onClick={() => setShowCart(false)}>Fortsæt shopping</button>
                </div>
              </>
            )}
          </>
        )}

        {checkoutStep === 1 && (
          <div className="checkout-step">
            <div className="cart-header">
              <button className="back-btn" onClick={() => setCheckoutStep(0)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <h3>Leveringsoplysninger</h3>
              <button className="close-cart" onClick={() => { setShowCart(false); setCheckoutStep(0); }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <form className="checkout-form" onSubmit={handleShippingSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Fornavn *</label>
                  <input
                    type="text"
                    value={shippingInfo.firstName}
                    onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Efternavn *</label>
                  <input
                    type="text"
                    value={shippingInfo.lastName}
                    onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>E-mail *</label>
                <input
                  type="email"
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefon *</label>
                <input
                  type="tel"
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Adresse *</label>
                <input
                  type="text"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Postnummer *</label>
                  <input
                    type="text"
                    value={shippingInfo.postalCode}
                    onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>By *</label>
                  <input
                    type="text"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="checkout-btn">Fortsæt til betaling</button>
            </form>
          </div>
        )}

        {checkoutStep === 2 && (
          <div className="checkout-step">
            <div className="cart-header">
              <button className="back-btn" onClick={() => setCheckoutStep(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <h3>Betaling</h3>
              <button className="close-cart" onClick={() => { setShowCart(false); setCheckoutStep(0); }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <form className="checkout-form" onSubmit={handlePaymentSubmit}>
              <div className="payment-methods">
                <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="payment-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  </span>
                  <span className="payment-label">Kort</span>
                </label>
                <label className={`payment-option ${paymentMethod === 'mobilepay' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="mobilepay"
                    checked={paymentMethod === 'mobilepay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="payment-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  </span>
                  <span className="payment-label">MobilePay</span>
                </label>
                <label className={`payment-option ${paymentMethod === 'klarna' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="klarna"
                    checked={paymentMethod === 'klarna'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="payment-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8"/>
                      <path d="M12 8v8"/>
                    </svg>
                  </span>
                  <span className="payment-label">Klarna</span>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="card-details">
                  <div className="form-group">
                    <label>Kortnummer</label>
                    <input type="text" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Udløb</label>
                      <input type="text" placeholder="MM/ÅÅ" required />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input type="text" placeholder="123" required />
                    </div>
                  </div>
                </div>
              )}

              <div className="order-summary-mini">
                <h4>Ordreoversigt</h4>
                {cart.map(item => (
                  <div key={item.cartKey} className="summary-item">
                    <span>{item.quantity}x {item.name}</span>
                    <span>{formatPrice(item.price * item.quantity)} kr</span>
                  </div>
                ))}
                <div className="summary-divider"></div>
                <div className="summary-item">
                  <span>Fragt</span>
                  <span>{shippingCost === 0 ? 'Gratis' : `${shippingCost} kr`}</span>
                </div>
                <div className="summary-item total">
                  <span>Total</span>
                  <span>{formatPrice(totalWithShipping)} kr</span>
                </div>
              </div>

              <button type="submit" className="checkout-btn">Bekræft ordre</button>
            </form>
          </div>
        )}

        {checkoutStep === 3 && orderComplete && (
          <div className="order-confirmation">
            <div className="confirmation-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h2>Tak for din ordre!</h2>
            <p className="order-number">Ordrenummer: {orderNumber}</p>
            <p className="confirmation-text">
              Vi har sendt en bekræftelse til {shippingInfo.email}.
              Du kan forvente levering inden for 2-4 hverdage.
            </p>
            <div className="shipping-summary">
              <h4>Leveres til:</h4>
              <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
              <p>{shippingInfo.address}</p>
              <p>{shippingInfo.postalCode} {shippingInfo.city}</p>
            </div>
            <button className="btn-primary" onClick={resetCheckout}>Fortsæt shopping</button>
          </div>
        )}
      </div>

      {/* Wishlist Sidebar */}
      <div className={`wishlist-sidebar ${showWishlist ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Din ønskeliste ({wishlist.length})</h3>
          <button className="close-cart" onClick={() => setShowWishlist(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {wishlist.length === 0 ? (
          <div className="cart-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <p>Din ønskeliste er tom</p>
            <button className="btn-primary" onClick={() => setShowWishlist(false)}>Find produkter</button>
          </div>
        ) : (
          <div className="wishlist-items">
            {wishlist.map(item => (
              <div key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.name} />
                <div className="wishlist-item-info">
                  <h4>{item.name}</h4>
                  <span className="wishlist-item-price">{formatPrice(item.price)} kr</span>
                  <button className="move-to-cart-btn" onClick={() => moveWishlistToCart(item)}>
                    Læg i kurv
                  </button>
                </div>
                <button className="remove-item" onClick={() => toggleWishlist(item)}>
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

      {/* Overlays */}
      {showCart && <div className="cart-overlay" onClick={() => { setShowCart(false); setCheckoutStep(0); setOrderComplete(false); }}></div>}
      {showWishlist && <div className="cart-overlay" onClick={() => setShowWishlist(false)}></div>}

      {/* Quick View Modal */}
      {showQuickView && (
        <>
          <div className="modal-overlay" onClick={() => setShowQuickView(null)}></div>
          <div className="quickview-modal">
            <button className="close-modal" onClick={() => setShowQuickView(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="quickview-content">
              <div className="quickview-gallery">
                <div className="main-image">
                  <img src={showQuickView.image} alt={showQuickView.name} />
                </div>
                {showQuickView.images && showQuickView.images.length > 1 && (
                  <div className="thumbnail-row">
                    {showQuickView.images.map((img, i) => (
                      <img key={i} src={img} alt={`${showQuickView.name} ${i + 1}`} />
                    ))}
                  </div>
                )}
              </div>
              <div className="quickview-info">
                {showQuickView.badge && (
                  <span className={`quickview-badge ${showQuickView.badge.toLowerCase()}`}>
                    {showQuickView.badge}
                  </span>
                )}
                <div className="product-rating">
                  <span className="stars">{'★'.repeat(Math.floor(showQuickView.rating))}{'☆'.repeat(5-Math.floor(showQuickView.rating))}</span>
                  <span className="rating-number">{showQuickView.rating}</span>
                  <span className="review-count">({showQuickView.reviews} anmeldelser)</span>
                </div>
                <h2>{showQuickView.name}</h2>
                <div className="product-price large">
                  <span className="current-price">{formatPrice(showQuickView.price)} kr</span>
                  {showQuickView.originalPrice && (
                    <>
                      <span className="original-price">{formatPrice(showQuickView.originalPrice)} kr</span>
                      <span className="save-amount">Spar {formatPrice(showQuickView.originalPrice - showQuickView.price)} kr</span>
                    </>
                  )}
                </div>
                <p className="product-description">{showQuickView.description}</p>

                <div className="product-details">
                  <div className="detail-row">
                    <span className="detail-label">Materiale:</span>
                    <span className="detail-value">{showQuickView.material}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Mål:</span>
                    <span className="detail-value">{showQuickView.dimensions}</span>
                  </div>
                </div>

                <div className="color-selector">
                  <span className="label">Farve: <strong>{selectedColor[showQuickView.id] || showQuickView.colors[0]}</strong></span>
                  <div className="colors">
                    {showQuickView.colors.map((color, i) => (
                      <button
                        key={i}
                        className={`color-option ${(selectedColor[showQuickView.id] || showQuickView.colors[0]) === color ? 'active' : ''}`}
                        onClick={() => setSelectedColor({ ...selectedColor, [showQuickView.id]: color })}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="quickview-actions">
                  <button
                    className="add-to-cart-btn large"
                    onClick={() => {
                      addToCart(showQuickView);
                      setShowQuickView(null);
                      setShowCart(true);
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    Læg i kurv - {formatPrice(showQuickView.price)} kr
                  </button>
                  <button
                    className={`wishlist-btn ${isInWishlist(showQuickView.id) ? 'active' : ''}`}
                    onClick={() => toggleWishlist(showQuickView)}
                  >
                    <svg viewBox="0 0 24 24" fill={isInWishlist(showQuickView.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>

                <div className="quickview-usp">
                  <div className="usp-mini">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13"/>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                      <circle cx="5.5" cy="18.5" r="2.5"/>
                      <circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                    <span>Gratis fragt over 1.000 kr</span>
                  </div>
                  <div className="usp-mini">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 4 23 10 17 10"/>
                      <path d="M21 14a9 9 0 1 1-2.63-6.37L23 10"/>
                    </svg>
                    <span>30 dages returret</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WebshopDemo;
