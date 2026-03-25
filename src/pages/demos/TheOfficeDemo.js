import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './TheOfficeDemo.css';

function TheOfficeDemo() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [activeNav, setActiveNav] = useState('book');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    participants: '2',
    message: ''
  });

  // Rooms data
  const rooms = [
    {
      id: 'meeting-small',
      name: 'Lille Mødelokale',
      capacity: 4,
      price: 0,
      priceLabel: 'Gratis for medlemmer',
      amenities: ['Whiteboard', 'TV-skærm', 'Videokonference'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      description: 'Perfekt til små møder og 1-til-1 samtaler'
    },
    {
      id: 'meeting-large',
      name: 'Stort Mødelokale',
      capacity: 12,
      price: 0,
      priceLabel: 'Gratis for medlemmer',
      amenities: ['Whiteboard', 'Projektor', 'Videokonference', 'Lydanlæg'],
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
      description: 'Ideelt til præsentationer og større møder'
    },
    {
      id: 'private-office',
      name: 'Privat Kontor',
      capacity: 2,
      price: 299,
      priceLabel: '299 kr/time',
      amenities: ['Skrivebord', 'Ergonomisk stol', 'Skærm', 'Printer adgang'],
      image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&h=300&fit=crop',
      description: 'Roligt arbejdsrum til fokuseret arbejde'
    },
    {
      id: 'event-space',
      name: 'Event Space',
      capacity: 50,
      price: 1499,
      priceLabel: '1.499 kr/time',
      amenities: ['Scene', 'Lydanlæg', 'Projektor', 'Catering mulighed', 'Bar'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
      description: 'Til workshops, events og netværksarrangementer'
    }
  ];

  // Existing bookings (simulated)
  const existingBookings = [
    { roomId: 'meeting-small', date: '2026-03-25', startTime: '09:00', endTime: '11:00' },
    { roomId: 'meeting-small', date: '2026-03-25', startTime: '14:00', endTime: '16:00' },
    { roomId: 'meeting-large', date: '2026-03-26', startTime: '10:00', endTime: '12:00' },
    { roomId: 'meeting-large', date: '2026-03-27', startTime: '13:00', endTime: '15:00' },
    { roomId: 'private-office', date: '2026-03-25', startTime: '08:00', endTime: '17:00' },
  ];

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];

    // Get the day of week for the first day (0 = Sunday, adjust for Monday start)
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
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      // Check if this date has bookings for selected room
      const hasBookings = selectedRoom && existingBookings.some(
        b => b.roomId === selectedRoom.id && b.date === dateStr
      );

      days.push({
        day,
        date: dateStr,
        isPast,
        isToday,
        isWeekend,
        hasBookings
      });
    }

    return days;
  }, [currentMonth, selectedRoom]);

  // Generate time slots
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 8; hour <= 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 20 && minute > 0) break;
        const h = hour.toString().padStart(2, '0');
        const m = minute.toString().padStart(2, '0');
        slots.push(`${h}:${m}`);
      }
    }
    return slots;
  }, []);

  // Get booked times for selected date and room
  const bookedTimes = useMemo(() => {
    if (!selectedDate || !selectedRoom) return [];
    return existingBookings
      .filter(b => b.roomId === selectedRoom.id && b.date === selectedDate)
      .map(b => ({ start: b.startTime, end: b.endTime }));
  }, [selectedDate, selectedRoom]);

  // Check if time slot is booked
  const isTimeBooked = (time) => {
    return bookedTimes.some(bt => time >= bt.start && time < bt.end);
  };

  // Get available end times
  const availableEndTimes = useMemo(() => {
    if (!startTime) return [];
    const startIndex = timeSlots.indexOf(startTime);
    return timeSlots.slice(startIndex + 1).filter(time => {
      // Check if any time between start and this end is booked
      for (let i = startIndex; i < timeSlots.indexOf(time); i++) {
        if (isTimeBooked(timeSlots[i])) return false;
      }
      return true;
    });
  }, [startTime, timeSlots, bookedTimes]);

  // Navigation functions
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
    // Allow up to 3 months ahead
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
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
    return `${days[date.getDay()]} d. ${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Calculate price
  const calculatePrice = () => {
    if (!selectedRoom || !startTime || !endTime) return 0;
    const startIndex = timeSlots.indexOf(startTime);
    const endIndex = timeSlots.indexOf(endTime);
    const hours = (endIndex - startIndex) / 2;
    return selectedRoom.price * hours;
  };

  // Handle booking submission
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  // Reset booking
  const resetBooking = () => {
    setSelectedRoom(null);
    setSelectedDate(null);
    setStartTime('');
    setEndTime('');
    setBookingStep(1);
    setBookingComplete(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      participants: '2',
      message: ''
    });
  };

  return (
    <div className="office-demo">
      {/* Back Button */}
      <Link to="/cases" className="demo-back-btn office-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Tilbage til Nordic Digital
      </Link>

      {/* Header */}
      <header className="office-header">
        <div className="office-container">
          <div className="header-content">
            <div className="office-logo">
              <div className="logo-mark">
                <span>T</span>
                <span>O</span>
              </div>
              <div className="logo-text">
                <span className="logo-name">The Office</span>
                <span className="logo-tagline">Moderne Kontorfællesskab</span>
              </div>
            </div>

            <nav className="office-nav">
              <button className={activeNav === 'home' ? 'active' : ''} onClick={() => { setActiveNav('home'); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}>Forside</button>
              <button className={activeNav === 'spaces' ? 'active' : ''} onClick={() => { setActiveNav('spaces'); document.getElementById('spaces')?.scrollIntoView({ behavior: 'smooth' }); }}>Lokaler</button>
              <button className={activeNav === 'book' ? 'active' : ''} onClick={() => { setActiveNav('book'); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}>Book</button>
              <button className={activeNav === 'prices' ? 'active' : ''} onClick={() => { setActiveNav('prices'); document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' }); }}>Priser</button>
              <button className={activeNav === 'about' ? 'active' : ''} onClick={() => { setActiveNav('about'); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>Om os</button>
              <button className={activeNav === 'contact' ? 'active' : ''} onClick={() => { setActiveNav('contact'); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Kontakt</button>
            </nav>

            <div className="header-actions">
              <button className="login-btn">Log ind</button>
              <button className="cta-btn">Bliv medlem</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="office-hero" id="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop" alt="The Office" />
          <div className="hero-overlay"></div>
        </div>
        <div className="office-container">
          <div className="hero-content">
            <span className="hero-badge">Danmarks mest fleksible kontorfællesskab</span>
            <h1>Dit næste mødelokale venter</h1>
            <p>Book mødelokaler, private kontorer og event spaces direkte online. Fleksibelt, professionelt og til skarpe priser.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Aktive medlemmer</span>
              </div>
              <div className="stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Mødelokaler</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Adgang</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Tilfredse kunder</span>
              </div>
            </div>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => setActiveNav('book')}>
                Book lokale nu
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn-secondary">Se lokaler</button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section" id="booking">
        <div className="office-container">
          <div className="section-header">
            <span className="section-tag">Online Booking</span>
            <h2>Book dit lokale</h2>
            <p>Vælg lokale, dato og tid - nemt og hurtigt</p>
          </div>

          {bookingComplete ? (
            <div className="booking-confirmation">
              <div className="confirmation-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Booking bekræftet!</h3>
              <p>Din booking er nu registreret. Du modtager en bekræftelse på email.</p>
              <div className="confirmation-details">
                <div className="detail-row">
                  <span className="detail-label">Lokale</span>
                  <span className="detail-value">{selectedRoom?.name}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Dato</span>
                  <span className="detail-value">{formatSelectedDate(selectedDate)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Tidspunkt</span>
                  <span className="detail-value">{startTime} - {endTime}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Pris</span>
                  <span className="detail-value">
                    {calculatePrice() === 0 ? 'Gratis (medlem)' : `${calculatePrice()} kr`}
                  </span>
                </div>
              </div>
              <div className="confirmation-actions">
                <button className="btn-primary" onClick={resetBooking}>Lav ny booking</button>
              </div>
            </div>
          ) : (
            <div className="booking-container">
              {/* Progress Steps */}
              <div className="booking-progress">
                <div className={`progress-step ${bookingStep >= 1 ? 'active' : ''} ${bookingStep > 1 ? 'completed' : ''}`}>
                  <div className="step-number">
                    {bookingStep > 1 ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : '1'}
                  </div>
                  <span className="step-label">Vælg lokale</span>
                </div>
                <div className="progress-line"></div>
                <div className={`progress-step ${bookingStep >= 2 ? 'active' : ''} ${bookingStep > 2 ? 'completed' : ''}`}>
                  <div className="step-number">
                    {bookingStep > 2 ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : '2'}
                  </div>
                  <span className="step-label">Dato & tid</span>
                </div>
                <div className="progress-line"></div>
                <div className={`progress-step ${bookingStep >= 3 ? 'active' : ''}`}>
                  <div className="step-number">3</div>
                  <span className="step-label">Bekræft</span>
                </div>
              </div>

              {/* Step 1: Room Selection */}
              {bookingStep === 1 && (
                <div className="booking-step" id="spaces">
                  <h3>Vælg lokale</h3>
                  <div className="rooms-grid">
                    {rooms.map(room => (
                      <div
                        key={room.id}
                        className={`room-card ${selectedRoom?.id === room.id ? 'selected' : ''}`}
                        onClick={() => setSelectedRoom(room)}
                      >
                        <div className="room-image">
                          <img src={room.image} alt={room.name} />
                          {selectedRoom?.id === room.id && (
                            <div className="selected-badge">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="room-info">
                          <h4>{room.name}</h4>
                          <p className="room-description">{room.description}</p>
                          <div className="room-meta">
                            <span className="room-capacity">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                              </svg>
                              Op til {room.capacity} personer
                            </span>
                            <span className={`room-price ${room.price === 0 ? 'free' : ''}`}>
                              {room.priceLabel}
                            </span>
                          </div>
                          <div className="room-amenities">
                            {room.amenities.map((amenity, i) => (
                              <span key={i} className="amenity-tag">{amenity}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="step-actions">
                    <button className="btn-primary" disabled={!selectedRoom} onClick={() => setBookingStep(2)}>
                      Fortsæt til dato & tid
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Selection */}
              {bookingStep === 2 && (
                <div className="booking-step">
                  <div className="step-header">
                    <button className="back-btn" onClick={() => setBookingStep(1)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                      Tilbage
                    </button>
                    <div className="selected-room-badge">
                      <img src={selectedRoom?.image} alt={selectedRoom?.name} />
                      <span>{selectedRoom?.name}</span>
                    </div>
                  </div>

                  <div className="datetime-grid">
                    {/* Calendar */}
                    <div className="calendar-section">
                      <h3>Vælg dato</h3>
                      <div className="calendar">
                        <div className="calendar-header">
                          <button className="month-nav" onClick={prevMonth}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="15 18 9 12 15 6"/>
                            </svg>
                          </button>
                          <h4>{formatMonth(currentMonth)}</h4>
                          <button className="month-nav" onClick={nextMonth}>
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
                              className={`calendar-day ${!dayObj.day ? 'empty' : ''} ${dayObj.isPast ? 'past' : ''} ${dayObj.isToday ? 'today' : ''} ${dayObj.isWeekend ? 'weekend' : ''} ${selectedDate === dayObj.date ? 'selected' : ''} ${dayObj.hasBookings ? 'has-bookings' : ''}`}
                              onClick={() => {
                                if (dayObj.day && !dayObj.isPast && !dayObj.isWeekend) {
                                  setSelectedDate(dayObj.date);
                                  setStartTime('');
                                  setEndTime('');
                                }
                              }}
                              disabled={!dayObj.day || dayObj.isPast || dayObj.isWeekend}
                            >
                              {dayObj.day}
                              {dayObj.hasBookings && <span className="booking-dot"></span>}
                            </button>
                          ))}
                        </div>

                        <div className="calendar-legend">
                          <div className="legend-item">
                            <span className="legend-dot available"></span>
                            Ledig
                          </div>
                          <div className="legend-item">
                            <span className="legend-dot booked"></span>
                            Delvist optaget
                          </div>
                          <div className="legend-item">
                            <span className="legend-dot selected"></span>
                            Valgt
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div className="time-section">
                      <h3>Vælg tidspunkt</h3>
                      {selectedDate ? (
                        <div className="time-picker">
                          <p className="selected-date-label">{formatSelectedDate(selectedDate)}</p>

                          <div className="time-row">
                            <div className="time-field">
                              <label>Starttid</label>
                              <select value={startTime} onChange={(e) => { setStartTime(e.target.value); setEndTime(''); }}>
                                <option value="">Vælg starttid</option>
                                {timeSlots.slice(0, -1).map(time => (
                                  <option key={time} value={time} disabled={isTimeBooked(time)}>
                                    {time} {isTimeBooked(time) ? '(optaget)' : ''}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="time-field">
                              <label>Sluttid</label>
                              <select value={endTime} onChange={(e) => setEndTime(e.target.value)} disabled={!startTime}>
                                <option value="">Vælg sluttid</option>
                                {availableEndTimes.map(time => (
                                  <option key={time} value={time}>{time}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          {/* Time slots visualization */}
                          <div className="time-slots-visual">
                            <p className="slots-label">Ledige tider:</p>
                            <div className="slots-grid">
                              {timeSlots.slice(0, -1).map(time => {
                                const isBooked = isTimeBooked(time);
                                const isSelected = startTime && endTime && time >= startTime && time < endTime;
                                return (
                                  <div
                                    key={time}
                                    className={`time-slot ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
                                    title={`${time} - ${isBooked ? 'Optaget' : 'Ledig'}`}
                                  >
                                    <span className="slot-time">{time}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Booking summary */}
                          {startTime && endTime && (
                            <div className="time-summary">
                              <h4>Din booking</h4>
                              <div className="summary-row">
                                <span>Lokale:</span>
                                <span>{selectedRoom?.name}</span>
                              </div>
                              <div className="summary-row">
                                <span>Dato:</span>
                                <span>{formatSelectedDate(selectedDate)}</span>
                              </div>
                              <div className="summary-row">
                                <span>Tid:</span>
                                <span>{startTime} - {endTime}</span>
                              </div>
                              <div className="summary-row total">
                                <span>Pris:</span>
                                <span className={calculatePrice() === 0 ? 'free' : ''}>
                                  {calculatePrice() === 0 ? 'Gratis (medlem)' : `${calculatePrice()} kr`}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="no-date-selected">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          <p>Vælg en dato i kalenderen for at se ledige tider</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="step-actions">
                    <button className="btn-primary" disabled={!selectedDate || !startTime || !endTime} onClick={() => setBookingStep(3)}>
                      Fortsæt til bekræftelse
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {bookingStep === 3 && (
                <div className="booking-step">
                  <div className="step-header">
                    <button className="back-btn" onClick={() => setBookingStep(2)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                      Tilbage
                    </button>
                  </div>

                  <h3>Bekræft din booking</h3>

                  <div className="confirmation-grid">
                    <div className="booking-summary-card">
                      <div className="summary-image">
                        <img src={selectedRoom?.image} alt={selectedRoom?.name} />
                      </div>
                      <div className="summary-details">
                        <h4>{selectedRoom?.name}</h4>
                        <div className="detail-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          <span>{formatSelectedDate(selectedDate)}</span>
                        </div>
                        <div className="detail-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          <span>{startTime} - {endTime}</span>
                        </div>
                        <div className="detail-item price">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="1" x2="12" y2="23"/>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                          </svg>
                          <span className={calculatePrice() === 0 ? 'free' : ''}>
                            {calculatePrice() === 0 ? 'Gratis (medlem)' : `${calculatePrice()} kr`}
                          </span>
                        </div>
                      </div>
                    </div>

                    <form className="booking-form" onSubmit={handleSubmitBooking}>
                      <h4>Dine oplysninger</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Navn *</label>
                          <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Dit fulde navn" required />
                        </div>
                        <div className="form-group">
                          <label>Email *</label>
                          <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="din@email.dk" required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Telefon</label>
                          <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+45 12 34 56 78" />
                        </div>
                        <div className="form-group">
                          <label>Virksomhed</label>
                          <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} placeholder="Virksomhedsnavn" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Antal deltagere</label>
                          <select value={formData.participants} onChange={(e) => setFormData({...formData, participants: e.target.value})}>
                            {Array.from({ length: selectedRoom?.capacity || 10 }, (_, i) => (
                              <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'person' : 'personer'}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group full-width">
                        <label>Besked (valgfrit)</label>
                        <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Særlige ønsker eller bemærkninger..." rows="3"></textarea>
                      </div>
                      <div className="form-terms">
                        <label className="checkbox-label">
                          <input type="checkbox" required />
                          <span>Jeg accepterer <a href="#vilkaar">vilkår og betingelser</a></span>
                        </label>
                      </div>
                      <button type="submit" className="btn-primary submit-btn">
                        Bekræft booking
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Prices Section */}
      <section className="prices-section" id="prices">
        <div className="office-container">
          <div className="section-header">
            <span className="section-tag">Medlemskab</span>
            <h2>Vores priser</h2>
            <p>Fleksible løsninger til ethvert behov</p>
          </div>
          <div className="prices-grid">
            <div className="price-card">
              <h3>Flex</h3>
              <div className="price-amount">
                <span className="price">499</span>
                <span className="price-period">kr/måned</span>
              </div>
              <ul className="price-features">
                <li>Adgang til fællesarealer</li>
                <li>5 timer mødelokale/måned</li>
                <li>Gratis kaffe & te</li>
                <li>WiFi adgang</li>
              </ul>
              <button className="price-btn">Vælg Flex</button>
            </div>
            <div className="price-card featured">
              <div className="featured-badge">Mest populær</div>
              <h3>Pro</h3>
              <div className="price-amount">
                <span className="price">1.499</span>
                <span className="price-period">kr/måned</span>
              </div>
              <ul className="price-features">
                <li>Alt i Flex +</li>
                <li>Fast skrivebord</li>
                <li>20 timer mødelokale/måned</li>
                <li>Posthåndtering</li>
                <li>24/7 adgang</li>
              </ul>
              <button className="price-btn primary">Vælg Pro</button>
            </div>
            <div className="price-card">
              <h3>Enterprise</h3>
              <div className="price-amount">
                <span className="price">Kontakt os</span>
              </div>
              <ul className="price-features">
                <li>Alt i Pro +</li>
                <li>Privat kontor</li>
                <li>Ubegrænset mødelokale</li>
                <li>Dedikeret support</li>
                <li>Firmaarrangementer</li>
              </ul>
              <button className="price-btn">Kontakt salg</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="office-footer" id="contact">
        <div className="office-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="office-logo footer-logo">
                <div className="logo-mark">
                  <span>T</span>
                  <span>O</span>
                </div>
                <div className="logo-text">
                  <span className="logo-name">The Office</span>
                  <span className="logo-tagline">Moderne Kontorfællesskab</span>
                </div>
              </div>
              <p>Danmarks mest fleksible kontorfællesskab. Professionelle rammer til dit arbejde.</p>
              <div className="social-icons">
                <a href="#linkedin" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
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
              </div>
            </div>
            <div className="footer-col">
              <h4>Lokaler</h4>
              <ul>
                <li><a href="#meeting">Mødelokaler</a></li>
                <li><a href="#private">Private kontorer</a></li>
                <li><a href="#event">Event space</a></li>
                <li><a href="#coworking">Coworking</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Medlemskab</h4>
              <ul>
                <li><a href="#prices">Priser</a></li>
                <li><a href="#benefits">Fordele</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#tour">Book rundvisning</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kontakt</h4>
              <ul>
                <li>Vesterbrogade 12</li>
                <li>1620 København V</li>
                <li>+45 70 20 30 40</li>
                <li>hello@theoffice.dk</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 The Office. Alle rettigheder forbeholdes.</p>
            <p className="demo-credit">Demo bygget af <Link to="/cases">Nordic Digital</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TheOfficeDemo;
