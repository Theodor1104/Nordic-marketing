import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantDemo.css';

function RestaurantDemo() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('starters');
  const [showCart, setShowCart] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [orderComplete, setOrderComplete] = useState(false);
  const [reservationComplete, setReservationComplete] = useState(false);
  const [orderType, setOrderType] = useState('takeaway');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });
  const [reservationInfo, setReservationInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const menuCategories = {
    starters: [
      { id: 1, name: 'Tartar af Oksekød', description: 'Med kapers, sennep og rugbrødschips', price: 135, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop' },
      { id: 2, name: 'Rejer på Smørrebrød', description: 'Håndpillede fjordrejer med citronmayo', price: 145, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
      { id: 3, name: 'Sæsonens Suppe', description: 'Serveres med brød og smør', price: 95, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
      { id: 11, name: 'Carpaccio', description: 'Tyndt skåret oksekød med rucola og parmesan', price: 125, image: 'https://images.unsplash.com/photo-1544025162-d76978b8e6e5?w=400&h=300&fit=crop' },
    ],
    mains: [
      { id: 4, name: 'Oksefilet', description: 'Med svampe, kartofler og rødvinssauce', price: 295, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop' },
      { id: 5, name: 'Grillet Laks', description: 'Med asparges og hollandaise', price: 245, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop' },
      { id: 6, name: 'And Confit', description: 'Med rødkål og kartofler', price: 275, image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop' },
      { id: 7, name: 'Vegetar Risotto', description: 'Med trøffel og parmesan', price: 195, image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop' },
    ],
    desserts: [
      { id: 8, name: 'Crème Brûlée', description: 'Klassisk med vanilje', price: 95, image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop' },
      { id: 9, name: 'Chokoladefondant', description: 'Med vaniljeis og friske bær', price: 115, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop' },
      { id: 10, name: 'Ostebord', description: 'Udvalgte oste med tilbehør', price: 145, image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=300&fit=crop' },
    ],
    drinks: [
      { id: 12, name: 'Husets Rødvin', description: 'Italiensk Sangiovese, 75cl', price: 295, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop' },
      { id: 13, name: 'Champagne', description: 'Moët & Chandon, 75cl', price: 595, image: 'https://images.unsplash.com/photo-1594372365401-3b5ff14eaaed?w=400&h=300&fit=crop' },
      { id: 14, name: 'Øl - Mikkeller', description: 'Dansk craft øl, 33cl', price: 65, image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=300&fit=crop' },
      { id: 15, name: 'Hjemmelavet Lemonade', description: 'Med frisk mynte og lime', price: 55, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop' },
    ]
  };

  // Calendar generation
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Adjust for Monday start (0 = Sunday -> 6, 1 = Monday -> 0, etc.)
    let startDayOfWeek = firstDay.getDay();
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    // Add empty slots for days before the first day
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({ day: null, date: null });
    }

    // Add all days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const dateStr = date.toISOString().split('T')[0];
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const isPast = date < today;
      const isToday = date.getTime() === today.getTime();
      const isMonday = date.getDay() === 1; // Restaurant closed on Mondays

      days.push({
        day,
        date: dateStr,
        isPast,
        isToday,
        isClosed: isMonday
      });
    }

    return days;
  }, [currentMonth]);

  // Month navigation
  const prevMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    const today = new Date();
    if (newDate.getFullYear() > today.getFullYear() ||
        (newDate.getFullYear() === today.getFullYear() && newDate.getMonth() >= today.getMonth())) {
      setCurrentMonth(newDate);
    }
  };

  const nextMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);
    if (newDate <= maxDate) {
      setCurrentMonth(newDate);
    }
  };

  // Format month name
  const formatMonth = (date) => {
    const months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni',
                    'Juli', 'August', 'September', 'Oktober', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Format selected date
  const formatSelectedDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    const months = ['januar', 'februar', 'marts', 'april', 'maj', 'juni',
                    'juli', 'august', 'september', 'oktober', 'november', 'december'];
    return `${days[date.getDay()]} d. ${date.getDate()}. ${months[date.getMonth()]}`;
  };

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i));
    } else {
      setCart([...cart, {...item, quantity: 1}]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(i => i.id === id ? {...i, quantity} : i));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 49 : 0;
  const totalWithDelivery = cartTotal + deliveryFee;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    setCheckoutStep('cart');
  };

  const handleReservation = (e) => {
    e.preventDefault();
    setReservationComplete(true);
  };

  const resetOrder = () => {
    setCart([]);
    setOrderComplete(false);
    setShowCart(false);
    setCustomerInfo({ name: '', phone: '', email: '', address: '', notes: '' });
  };

  const resetReservation = () => {
    setReservationComplete(false);
    setReservationDate('');
    setReservationTime('');
    setGuests('2');
    setReservationInfo({ name: '', phone: '', email: '', notes: '' });
  };

  return (
    <div className="restaurant-demo">
      {/* Back to Nordic Digital */}
      <button onClick={() => window.close()} className="demo-back-btn restaurant-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Luk demo
      </button>

      {/* Header */}
      <header className="restaurant-header">
        <div className="restaurant-container">
          <div className="restaurant-logo">
            <span className="logo-text">Smag</span>
            <span className="logo-accent">&</span>
            <span className="logo-text">Behag</span>
          </div>

          <nav className="restaurant-nav">
            <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>Menu</button>
            <button onClick={() => document.getElementById('om-os')?.scrollIntoView({ behavior: 'smooth' })}>Om Os</button>
            <button onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>Reservation</button>
            <button onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>Kontakt</button>
          </nav>

          <button className="cart-btn" onClick={() => setShowCart(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="restaurant-hero">
        <div className="hero-overlay"></div>
        <div className="restaurant-container">
          <div className="hero-content">
            <span className="hero-badge">Smag Oplevelsen</span>
            <h1>Autentiske smagsoplevelser i hjertet af København</h1>
            <p>Vi kombinerer klassisk dansk madtradition med moderne teknikker og de bedste sæsonens råvarer.</p>
            <div className="hero-ctas">
              <a href="#menu" className="btn-primary">Se Menu</a>
              <a href="#reservation" className="btn-outline">Book Bord</a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="restaurant-menu" id="menu">
        <div className="restaurant-container">
          <div className="section-header">
            <span className="section-label">Vores Menu</span>
            <h2>Smagsfulde Oplevelser</h2>
            <p>Friske råvarer, klassiske retter og et strejf af fornyelse</p>
          </div>

          {/* Category Tabs */}
          <div className="menu-tabs">
            <button
              className={activeCategory === 'starters' ? 'active' : ''}
              onClick={() => setActiveCategory('starters')}
            >
              Forretter
            </button>
            <button
              className={activeCategory === 'mains' ? 'active' : ''}
              onClick={() => setActiveCategory('mains')}
            >
              Hovedretter
            </button>
            <button
              className={activeCategory === 'desserts' ? 'active' : ''}
              onClick={() => setActiveCategory('desserts')}
            >
              Desserter
            </button>
            <button
              className={activeCategory === 'drinks' ? 'active' : ''}
              onClick={() => setActiveCategory('drinks')}
            >
              Drikkevarer
            </button>
          </div>

          {/* Menu Grid */}
          <div className="menu-grid">
            {menuCategories[activeCategory].map(item => (
              <div key={item.id} className="menu-card">
                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} />
                  <div className="menu-card-overlay">
                    <button className="quick-add" onClick={() => addToCart(item)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="menu-card-content">
                  <div className="menu-card-header">
                    <h3>{item.name}</h3>
                    <span className="menu-price">{item.price} kr</span>
                  </div>
                  <p>{item.description}</p>
                  <button className="add-to-cart" onClick={() => addToCart(item)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    Tilføj til bestilling
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="restaurant-about" id="om-os">
        <div className="restaurant-container">
          <div className="about-grid">
            <div className="about-images">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop" alt="Restaurant interior" className="about-img-1" />
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=300&fit=crop" alt="Chef at work" className="about-img-2" />
            </div>
            <div className="about-content">
              <span className="section-label">Vores Historie</span>
              <h2>Passion for mad siden 2015</h2>
              <p>Smag & Behag blev grundlagt med én simpel vision: at skabe mindeværdige madoplevelser med fokus på kvalitet, bæredygtighed og dansk madkultur.</p>
              <p>Vores køkkenchef, Anders Nielsen, har over 20 års erfaring fra nogle af Danmarks bedste restauranter. Han leder et dedikeret team, der hver dag arbejder på at levere exceptionelle smagsoplevelser.</p>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="stat-num">9</span>
                  <span className="stat-text">År på Michelin Guide</span>
                </div>
                <div className="about-stat">
                  <span className="stat-num">15.000+</span>
                  <span className="stat-text">Tilfredse gæster årligt</span>
                </div>
                <div className="about-stat">
                  <span className="stat-num">100%</span>
                  <span className="stat-text">Lokale råvarer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="restaurant-reservation" id="reservation">
        <div className="restaurant-container">
          {reservationComplete ? (
            <div className="reservation-success">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h2>Reservation bekræftet!</h2>
              <p>Tak for din reservation. Du vil modtage en bekræftelse på email.</p>
              <div className="reservation-details">
                <div className="detail-row">
                  <span>Dato</span>
                  <span>{new Date(reservationDate).toLocaleDateString('da-DK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="detail-row">
                  <span>Tidspunkt</span>
                  <span>{reservationTime}</span>
                </div>
                <div className="detail-row">
                  <span>Antal gæster</span>
                  <span>{guests} {parseInt(guests) === 1 ? 'person' : 'personer'}</span>
                </div>
                <div className="detail-row">
                  <span>Navn</span>
                  <span>{reservationInfo.name}</span>
                </div>
              </div>
              <button className="btn-primary" onClick={resetReservation}>Lav ny reservation</button>
            </div>
          ) : (
            <div className="reservation-wrapper">
              <div className="reservation-info">
                <span className="section-label">Book Bord</span>
                <h2>Reserver din oplevelse</h2>
                <p>Vi anbefaler at reservere bord, særligt i weekenden. For større selskaber over 8 personer, kontakt os venligst direkte.</p>

                <div className="opening-hours">
                  <h3>Åbningstider</h3>
                  <div className="hours-grid">
                    <div>
                      <strong>Tirsdag - Torsdag</strong>
                      <span>17:00 - 22:00</span>
                    </div>
                    <div>
                      <strong>Fredag - Lørdag</strong>
                      <span>17:00 - 23:00</span>
                    </div>
                    <div>
                      <strong>Søndag</strong>
                      <span>12:00 - 20:00</span>
                    </div>
                    <div>
                      <strong>Mandag</strong>
                      <span>Lukket</span>
                    </div>
                  </div>
                </div>

                <div className="contact-info-box">
                  <h3>Kontakt</h3>
                  <p><strong>Telefon:</strong> +45 33 12 34 56</p>
                  <p><strong>Email:</strong> info@smagogbehag.dk</p>
                </div>
              </div>

              <form className="reservation-form" onSubmit={handleReservation}>
                {/* Calendar */}
                <div className="reservation-calendar">
                  <div className="calendar-header">
                    <button type="button" className="month-nav" onClick={prevMonth}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6"/>
                      </svg>
                    </button>
                    <h4>{formatMonth(currentMonth)}</h4>
                    <button type="button" className="month-nav" onClick={nextMonth}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </button>
                  </div>

                  <div className="calendar-weekdays">
                    {['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'].map(day => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>

                  <div className="calendar-days">
                    {calendarDays.map((dayObj, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`calendar-day ${!dayObj.day ? 'empty' : ''} ${dayObj.isPast ? 'past' : ''} ${dayObj.isToday ? 'today' : ''} ${dayObj.isClosed ? 'closed' : ''} ${reservationDate === dayObj.date ? 'selected' : ''}`}
                        onClick={() => {
                          if (dayObj.day && !dayObj.isPast && !dayObj.isClosed) {
                            setReservationDate(dayObj.date);
                            setReservationTime('');
                          }
                        }}
                        disabled={!dayObj.day || dayObj.isPast || dayObj.isClosed}
                      >
                        {dayObj.day}
                      </button>
                    ))}
                  </div>

                  <div className="calendar-legend">
                    <span className="legend-item"><span className="legend-dot available"></span> Ledig</span>
                    <span className="legend-item"><span className="legend-dot closed"></span> Lukket</span>
                    <span className="legend-item"><span className="legend-dot selected"></span> Valgt</span>
                  </div>
                </div>

                {/* Time Selection */}
                {reservationDate && (
                  <div className="time-selection">
                    <label>Vælg tidspunkt - {formatSelectedDate(reservationDate)}</label>
                    <div className="time-grid">
                      {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(time => (
                        <button
                          key={time}
                          type="button"
                          className={`time-btn ${reservationTime === time ? 'selected' : ''}`}
                          onClick={() => setReservationTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label>Antal gæster *</label>
                  <div className="guest-selector">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <button
                        key={num}
                        type="button"
                        className={guests === String(num) ? 'active' : ''}
                        onClick={() => setGuests(String(num))}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Navn *</label>
                    <input
                      type="text"
                      placeholder="Dit fulde navn"
                      value={reservationInfo.name}
                      onChange={(e) => setReservationInfo({...reservationInfo, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon *</label>
                    <input
                      type="tel"
                      placeholder="+45 12 34 56 78"
                      value={reservationInfo.phone}
                      onChange={(e) => setReservationInfo({...reservationInfo, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="din@email.dk"
                    value={reservationInfo.email}
                    onChange={(e) => setReservationInfo({...reservationInfo, email: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Særlige ønsker (valgfrit)</label>
                  <textarea
                    rows="3"
                    placeholder="Allergier, fødselsdag, etc."
                    value={reservationInfo.notes}
                    onChange={(e) => setReservationInfo({...reservationInfo, notes: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary full-width">
                  Bekræft Reservation
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="restaurant-footer" id="kontakt">
        <div className="restaurant-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="restaurant-logo footer-logo">
                <span className="logo-text">Smag</span>
                <span className="logo-accent">&</span>
                <span className="logo-text">Behag</span>
              </div>
              <p>Kulinariske oplevelser med et moderne twist.</p>
              <div className="social-icons">
                <a href="#instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#tripadvisor" aria-label="TripAdvisor">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Kontakt</h4>
              <p>Vestergade 24</p>
              <p>1456 København K</p>
              <p>+45 33 12 34 56</p>
              <p>info@smagogbehag.dk</p>
            </div>
            <div className="footer-col">
              <h4>Links</h4>
              <div className="footer-links">
                <a href="#menu">Menu</a>
                <a href="#reservation">Book bord</a>
                <a href="#om-os">Om os</a>
                <a href="#privatlivspolitik">Privatlivspolitik</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Smag & Behag. Alle rettigheder forbeholdes.</p>
            <p className="demo-credit">Demo bygget af <Link to="/cases">Nordic Digital</Link></p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${showCart ? 'open' : ''}`}>
        {orderComplete ? (
          <div className="order-success">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Ordre modtaget!</h3>
            <p>Tak for din ordre. Du vil modtage en bekræftelse på email.</p>
            <div className="order-summary">
              <div className="detail-row">
                <span>Type</span>
                <span>{orderType === 'delivery' ? 'Levering' : 'Afhentning'}</span>
              </div>
              <div className="detail-row">
                <span>Ordrenummer</span>
                <span>#{Math.floor(Math.random() * 9000) + 1000}</span>
              </div>
              <div className="detail-row total">
                <span>Total</span>
                <span>{totalWithDelivery} kr</span>
              </div>
            </div>
            <button className="btn-primary full-width" onClick={resetOrder}>Luk</button>
          </div>
        ) : checkoutStep === 'cart' ? (
          <>
            <div className="cart-header">
              <h3>Din Bestilling</h3>
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
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <p>Din kurv er tom</p>
                <button className="btn-outline" onClick={() => setShowCart(false)}>Se Menu</button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <span className="cart-item-price">{item.price} kr</span>
                      </div>
                      <div className="cart-item-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="order-type-selector">
                    <button
                      className={orderType === 'takeaway' ? 'active' : ''}
                      onClick={() => setOrderType('takeaway')}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                      </svg>
                      Afhentning
                    </button>
                    <button
                      className={orderType === 'delivery' ? 'active' : ''}
                      onClick={() => setOrderType('delivery')}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="3" width="15" height="13"/>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                        <circle cx="5.5" cy="18.5" r="2.5"/>
                        <circle cx="18.5" cy="18.5" r="2.5"/>
                      </svg>
                      Levering (+49 kr)
                    </button>
                  </div>
                  <div className="cart-subtotal">
                    <span>Subtotal</span>
                    <span>{cartTotal} kr</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="cart-delivery">
                      <span>Levering</span>
                      <span>{deliveryFee} kr</span>
                    </div>
                  )}
                  <div className="cart-total">
                    <span>Total</span>
                    <span>{totalWithDelivery} kr</span>
                  </div>
                  <button className="btn-primary full-width" onClick={() => setCheckoutStep('info')}>
                    Gå til kassen
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="cart-header">
              <button className="back-btn" onClick={() => setCheckoutStep('cart')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <h3>Dine oplysninger</h3>
              <button className="close-cart" onClick={() => setShowCart(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <form className="checkout-form" onSubmit={handlePlaceOrder}>
              <div className="form-group">
                <label>Navn *</label>
                <input
                  type="text"
                  placeholder="Dit fulde navn"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Telefon *</label>
                <input
                  type="tel"
                  placeholder="+45 12 34 56 78"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  placeholder="din@email.dk"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  required
                />
              </div>
              {orderType === 'delivery' && (
                <div className="form-group">
                  <label>Leveringsadresse *</label>
                  <input
                    type="text"
                    placeholder="Gade og husnummer"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <label>Bemærkninger (valgfrit)</label>
                <textarea
                  rows="2"
                  placeholder="Allergier, leveringsinstruktioner, etc."
                  value={customerInfo.notes}
                  onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                ></textarea>
              </div>

              <div className="checkout-summary">
                <h4>Ordresammenfatning</h4>
                {cart.map(item => (
                  <div key={item.id} className="summary-item">
                    <span>{item.quantity}x {item.name}</span>
                    <span>{item.price * item.quantity} kr</span>
                  </div>
                ))}
                {orderType === 'delivery' && (
                  <div className="summary-item">
                    <span>Levering</span>
                    <span>{deliveryFee} kr</span>
                  </div>
                )}
                <div className="summary-total">
                  <span>Total</span>
                  <span>{totalWithDelivery} kr</span>
                </div>
              </div>

              <button type="submit" className="btn-primary full-width">
                Bekræft ordre - {totalWithDelivery} kr
              </button>
            </form>
          </>
        )}
      </div>

      {/* Cart Overlay */}
      {showCart && <div className="cart-overlay" onClick={() => setShowCart(false)}></div>}
    </div>
  );
}

export default RestaurantDemo;
