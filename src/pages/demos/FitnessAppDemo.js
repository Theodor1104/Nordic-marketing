import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FitnessAppDemo.css';

function FitnessAppDemo() {
  // Coach state
  const [coachTab, setCoachTab] = useState('clients');
  const [selectedClient, setSelectedClient] = useState(null);
  const [showAssignWorkout, setShowAssignWorkout] = useState(false);

  // Client state
  const [clientTab, setClientTab] = useState('home');
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [checkInComplete, setCheckInComplete] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [workoutComplete, setWorkoutComplete] = useState(false);

  const currentTime = new Date().toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });

  // Coach data
  const clients = [
    { id: 1, name: 'Emma Hansen', initials: 'EH', status: 'active', lastCheckIn: 'I dag', streak: 12, progress: 85, nextWorkout: 'Overkrop Styrke' },
    { id: 2, name: 'Lars Petersen', initials: 'LP', status: 'pending', lastCheckIn: 'I går', streak: 5, progress: 62, nextWorkout: 'HIIT Cardio' },
    { id: 3, name: 'Sofie Andersen', initials: 'SA', status: 'active', lastCheckIn: 'I dag', streak: 21, progress: 94, nextWorkout: 'Underkrop Power' },
    { id: 4, name: 'Mikkel Jensen', initials: 'MJ', status: 'inactive', lastCheckIn: '3 dage siden', streak: 0, progress: 34, nextWorkout: 'Kom i gang' },
  ];

  const coachStats = {
    totalClients: 12,
    activeToday: 8,
    checkInsToday: 6,
    avgProgress: 78
  };

  const workoutTemplates = [
    { id: 1, name: 'Overkrop Styrke', type: 'Styrke', duration: '45 min', exercises: 6, color: '#6366f1' },
    { id: 2, name: 'HIIT Cardio', type: 'Cardio', duration: '30 min', exercises: 5, color: '#ef4444' },
    { id: 3, name: 'Underkrop Power', type: 'Styrke', duration: '50 min', exercises: 6, color: '#8b5cf6' },
    { id: 4, name: 'Core & Mobility', type: 'Core', duration: '35 min', exercises: 8, color: '#10b981' },
    { id: 5, name: 'Full Body', type: 'Styrke', duration: '55 min', exercises: 8, color: '#f59e0b' },
  ];

  // Client data
  const clientProfile = {
    name: 'Emma',
    coachName: 'Thomas Nielsen',
    coachInitials: 'TN',
    streak: 12,
    weeklyGoal: 4,
    weeklyDone: 3
  };

  const assignedWorkouts = [
    {
      id: 1,
      name: 'Overkrop Styrke',
      type: 'Styrke',
      duration: '45 min',
      calories: 320,
      color: '#6366f1',
      scheduled: 'I dag',
      exercises: [
        { name: 'Bænkpres', sets: 4, reps: 10, rest: 90 },
        { name: 'Skulderpres', sets: 4, reps: 12, rest: 60 },
        { name: 'Rows', sets: 4, reps: 12, rest: 60 },
        { name: 'Tricep Dips', sets: 3, reps: 15, rest: 45 },
        { name: 'Bicep Curls', sets: 3, reps: 12, rest: 45 },
        { name: 'Face Pulls', sets: 3, reps: 15, rest: 45 }
      ]
    },
    {
      id: 2,
      name: 'Core & Mobility',
      type: 'Core',
      duration: '35 min',
      calories: 180,
      color: '#10b981',
      scheduled: 'I morgen',
      exercises: [
        { name: 'Planke', sets: 3, reps: '60s', rest: 30 },
        { name: 'Dead Bug', sets: 3, reps: 12, rest: 30 },
        { name: 'Bird Dog', sets: 3, reps: 10, rest: 30 },
        { name: 'Hip Circles', sets: 2, reps: 10, rest: 20 }
      ]
    }
  ];

  const weekDays = [
    { day: 'Man', done: true },
    { day: 'Tir', done: true },
    { day: 'Ons', done: false },
    { day: 'Tor', done: true },
    { day: 'Fre', done: false },
    { day: 'Lør', done: false },
    { day: 'Søn', done: false }
  ];

  // Workout handlers
  const startWorkout = (workout) => {
    setActiveWorkout(workout);
    setCurrentExerciseIndex(0);
    setCompletedExercises([]);
    setSelectedWorkout(null);
  };

  const completeExercise = () => {
    setCompletedExercises([...completedExercises, currentExerciseIndex]);
    if (currentExerciseIndex < activeWorkout.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      setWorkoutComplete(true);
    }
  };

  const finishWorkout = () => {
    setActiveWorkout(null);
    setWorkoutComplete(false);
    setCurrentExerciseIndex(0);
    setCompletedExercises([]);
  };

  // Check-in handler
  const submitCheckIn = () => {
    setCheckInComplete(true);
    setTimeout(() => {
      setShowCheckIn(false);
      setCheckInComplete(false);
    }, 2000);
  };

  return (
    <div className="fitness-demo">
      {/* Back Button */}
      <Link to="/cases" className="fitness-back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Tilbage
      </Link>

      <div className="demo-header">
        <h1>FitCoach Pro</h1>
        <p>Personlig træning platform for coaches og klienter</p>
      </div>

      <div className="phones-container">
        {/* COACH PHONE */}
        <div className="phone-wrapper">
          <span className="phone-label">Coach App</span>
          <div className="phone-frame coach-phone">
            <div className="phone-notch">
              <div className="notch-speaker"></div>
              <div className="notch-camera"></div>
            </div>

            <div className="status-bar">
              <span className="status-time">{currentTime}</span>
              <div className="status-icons">
                <svg className="signal-icon" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="16" width="3" height="6" rx="1"/>
                  <rect x="7" y="12" width="3" height="10" rx="1"/>
                  <rect x="12" y="8" width="3" height="14" rx="1"/>
                  <rect x="17" y="4" width="3" height="18" rx="1"/>
                </svg>
                <div className="battery-icon">
                  <div className="battery-level" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="phone-screen">
              <div className="app-content">
                {/* Client Detail View */}
                {selectedClient && !showAssignWorkout && (
                  <div className="client-detail-view">
                    <div className="detail-header">
                      <button className="back-btn" onClick={() => setSelectedClient(null)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                      </button>
                      <h2>Klient</h2>
                    </div>

                    <div className="client-profile-card">
                      <div className="client-avatar large">{selectedClient.initials}</div>
                      <h3>{selectedClient.name}</h3>
                      <span className={`status-badge ${selectedClient.status}`}>
                        {selectedClient.status === 'active' ? 'Aktiv' : selectedClient.status === 'pending' ? 'Afventer' : 'Inaktiv'}
                      </span>
                    </div>

                    <div className="client-stats-grid">
                      <div className="stat-card">
                        <span className="stat-value">{selectedClient.streak}</span>
                        <span className="stat-label">Dages streak</span>
                      </div>
                      <div className="stat-card">
                        <span className="stat-value">{selectedClient.progress}%</span>
                        <span className="stat-label">Fremgang</span>
                      </div>
                    </div>

                    <div className="section-card">
                      <h4>Seneste aktivitet</h4>
                      <div className="activity-item">
                        <div className="activity-icon check">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <div className="activity-info">
                          <p>Fuldførte Overkrop Styrke</p>
                          <span>I går kl. 08:30</span>
                        </div>
                      </div>
                      <div className="activity-item">
                        <div className="activity-icon checkin">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                          </svg>
                        </div>
                        <div className="activity-info">
                          <p>Daglig check-in</p>
                          <span>{selectedClient.lastCheckIn}</span>
                        </div>
                      </div>
                    </div>

                    <button className="primary-btn" onClick={() => setShowAssignWorkout(true)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                      Tildel træning
                    </button>
                  </div>
                )}

                {/* Assign Workout Modal */}
                {showAssignWorkout && (
                  <div className="assign-workout-view">
                    <div className="detail-header">
                      <button className="back-btn" onClick={() => setShowAssignWorkout(false)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                      </button>
                      <h2>Tildel træning</h2>
                    </div>

                    <p className="assign-subtitle">Vælg træning til {selectedClient?.name}</p>

                    <div className="workout-templates-list">
                      {workoutTemplates.map(template => (
                        <div
                          key={template.id}
                          className="workout-template-card"
                          onClick={() => {
                            setShowAssignWorkout(false);
                            setSelectedClient(null);
                          }}
                        >
                          <div className="template-color" style={{ background: template.color }}></div>
                          <div className="template-info">
                            <h4>{template.name}</h4>
                            <div className="template-meta">
                              <span>{template.type}</span>
                              <span>{template.duration}</span>
                              <span>{template.exercises} øvelser</span>
                            </div>
                          </div>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-icon">
                            <path d="M9 18l6-6-6-6"/>
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Coach Views */}
                {!selectedClient && !showAssignWorkout && (
                  <>
                    {coachTab === 'clients' && (
                      <div className="tab-content">
                        <div className="tab-header">
                          <h1>Mine klienter</h1>
                          <p>{coachStats.totalClients} klienter i alt</p>
                        </div>

                        <div className="quick-stats">
                          <div className="quick-stat">
                            <span className="qs-value">{coachStats.activeToday}</span>
                            <span className="qs-label">Aktive i dag</span>
                          </div>
                          <div className="quick-stat">
                            <span className="qs-value">{coachStats.checkInsToday}</span>
                            <span className="qs-label">Check-ins</span>
                          </div>
                          <div className="quick-stat">
                            <span className="qs-value">{coachStats.avgProgress}%</span>
                            <span className="qs-label">Gns. fremgang</span>
                          </div>
                        </div>

                        <div className="clients-list">
                          {clients.map(client => (
                            <div
                              key={client.id}
                              className="client-card"
                              onClick={() => setSelectedClient(client)}
                            >
                              <div className="client-avatar">{client.initials}</div>
                              <div className="client-info">
                                <h4>{client.name}</h4>
                                <p>Sidst: {client.lastCheckIn}</p>
                              </div>
                              <div className="client-status">
                                <div className={`status-dot ${client.status}`}></div>
                                <span className="streak-badge">{client.streak} dage</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {coachTab === 'programs' && (
                      <div className="tab-content">
                        <div className="tab-header">
                          <h1>Programmer</h1>
                          <p>Dine træningstemplates</p>
                        </div>

                        <div className="programs-list">
                          {workoutTemplates.map(template => (
                            <div key={template.id} className="program-card">
                              <div className="program-color" style={{ background: template.color }}></div>
                              <div className="program-info">
                                <h4>{template.name}</h4>
                                <div className="program-meta">
                                  <span>{template.type}</span>
                                  <span>{template.duration}</span>
                                  <span>{template.exercises} øvelser</span>
                                </div>
                              </div>
                              <button className="edit-btn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>

                        <button className="primary-btn">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12h14"/>
                          </svg>
                          Opret nyt program
                        </button>
                      </div>
                    )}

                    {coachTab === 'messages' && (
                      <div className="tab-content">
                        <div className="tab-header">
                          <h1>Beskeder</h1>
                          <p>Kommuniker med klienter</p>
                        </div>

                        <div className="messages-list">
                          {clients.slice(0, 3).map(client => (
                            <div key={client.id} className="message-preview">
                              <div className="client-avatar">{client.initials}</div>
                              <div className="message-content">
                                <div className="message-header">
                                  <h4>{client.name}</h4>
                                  <span>10:30</span>
                                </div>
                                <p>Hej! Jeg har lige gennemført træningen...</p>
                              </div>
                              {client.status === 'active' && <div className="unread-dot"></div>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Coach Bottom Nav */}
                    <nav className="bottom-nav">
                      <button className={`nav-item ${coachTab === 'clients' ? 'active' : ''}`} onClick={() => setCoachTab('clients')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>Klienter</span>
                      </button>
                      <button className={`nav-item ${coachTab === 'programs' ? 'active' : ''}`} onClick={() => setCoachTab('programs')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                        </svg>
                        <span>Programmer</span>
                      </button>
                      <button className={`nav-item ${coachTab === 'messages' ? 'active' : ''}`} onClick={() => setCoachTab('messages')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        <span>Beskeder</span>
                      </button>
                    </nav>
                  </>
                )}
              </div>
            </div>
            <div className="home-indicator"></div>
          </div>
        </div>

        {/* CLIENT PHONE */}
        <div className="phone-wrapper">
          <span className="phone-label">Klient App</span>
          <div className="phone-frame client-phone">
            <div className="phone-notch">
              <div className="notch-speaker"></div>
              <div className="notch-camera"></div>
            </div>

            <div className="status-bar">
              <span className="status-time">{currentTime}</span>
              <div className="status-icons">
                <svg className="signal-icon" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="16" width="3" height="6" rx="1"/>
                  <rect x="7" y="12" width="3" height="10" rx="1"/>
                  <rect x="12" y="8" width="3" height="14" rx="1"/>
                  <rect x="17" y="4" width="3" height="18" rx="1"/>
                </svg>
                <div className="battery-icon">
                  <div className="battery-level" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>

            <div className="phone-screen">
              <div className="app-content">
                {/* Check-in Modal */}
                {showCheckIn && (
                  <div className="checkin-modal">
                    <div className="detail-header">
                      <button className="back-btn" onClick={() => setShowCheckIn(false)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                      </button>
                      <h2>Daglig check-in</h2>
                    </div>

                    {checkInComplete ? (
                      <div className="checkin-success">
                        <div className="success-circle">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <h3>Check-in sendt!</h3>
                        <p>Din coach kan nu se din status</p>
                      </div>
                    ) : (
                      <div className="checkin-form">
                        <div className="checkin-question">
                          <label>Hvordan har du det i dag?</label>
                          <div className="mood-selector">
                            <button className="mood-btn">Træt</button>
                            <button className="mood-btn active">God</button>
                            <button className="mood-btn">Super</button>
                          </div>
                        </div>

                        <div className="checkin-question">
                          <label>Søvnkvalitet (timer)</label>
                          <div className="sleep-selector">
                            {[5, 6, 7, 8, 9].map(h => (
                              <button key={h} className={`sleep-btn ${h === 7 ? 'active' : ''}`}>{h}</button>
                            ))}
                          </div>
                        </div>

                        <div className="checkin-question">
                          <label>Vægt (kg)</label>
                          <div className="weight-input">
                            <input type="number" placeholder="75.5" defaultValue="75.5" />
                            <span>kg</span>
                          </div>
                        </div>

                        <div className="checkin-question">
                          <label>Vandindtag i dag</label>
                          <div className="hydration-selector">
                            {[1, 2, 3, 4, 5].map(l => (
                              <button key={l} className={`hydration-btn ${l <= 3 ? 'active' : ''}`}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2c-5.33 8-8 12-8 16a8 8 0 1 0 16 0c0-4-2.67-8-8-16z"/>
                                </svg>
                              </button>
                            ))}
                          </div>
                          <span className="hydration-label">3L / 5L mål</span>
                        </div>

                        <div className="checkin-question">
                          <label>Ømhed i kropsdele</label>
                          <div className="body-parts-grid">
                            <button className="body-part-btn">
                              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="20" cy="10" r="6"/>
                                <path d="M20 16v8M12 20h16M20 24v10"/>
                              </svg>
                              <span>Nakke</span>
                            </button>
                            <button className="body-part-btn active">
                              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="12" y="8" width="16" height="20" rx="4"/>
                                <line x1="20" y1="14" x2="20" y2="22"/>
                              </svg>
                              <span>Ryg</span>
                            </button>
                            <button className="body-part-btn active">
                              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 10c4 0 6 4 6 10s-2 10-6 10"/>
                                <path d="M26 10c-4 0-6 4-6 10s2 10 6 10"/>
                              </svg>
                              <span>Bryst</span>
                            </button>
                            <button className="body-part-btn">
                              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 16c0-4 4-6 10-6s10 2 10 6"/>
                                <path d="M8 20h6M26 20h6"/>
                              </svg>
                              <span>Skuldre</span>
                            </button>
                            <button className="body-part-btn">
                              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 10v20M28 10v20"/>
                                <ellipse cx="12" cy="15" rx="4" ry="3"/>
                                <ellipse cx="28" cy="15" rx="4" ry="3"/>
                              </svg>
                              <span>Arme</span>
                            </button>
                            <button className="body-part-btn active">
                              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 8v24M26 8v24"/>
                                <ellipse cx="14" cy="18" rx="4" ry="6"/>
                                <ellipse cx="26" cy="18" rx="4" ry="6"/>
                              </svg>
                              <span>Ben</span>
                            </button>
                          </div>
                        </div>

                        <div className="checkin-question">
                          <label>Noter til coach</label>
                          <textarea className="checkin-notes" placeholder="Skriv eventuelle noter..." rows="2"></textarea>
                        </div>

                        <button className="primary-btn" onClick={submitCheckIn}>
                          Send check-in
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Workout Detail Modal */}
                {selectedWorkout && !activeWorkout && (
                  <div className="workout-detail-view">
                    <div className="workout-hero" style={{ background: `linear-gradient(135deg, ${selectedWorkout.color}, ${selectedWorkout.color}cc)` }}>
                      <button className="back-btn light" onClick={() => setSelectedWorkout(null)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                      </button>
                      <div className="workout-hero-content">
                        <span className="workout-type-badge">{selectedWorkout.type}</span>
                        <h2>{selectedWorkout.name}</h2>
                        <div className="workout-meta">
                          <span>{selectedWorkout.duration}</span>
                          <span>{selectedWorkout.calories} kcal</span>
                          <span>{selectedWorkout.exercises.length} øvelser</span>
                        </div>
                      </div>
                    </div>

                    <div className="workout-exercises">
                      <h3>Øvelser</h3>
                      {selectedWorkout.exercises.map((ex, idx) => (
                        <div key={idx} className="exercise-item">
                          <span className="exercise-num">{idx + 1}</span>
                          <div className="exercise-info">
                            <h4>{ex.name}</h4>
                            <span>{ex.sets} sæt x {ex.reps}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="start-btn" style={{ background: selectedWorkout.color }} onClick={() => startWorkout(selectedWorkout)}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                      Start træning
                    </button>
                  </div>
                )}

                {/* Active Workout View */}
                {activeWorkout && !workoutComplete && (
                  <div className="active-workout-view" style={{ background: `linear-gradient(180deg, ${activeWorkout.color} 0%, #0a0a0f 40%)` }}>
                    <div className="active-header">
                      <button className="back-btn light" onClick={finishWorkout}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                      </button>
                      <div className="active-progress">
                        <span>{currentExerciseIndex + 1} / {activeWorkout.exercises.length}</span>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${((currentExerciseIndex + 1) / activeWorkout.exercises.length) * 100}%` }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="current-exercise">
                      <h2>{activeWorkout.exercises[currentExerciseIndex].name}</h2>
                      <div className="exercise-details">
                        <div className="detail-box">
                          <span className="detail-value">{activeWorkout.exercises[currentExerciseIndex].sets}</span>
                          <span className="detail-label">Sæt</span>
                        </div>
                        <div className="detail-box">
                          <span className="detail-value">{activeWorkout.exercises[currentExerciseIndex].reps}</span>
                          <span className="detail-label">Reps</span>
                        </div>
                        <div className="detail-box">
                          <span className="detail-value">{activeWorkout.exercises[currentExerciseIndex].rest}s</span>
                          <span className="detail-label">Hvil</span>
                        </div>
                      </div>
                    </div>

                    <button className="complete-btn" onClick={completeExercise}>
                      {currentExerciseIndex < activeWorkout.exercises.length - 1 ? 'Færdig - Næste' : 'Afslut træning'}
                    </button>

                    <div className="exercise-list-mini">
                      {activeWorkout.exercises.map((ex, idx) => (
                        <div key={idx} className={`mini-exercise ${idx === currentExerciseIndex ? 'current' : ''} ${completedExercises.includes(idx) ? 'done' : ''}`}>
                          <span>{idx + 1}</span>
                          <span>{ex.name}</span>
                          {completedExercises.includes(idx) && (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="check-icon">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Workout Complete */}
                {workoutComplete && (
                  <div className="workout-complete-view">
                    <div className="complete-animation">
                      <div className="complete-circle" style={{ borderColor: activeWorkout?.color }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    </div>
                    <h2>Godt klaret!</h2>
                    <p className="complete-subtitle">{activeWorkout?.name} fuldført</p>

                    <div className="complete-stats">
                      <div className="complete-stat">
                        <span className="stat-value">{activeWorkout?.exercises.length}</span>
                        <span className="stat-label">Øvelser</span>
                      </div>
                      <div className="complete-stat">
                        <span className="stat-value">{activeWorkout?.duration}</span>
                        <span className="stat-label">Tid</span>
                      </div>
                      <div className="complete-stat">
                        <span className="stat-value">{activeWorkout?.calories}</span>
                        <span className="stat-label">Kcal</span>
                      </div>
                    </div>

                    <div className="streak-message">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="fire-icon">
                        <path d="M12 2c.9 1.6 2 2.7 3.2 3.8C17.7 8 19 11 19 14c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-2.5.8-4.7 2.3-6.5.4-.5.8-.9 1.2-1.3.4-.4.8-.8 1.1-1.2C10.3 4.3 11.1 3.2 12 2z"/>
                      </svg>
                      <p>12 dages streak! Bliv ved!</p>
                    </div>

                    <button className="primary-btn" onClick={finishWorkout}>Færdig</button>
                  </div>
                )}

                {/* Main Client Views */}
                {!showCheckIn && !selectedWorkout && !activeWorkout && !workoutComplete && (
                  <>
                    {clientTab === 'home' && (
                      <div className="tab-content">
                        <div className="client-home-header">
                          <div className="greeting">
                            <p>God morgen</p>
                            <h1>Hej, {clientProfile.name}!</h1>
                          </div>
                          <button className="checkin-btn" onClick={() => setShowCheckIn(true)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="9 11 12 14 22 4"/>
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                            </svg>
                          </button>
                        </div>

                        <div className="coach-card">
                          <div className="coach-avatar">{clientProfile.coachInitials}</div>
                          <div className="coach-info">
                            <span>Din coach</span>
                            <h4>{clientProfile.coachName}</h4>
                          </div>
                          <button className="message-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                          </button>
                        </div>

                        <div className="week-progress-card">
                          <div className="week-header">
                            <h3>Denne uge</h3>
                            <span>{clientProfile.weeklyDone}/{clientProfile.weeklyGoal} træninger</span>
                          </div>
                          <div className="week-days">
                            {weekDays.map((d, idx) => (
                              <div key={idx} className={`week-day ${d.done ? 'done' : ''}`}>
                                <div className="day-circle">
                                  {d.done && (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                      <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                  )}
                                </div>
                                <span>{d.day}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="section-header">
                          <h3>Dine træninger</h3>
                        </div>

                        <div className="workouts-list">
                          {assignedWorkouts.map(workout => (
                            <div
                              key={workout.id}
                              className="workout-card"
                              onClick={() => setSelectedWorkout(workout)}
                            >
                              <div className="workout-color" style={{ background: workout.color }}></div>
                              <div className="workout-info">
                                <span className="workout-schedule">{workout.scheduled}</span>
                                <h4>{workout.name}</h4>
                                <div className="workout-meta-small">
                                  <span>{workout.duration}</span>
                                  <span>{workout.exercises.length} øvelser</span>
                                </div>
                              </div>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-icon">
                                <path d="M9 18l6-6-6-6"/>
                              </svg>
                            </div>
                          ))}
                        </div>

                        <div className="streak-card">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="streak-icon">
                            <path d="M12 2c.9 1.6 2 2.7 3.2 3.8C17.7 8 19 11 19 14c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-2.5.8-4.7 2.3-6.5.4-.5.8-.9 1.2-1.3.4-.4.8-.8 1.1-1.2C10.3 4.3 11.1 3.2 12 2z"/>
                          </svg>
                          <div className="streak-info">
                            <span className="streak-value">{clientProfile.streak} dage</span>
                            <span className="streak-label">i træk</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {clientTab === 'progress' && (
                      <div className="tab-content">
                        <div className="tab-header">
                          <h1>Fremgang</h1>
                          <p>Se dine resultater</p>
                        </div>

                        <div className="progress-ring-card">
                          <div className="progress-ring">
                            <svg viewBox="0 0 120 120">
                              <circle cx="60" cy="60" r="50" fill="none" stroke="#1a1a24" strokeWidth="10"/>
                              <circle cx="60" cy="60" r="50" fill="none" stroke="#10b981" strokeWidth="10"
                                strokeDasharray="314" strokeDashoffset="78.5" strokeLinecap="round"
                                transform="rotate(-90 60 60)"/>
                            </svg>
                            <div className="ring-center">
                              <span className="ring-value">75%</span>
                              <span className="ring-label">af mål</span>
                            </div>
                          </div>
                          <div className="ring-stats">
                            <div className="ring-stat">
                              <span className="rs-value">12</span>
                              <span className="rs-label">Træninger</span>
                            </div>
                            <div className="ring-stat">
                              <span className="rs-value">540</span>
                              <span className="rs-label">Minutter</span>
                            </div>
                          </div>
                        </div>

                        <div className="section-card">
                          <h3>Achievements</h3>
                          <div className="achievements-grid">
                            <div className="achievement unlocked">
                              <div className="achievement-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2c.9 1.6 2 2.7 3.2 3.8C17.7 8 19 11 19 14c0 3.9-3.1 7-7 7s-7-3.1-7-7c0-2.5.8-4.7 2.3-6.5.4-.5.8-.9 1.2-1.3.4-.4.8-.8 1.1-1.2C10.3 4.3 11.1 3.2 12 2z"/>
                                </svg>
                              </div>
                              <span>7 Dage</span>
                            </div>
                            <div className="achievement unlocked">
                              <div className="achievement-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                </svg>
                              </div>
                              <span>Første 10</span>
                            </div>
                            <div className="achievement">
                              <div className="achievement-icon locked">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M5 10V7a7 7 0 0 1 14 0v3M8.5 10h7a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4z"/>
                                </svg>
                              </div>
                              <span>30 Dage</span>
                            </div>
                            <div className="achievement">
                              <div className="achievement-icon locked">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                  <circle cx="12" cy="8" r="6"/>
                                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                                </svg>
                              </div>
                              <span>100 Timer</span>
                            </div>
                          </div>
                        </div>

                        <div className="section-card">
                          <h3>Personlige rekorder</h3>
                          <div className="records-list">
                            <div className="record-item">
                              <div className="record-info">
                                <span className="record-name">Bænkpres</span>
                                <span className="record-date">12. mar 2026</span>
                              </div>
                              <span className="record-value">85 kg</span>
                            </div>
                            <div className="record-item">
                              <div className="record-info">
                                <span className="record-name">Squat</span>
                                <span className="record-date">8. mar 2026</span>
                              </div>
                              <span className="record-value">110 kg</span>
                            </div>
                            <div className="record-item">
                              <div className="record-info">
                                <span className="record-name">Dødløft</span>
                                <span className="record-date">5. mar 2026</span>
                              </div>
                              <span className="record-value">130 kg</span>
                            </div>
                          </div>
                        </div>

                        <div className="section-card">
                          <h3>Månedsoversigt</h3>
                          <div className="month-bars">
                            {[40, 65, 80, 55, 90, 75, 60].map((h, i) => (
                              <div key={i} className="bar-container">
                                <div className="bar" style={{ height: `${h}%` }}></div>
                                <span>U{i + 1}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {clientTab === 'profile' && (
                      <div className="tab-content">
                        <div className="profile-header">
                          <div className="profile-avatar">EH</div>
                          <h2>Emma Hansen</h2>
                          <p>emma@email.dk</p>
                        </div>

                        <div className="profile-stats">
                          <div className="p-stat">
                            <span className="ps-value">47</span>
                            <span className="ps-label">Træninger</span>
                          </div>
                          <div className="p-stat">
                            <span className="ps-value">12</span>
                            <span className="ps-label">Streak</span>
                          </div>
                          <div className="p-stat">
                            <span className="ps-value">85%</span>
                            <span className="ps-label">Fremgang</span>
                          </div>
                        </div>

                        <div className="section-card">
                          <h3>Indstillinger</h3>
                          <div className="settings-list">
                            <div className="setting-item">
                              <span>Notifikationer</span>
                              <div className="toggle active"></div>
                            </div>
                            <div className="setting-item">
                              <span>Påmindelser</span>
                              <div className="toggle active"></div>
                            </div>
                            <div className="setting-item">
                              <span>Mørk tilstand</span>
                              <div className="toggle"></div>
                            </div>
                          </div>
                        </div>

                        <button className="logout-btn">Log ud</button>
                      </div>
                    )}

                    {/* Client Bottom Nav */}
                    <nav className="bottom-nav">
                      <button className={`nav-item ${clientTab === 'home' ? 'active' : ''}`} onClick={() => setClientTab('home')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        <span>Hjem</span>
                      </button>
                      <button className={`nav-item ${clientTab === 'progress' ? 'active' : ''}`} onClick={() => setClientTab('progress')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 20V10M18 20V4M6 20v-4"/>
                        </svg>
                        <span>Fremgang</span>
                      </button>
                      <button className={`nav-item ${clientTab === 'profile' ? 'active' : ''}`} onClick={() => setClientTab('profile')}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <span>Profil</span>
                      </button>
                    </nav>
                  </>
                )}
              </div>
            </div>
            <div className="home-indicator"></div>
          </div>
        </div>
      </div>

      <div className="demo-footer">
        <p>Demo bygget af <Link to="/cases">Nordic Digital</Link></p>
      </div>
    </div>
  );
}

export default FitnessAppDemo;
