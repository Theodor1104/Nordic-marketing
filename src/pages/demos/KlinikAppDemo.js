import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './KlinikAppDemo.css';

function KlinikAppDemo() {
  const [activeView, setActiveView] = useState('home');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [doctorSearch, setDoctorSearch] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('alle');
  const [recordFilter, setRecordFilter] = useState('alle');
  const [refillSent, setRefillSent] = useState([]);
  const [showAllAppointments, setShowAllAppointments] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Emma Andersen',
      specialty: 'Praktiserende læge',
      rating: 4.9,
      reviews: 234,
      experience: '15 års erfaring',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      available: true,
      bio: 'Specialiseret i familielægebehandling og forebyggende sundhed.',
      languages: ['Dansk', 'Engelsk'],
      nextAvailable: 'I dag kl. 14:00'
    },
    {
      id: 2,
      name: 'Dr. Lars Petersen',
      specialty: 'Dermatolog',
      rating: 4.8,
      reviews: 189,
      experience: '12 års erfaring',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
      available: true,
      bio: 'Ekspert i hudlidelser, allergi og kosmetisk dermatologi.',
      languages: ['Dansk', 'Tysk'],
      nextAvailable: 'I morgen kl. 09:30'
    },
    {
      id: 3,
      name: 'Dr. Sofia Nielsen',
      specialty: 'Børnelæge',
      rating: 5.0,
      reviews: 312,
      experience: '18 års erfaring',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
      available: true,
      bio: 'Dedikeret til børns sundhed og udvikling.',
      languages: ['Dansk', 'Engelsk', 'Spansk'],
      nextAvailable: '25. mar kl. 10:00'
    },
    {
      id: 4,
      name: 'Dr. Michael Jensen',
      specialty: 'Fysioterapeut',
      rating: 4.7,
      reviews: 156,
      experience: '10 års erfaring',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
      available: false,
      bio: 'Specialiseret i sportsskader og genoptræning.',
      languages: ['Dansk'],
      nextAvailable: 'Ingen ledige tider'
    }
  ];

  const services = [
    { icon: 'stethoscope', name: 'Helbredsundersøgelse', duration: '45 min', price: 'Gratis' },
    { icon: 'syringe', name: 'Vaccination', duration: '15 min', price: '200 kr' },
    { icon: 'test-tube', name: 'Blodprøver', duration: '10 min', price: 'Gratis' },
    { icon: 'baby', name: 'Børneundersøgelse', duration: '30 min', price: 'Gratis' },
    { icon: 'heart', name: 'Hjertescreening', duration: '60 min', price: '850 kr' },
    { icon: 'brain', name: 'Samtaleterapi', duration: '50 min', price: '650 kr' }
  ];

  const getServiceIcon = (iconType) => {
    const icons = {
      stethoscope: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
      syringe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 2 4 4M7.5 10.5 19 22M10.5 7.5 19 16M21 3l-5 5M15 14l-7 7L2 15l7-7"/><path d="m3 21 5-5"/></svg>,
      'test-tube': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>,
      baby: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12h.01M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>,
      heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
      brain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/></svg>
    };
    return icons[iconType] || icons.stethoscope;
  };

  const appointments = [
    { id: 1, date: '28. mar', time: '09:30', doctor: 'Dr. Emma Andersen', type: 'Helbredsundersøgelse', status: 'confirmed', image: doctors[0].image },
    { id: 2, date: '15. apr', time: '14:00', doctor: 'Dr. Lars Petersen', type: 'Hudkontrol', status: 'pending', image: doctors[1].image },
    { id: 3, date: '22. apr', time: '10:00', doctor: 'Dr. Sofia Nielsen', type: 'Børnevaccination', status: 'confirmed', image: doctors[2].image },
    { id: 4, date: '5. maj', time: '11:30', doctor: 'Dr. Emma Andersen', type: 'Opfølgning', status: 'pending', image: doctors[0].image }
  ];

  const prescriptions = [
    { id: 1, name: 'Ibuprofen 400mg', dosage: '1 tablet 3x dagligt', remaining: 14, refillDate: '10. apr', status: 'active' },
    { id: 2, name: 'Cetirizin 10mg', dosage: '1 tablet dagligt', remaining: 28, refillDate: '20. apr', status: 'active' },
    { id: 3, name: 'Pantoprazol 20mg', dosage: '1 tablet om morgenen', remaining: 5, refillDate: 'Snart', status: 'refill' }
  ];

  const notifications = [
    { id: 1, type: 'appointment', title: 'Påmindelse', message: 'Du har en aftale i morgen kl. 09:30', time: '1 time siden', unread: true },
    { id: 2, type: 'prescription', title: 'Recept klar', message: 'Din recept på Ibuprofen er klar til afhentning', time: '3 timer siden', unread: true },
    { id: 3, type: 'result', title: 'Prøvesvar klar', message: 'Dine blodprøveresultater er nu tilgængelige', time: 'I går', unread: false }
  ];

  const medicalRecords = [
    { id: 1, date: '15. mar 2026', type: 'Konsultation', doctor: 'Dr. Emma Andersen', summary: 'Årlig helbredsundersøgelse - alt normalt' },
    { id: 2, date: '28. feb 2026', type: 'Blodprøve', doctor: 'Dr. Lars Petersen', summary: 'Kolesterol og blodsukker kontrol' },
    { id: 3, date: '10. jan 2026', type: 'Vaccination', doctor: 'Dr. Sofia Nielsen', summary: 'Influenza vaccination sæson 2025/26' }
  ];

  const availableTimes = ['09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '13:30', '14:00', '14:30', '15:00'];

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayNames = ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'];
      dates.push({
        day: dayNames[date.getDay()],
        date: date.getDate(),
        month: date.toLocaleDateString('da-DK', { month: 'short' }),
        full: date.toISOString().split('T')[0],
        available: date.getDay() !== 0 && date.getDay() !== 6
      });
    }
    return dates;
  };

  const dates = generateDates();

  const resetBooking = () => {
    setBookingComplete(true);
    setTimeout(() => {
      setSelectedDoctor(null);
      setSelectedDate(null);
      setSelectedTime(null);
      setBookingStep(1);
      setBookingComplete(false);
      setActiveView('home');
    }, 3000);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });
  };

  const handleRefill = (rxId) => {
    setRefillSent([...refillSent, rxId]);
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(doctorSearch.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(doctorSearch.toLowerCase());
    const matchesSpecialty = specialtyFilter === 'alle' ||
      (specialtyFilter === 'praktiserende' && doctor.specialty.includes('Praktiserende')) ||
      (specialtyFilter === 'specialist' && (doctor.specialty.includes('Dermatolog') || doctor.specialty.includes('Børnelæge'))) ||
      (specialtyFilter === 'terapi' && doctor.specialty.includes('Fysioterapeut'));
    return matchesSearch && matchesSpecialty;
  });

  const filteredRecords = medicalRecords.filter(record => {
    if (recordFilter === 'alle') return true;
    if (recordFilter === 'konsultationer') return record.type === 'Konsultation';
    if (recordFilter === 'prøver') return record.type === 'Blodprøve' || record.type === 'Vaccination';
    return true;
  });

  return (
    <div className="klinik-demo">
      {/* Back Button */}
      <button onClick={() => window.close()} className="demo-back-btn klinik-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Luk demo
      </button>

      {/* Mobile App Container */}
      <div className="phone-frame">
        {/* Phone Hardware Elements */}
        <div className="phone-notch">
          <div className="notch-speaker"></div>
          <div className="notch-camera"></div>
        </div>

        {/* Status Bar */}
        <div className="status-bar">
          <span className="status-time">{formatTime(currentTime)}</span>
          <div className="status-icons">
            <svg className="signal-icon" viewBox="0 0 24 24" fill="currentColor">
              <rect x="1" y="14" width="4" height="6" rx="1"/>
              <rect x="7" y="10" width="4" height="10" rx="1"/>
              <rect x="13" y="6" width="4" height="14" rx="1"/>
              <rect x="19" y="2" width="4" height="18" rx="1"/>
            </svg>
            <svg className="wifi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
              <circle cx="12" cy="20" r="1" fill="currentColor"/>
            </svg>
            <div className="battery-icon">
              <div className="battery-level" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

        {/* App Content */}
        <div className="app-content">
          {activeView === 'home' && (
            <div className="home-view">
              {/* Header */}
              <header className="app-header">
                <div className="header-greeting">
                  <span className="greeting-text">God eftermiddag</span>
                  <h1>Hej, Marie</h1>
                </div>
                <div className="header-actions">
                  <button className="notification-btn" onClick={() => setShowNotifications(true)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    {notifications.filter(n => n.unread).length > 0 && (
                      <span className="notification-badge">{notifications.filter(n => n.unread).length}</span>
                    )}
                  </button>
                  <div className="header-avatar">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Profile" />
                  </div>
                </div>
              </header>

              {/* Health Card */}
              <div className="health-card">
                <div className="health-card-header">
                  <span>Din sundhedsstatus</span>
                  <span className="health-status good">God</span>
                </div>
                <div className="health-metrics">
                  <div className="metric">
                    <span className="metric-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></span>
                    <span className="metric-value">72</span>
                    <span className="metric-label">BPM</span>
                  </div>
                  <div className="metric">
                    <span className="metric-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span>
                    <span className="metric-value">120/80</span>
                    <span className="metric-label">Blodtryk</span>
                  </div>
                  <div className="metric">
                    <span className="metric-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></span>
                    <span className="metric-value">8,432</span>
                    <span className="metric-label">Skridt</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <button className="quick-action" onClick={() => setActiveView('booking')}>
                  <span className="action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
                  <span>Book tid</span>
                </button>
                <button className="quick-action" onClick={() => setActiveView('doctors')}>
                  <span className="action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M12 11v4M10 13h4"/></svg></span>
                  <span>Find læge</span>
                </button>
                <button className="quick-action" onClick={() => setActiveView('prescriptions')}>
                  <span className="action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg></span>
                  <span>Recepter</span>
                </button>
                <button className="quick-action" onClick={() => setActiveView('records')}>
                  <span className="action-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="12" y2="18"/></svg></span>
                  <span>Journal</span>
                </button>
              </div>

              {/* Upcoming Appointments */}
              <section className="appointments-section">
                <div className="section-header">
                  <h2>Kommende aftaler</h2>
                  <button className="see-all" onClick={() => setShowAllAppointments(!showAllAppointments)}>
                    {showAllAppointments ? 'Vis mindre' : 'Se alle'}
                  </button>
                </div>
                <div className="appointments-list">
                  {(showAllAppointments ? appointments : appointments.slice(0, 2)).map((apt) => (
                    <div key={apt.id} className={`appointment-card ${apt.status}`}>
                      <div className="apt-date">
                        <span className="apt-day">{apt.date.split('.')[0]}</span>
                        <span className="apt-month">{apt.date.split('.')[1]}</span>
                      </div>
                      <div className="apt-info">
                        <h3>{apt.type}</h3>
                        <p>{apt.doctor}</p>
                        <span className="apt-time">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          {apt.time}
                        </span>
                      </div>
                      <div className={`apt-status ${apt.status}`}>
                        {apt.status === 'confirmed' ? 'Bekræftet' : 'Afventer'}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Services */}
              <section className="services-section">
                <div className="section-header">
                  <h2>Vores ydelser</h2>
                </div>
                <div className="services-grid">
                  {services.map((service, index) => (
                    <div key={index} className="service-card" onClick={() => setActiveView('booking')}>
                      <span className="service-icon">{getServiceIcon(service.icon)}</span>
                      <h3>{service.name}</h3>
                      <span className="service-duration">{service.duration}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeView === 'doctors' && (
            <div className="doctors-view">
              <header className="view-header">
                <button className="back-btn" onClick={() => setActiveView('home')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
                <h1>Vores læger</h1>
                <div style={{ width: 40 }}></div>
              </header>

              <div className="search-bar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Søg efter læge eller speciale..."
                  value={doctorSearch}
                  onChange={(e) => setDoctorSearch(e.target.value)}
                />
              </div>

              <div className="specialty-filters">
                <button className={`filter-chip ${specialtyFilter === 'alle' ? 'active' : ''}`} onClick={() => setSpecialtyFilter('alle')}>Alle</button>
                <button className={`filter-chip ${specialtyFilter === 'praktiserende' ? 'active' : ''}`} onClick={() => setSpecialtyFilter('praktiserende')}>Praktiserende</button>
                <button className={`filter-chip ${specialtyFilter === 'specialist' ? 'active' : ''}`} onClick={() => setSpecialtyFilter('specialist')}>Specialist</button>
                <button className={`filter-chip ${specialtyFilter === 'terapi' ? 'active' : ''}`} onClick={() => setSpecialtyFilter('terapi')}>Terapi</button>
              </div>

              <div className="doctors-list">
                {filteredDoctors.map(doctor => (
                  <div
                    key={doctor.id}
                    className={`doctor-card ${!doctor.available ? 'unavailable' : ''}`}
                    onClick={() => { if (doctor.available) { setSelectedDoctor(doctor); setActiveView('booking'); setBookingStep(2); }}}
                  >
                    <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                    <div className="doctor-info">
                      <h3>{doctor.name}</h3>
                      <p className="doctor-specialty">{doctor.specialty}</p>
                      <div className="doctor-rating">
                        <span className="stars">★</span>
                        <span>{doctor.rating}</span>
                        <span className="reviews">({doctor.reviews})</span>
                      </div>
                      <span className={`availability ${doctor.available ? 'available' : ''}`}>
                        {doctor.nextAvailable}
                      </span>
                    </div>
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'prescriptions' && (
            <div className="prescriptions-view">
              <header className="view-header">
                <button className="back-btn" onClick={() => setActiveView('home')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
                <h1>Mine recepter</h1>
                <div style={{ width: 40 }}></div>
              </header>

              <div className="prescriptions-list">
                {prescriptions.map(rx => (
                  <div key={rx.id} className={`prescription-card ${rx.status}`}>
                    <div className="rx-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg></div>
                    <div className="rx-info">
                      <h3>{rx.name}</h3>
                      <p>{rx.dosage}</p>
                      <div className="rx-details">
                        <span className="rx-remaining">{rx.remaining} doser tilbage</span>
                        <span className="rx-refill">Forny: {rx.refillDate}</span>
                      </div>
                    </div>
                    {rx.status === 'refill' && !refillSent.includes(rx.id) ? (
                      <button className="refill-btn" onClick={() => handleRefill(rx.id)}>Forny</button>
                    ) : (
                      <svg className="rx-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              <div className="prescriptions-info">
                <div className="info-card">
                  <span className="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
                  <div>
                    <h4>Dit apotek</h4>
                    <p>Steno Apotek, Østergade 15</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'records' && (
            <div className="records-view">
              <header className="view-header">
                <button className="back-btn" onClick={() => setActiveView('home')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
                <h1>Min journal</h1>
                <div style={{ width: 40 }}></div>
              </header>

              <div className="records-tabs">
                <button className={`record-tab ${recordFilter === 'alle' ? 'active' : ''}`} onClick={() => setRecordFilter('alle')}>Alle</button>
                <button className={`record-tab ${recordFilter === 'konsultationer' ? 'active' : ''}`} onClick={() => setRecordFilter('konsultationer')}>Konsultationer</button>
                <button className={`record-tab ${recordFilter === 'prøver' ? 'active' : ''}`} onClick={() => setRecordFilter('prøver')}>Prøver</button>
              </div>

              <div className="records-list">
                {filteredRecords.map(record => (
                  <div key={record.id} className="record-card">
                    <div className="record-date">
                      <span>{record.date}</span>
                    </div>
                    <div className="record-content">
                      <span className="record-type">{record.type}</span>
                      <h3>{record.summary}</h3>
                      <p>{record.doctor}</p>
                    </div>
                    <svg className="record-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'profile' && (
            <div className="profile-view">
              <header className="view-header">
                <button className="back-btn" onClick={() => setActiveView('home')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
                <h1>Min profil</h1>
                <div style={{ width: 40 }}></div>
              </header>

              <div className="profile-header">
                <div className="profile-avatar">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Profile" />
                  <button className="edit-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                </div>
                <h2>Marie Jensen</h2>
                <p>marie.jensen@email.dk</p>
              </div>

              <div className="profile-info">
                <div className="info-row">
                  <span className="info-label">CPR-nummer</span>
                  <span className="info-value">••••••-••••</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Telefon</span>
                  <span className="info-value">+45 12 34 56 78</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Adresse</span>
                  <span className="info-value">Vestergade 45, 2tv</span>
                </div>
                <div className="info-row">
                  <span className="info-label">By</span>
                  <span className="info-value">1000 København K</span>
                </div>
              </div>

              <div className="profile-settings">
                <h3>Indstillinger</h3>
                <div className="setting-row">
                  <div className="setting-info">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                    <span>Notifikationer</span>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="setting-row">
                  <div className="setting-info">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <span>Face ID</span>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="setting-row">
                  <div className="setting-info">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                    <span>Indstillinger</span>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="chevron">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              </div>

              <button className="logout-btn">Log ud</button>
            </div>
          )}

          {activeView === 'booking' && (
            <div className="booking-view">
              {bookingComplete ? (
                <div className="booking-success">
                  <div className="success-animation">
                    <svg className="checkmark" viewBox="0 0 52 52">
                      <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                      <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                  </div>
                  <h2>Booking bekræftet!</h2>
                  <p>Du modtager snart en bekræftelse på SMS og email.</p>
                  <div className="success-details">
                    <div className="success-detail">
                      <span className="detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
                      <span>{selectedDate && new Date(selectedDate).toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                    </div>
                    <div className="success-detail">
                      <span className="detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
                      <span>{selectedTime}</span>
                    </div>
                    <div className="success-detail">
                      <span className="detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                      <span>{selectedDoctor?.name}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <header className="view-header">
                    <button className="back-btn" onClick={() => bookingStep > 1 ? setBookingStep(bookingStep - 1) : setActiveView('home')}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <h1>Book tid</h1>
                    <div style={{ width: 40 }}></div>
                  </header>

                  {/* Progress Steps */}
                  <div className="booking-progress">
                    <div className={`progress-step ${bookingStep >= 1 ? 'active' : ''} ${bookingStep > 1 ? 'completed' : ''}`}>
                      <span className="step-num">{bookingStep > 1 ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> : '1'}</span>
                      <span className="step-label">Læge</span>
                    </div>
                    <div className={`progress-line ${bookingStep > 1 ? 'active' : ''}`}></div>
                    <div className={`progress-step ${bookingStep >= 2 ? 'active' : ''} ${bookingStep > 2 ? 'completed' : ''}`}>
                      <span className="step-num">{bookingStep > 2 ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> : '2'}</span>
                      <span className="step-label">Dato</span>
                    </div>
                    <div className={`progress-line ${bookingStep > 2 ? 'active' : ''}`}></div>
                    <div className={`progress-step ${bookingStep >= 3 ? 'active' : ''}`}>
                      <span className="step-num">3</span>
                      <span className="step-label">Bekræft</span>
                    </div>
                  </div>

                  {bookingStep === 1 && (
                    <div className="step-content">
                      <h2>Vælg læge</h2>
                      <div className="doctor-select-list">
                        {doctors.filter(d => d.available).map(doctor => (
                          <div
                            key={doctor.id}
                            className={`doctor-select-card ${selectedDoctor?.id === doctor.id ? 'selected' : ''}`}
                            onClick={() => setSelectedDoctor(doctor)}
                          >
                            <img src={doctor.image} alt={doctor.name} />
                            <div className="doctor-select-info">
                              <h3>{doctor.name}</h3>
                              <p>{doctor.specialty}</p>
                            </div>
                            <div className="select-check">
                              {selectedDoctor?.id === doctor.id && (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="continue-btn"
                        disabled={!selectedDoctor}
                        onClick={() => setBookingStep(2)}
                      >
                        Fortsæt
                      </button>
                    </div>
                  )}

                  {bookingStep === 2 && (
                    <div className="step-content">
                      <h2>Vælg dato og tid</h2>

                      <div className="date-picker">
                        <h3>Dato</h3>
                        <div className="dates-scroll">
                          {dates.map((date, index) => (
                            <button
                              key={index}
                              className={`date-btn ${selectedDate === date.full ? 'selected' : ''} ${!date.available ? 'disabled' : ''}`}
                              onClick={() => date.available && setSelectedDate(date.full)}
                              disabled={!date.available}
                            >
                              <span className="date-day">{date.day}</span>
                              <span className="date-num">{date.date}</span>
                              <span className="date-month">{date.month}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {selectedDate && (
                        <div className="time-picker">
                          <h3>Ledige tider</h3>
                          <div className="times-grid">
                            {availableTimes.map((time, index) => (
                              <button
                                key={index}
                                className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => setSelectedTime(time)}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <button
                        className="continue-btn"
                        disabled={!selectedDate || !selectedTime}
                        onClick={() => setBookingStep(3)}
                      >
                        Fortsæt
                      </button>
                    </div>
                  )}

                  {bookingStep === 3 && (
                    <div className="step-content">
                      <h2>Bekræft booking</h2>

                      <div className="booking-summary">
                        <div className="summary-doctor">
                          <img src={selectedDoctor?.image} alt={selectedDoctor?.name} />
                          <div>
                            <h3>{selectedDoctor?.name}</h3>
                            <p>{selectedDoctor?.specialty}</p>
                          </div>
                        </div>

                        <div className="summary-details">
                          <div className="summary-item">
                            <span className="item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
                            <div>
                              <span className="item-label">Dato</span>
                              <span className="item-value">{selectedDate && new Date(selectedDate).toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                            </div>
                          </div>
                          <div className="summary-item">
                            <span className="item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
                            <div>
                              <span className="item-label">Tidspunkt</span>
                              <span className="item-value">{selectedTime}</span>
                            </div>
                          </div>
                          <div className="summary-item">
                            <span className="item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                            <div>
                              <span className="item-label">Adresse</span>
                              <span className="item-value">Sundhedsklinikken, Østergade 12</span>
                            </div>
                          </div>
                        </div>

                        <div className="summary-note">
                          <p>Du vil modtage en bekræftelse på SMS og email.</p>
                        </div>
                      </div>

                      <button className="confirm-btn" onClick={resetBooking}>
                        Bekræft booking
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Bottom Navigation */}
          <nav className="bottom-nav">
            <button className={activeView === 'home' ? 'active' : ''} onClick={() => setActiveView('home')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              </svg>
              <span>Hjem</span>
            </button>
            <button className={activeView === 'doctors' ? 'active' : ''} onClick={() => setActiveView('doctors')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>Læger</span>
            </button>
            <button className={activeView === 'booking' ? 'active book-btn' : 'book-btn'} onClick={() => { setActiveView('booking'); setBookingStep(1); }}>
              <div className="book-btn-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
              <span>Book</span>
            </button>
            <button className={activeView === 'prescriptions' || activeView === 'records' ? 'active' : ''} onClick={() => setActiveView('prescriptions')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
              <span>Sundhed</span>
            </button>
            <button className={activeView === 'profile' ? 'active' : ''} onClick={() => setActiveView('profile')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Profil</span>
            </button>
          </nav>
        </div>

        {/* Home Indicator */}
        <div className="home-indicator"></div>
      </div>

      {/* Notifications Sidebar */}
      {showNotifications && (
        <>
          <div className="notification-overlay" onClick={() => setShowNotifications(false)}></div>
          <div className="notifications-panel">
            <div className="notifications-header">
              <h3>Notifikationer</h3>
              <button onClick={() => setShowNotifications(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="notifications-list">
              {notifications.map(notif => (
                <div key={notif.id} className={`notification-item ${notif.unread ? 'unread' : ''}`}>
                  <div className={`notif-icon ${notif.type}`}>
                    {notif.type === 'appointment' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
                    {notif.type === 'prescription' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>}
                    {notif.type === 'result' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>}
                  </div>
                  <div className="notif-content">
                    <h4>{notif.title}</h4>
                    <p>{notif.message}</p>
                    <span className="notif-time">{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Demo Credit */}
      <div className="demo-credit">
        Demo bygget af <Link to="/cases">Nordic Digital</Link>
      </div>
    </div>
  );
}

export default KlinikAppDemo;
