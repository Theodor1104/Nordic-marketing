import React, { useState, useEffect, useMemo } from 'react';
import { getMessages, updateMessage, deleteMessageFromDB, clearAllMessages, exportMessages } from '../firebase';
import '../styles/Admin.css';

function Admin() {
  // Authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Navigation
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Data
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedMessages, setSelectedMessages] = useState([]);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, unread, read
  const [filterService, setFilterService] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  // Lead Management
  const [leadFilter, setLeadFilter] = useState('all'); // all, new, contacted, converted, lost
  const [selectedLead, setSelectedLead] = useState(null);
  const [leadNote, setLeadNote] = useState('');

  // Settings
  const [settings, setSettings] = useState({
    emailNotifications: true,
    dailySummary: false,
    autoResponse: false,
    darkMode: false,
    businessName: 'Nordic Marketing',
    businessEmail: 'nordicmarketin@outlook.dk',
    businessPhone: '',
    businessAddress: 'Frederiksberg, København'
  });

  // Activity Log
  const [activityLog, setActivityLog] = useState([]);

  // UI States
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [notification, setNotification] = useState(null);

  // Check if already authenticated
  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    // Load saved settings
    const savedSettings = localStorage.getItem('adminSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
    // Load activity log
    const savedLog = localStorage.getItem('activityLog');
    if (savedLog) {
      setActivityLog(JSON.parse(savedLog));
    }
  }, []);

  // Load messages from database
  useEffect(() => {
    if (isAuthenticated) {
      loadMessages();
      const interval = setInterval(loadMessages, 10000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  // Save settings when changed
  useEffect(() => {
    localStorage.setItem('adminSettings', JSON.stringify(settings));
  }, [settings]);

  const loadMessages = async () => {
    const savedMessages = await getMessages();
    setMessages(savedMessages);
  };

  const addActivity = (action, details) => {
    const newActivity = {
      id: Date.now(),
      action,
      details,
      timestamp: new Date().toISOString()
    };
    const updatedLog = [newActivity, ...activityLog].slice(0, 100);
    setActivityLog(updatedLog);
    localStorage.setItem('activityLog', JSON.stringify(updatedLog));
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '1234') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setError('');
      addActivity('login', 'Admin logged ind');
    } else {
      setError('Forkert kodeord');
    }
  };

  const handleLogout = () => {
    addActivity('logout', 'Admin logged ud');
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
  };

  const markAsRead = async (id) => {
    await updateMessage(id, { read: true });
    if (selectedMessage?.id === id) {
      setSelectedMessage({ ...selectedMessage, read: true });
    }
    await loadMessages();
  };

  const markAllAsRead = async () => {
    const unreadMessages = messages.filter(m => !m.read);
    for (const msg of unreadMessages) {
      await updateMessage(msg.id, { read: true });
    }
    await loadMessages();
    addActivity('mark_all_read', `${unreadMessages.length} beskeder markeret som læst`);
    showNotification(`${unreadMessages.length} beskeder markeret som læst`);
  };

  const deleteMessage = async (id) => {
    if (window.confirm('Er du sikker på du vil slette denne besked?')) {
      await deleteMessageFromDB(id);
      setSelectedMessage(null);
      await loadMessages();
      addActivity('delete', 'Besked slettet');
      showNotification('Besked slettet');
    }
  };

  const deleteSelectedMessages = async () => {
    if (selectedMessages.length === 0) return;
    if (window.confirm(`Er du sikker på du vil slette ${selectedMessages.length} beskeder?`)) {
      for (const id of selectedMessages) {
        await deleteMessageFromDB(id);
      }
      setSelectedMessages([]);
      setSelectedMessage(null);
      await loadMessages();
      addActivity('bulk_delete', `${selectedMessages.length} beskeder slettet`);
      showNotification(`${selectedMessages.length} beskeder slettet`);
    }
  };

  const markAsLead = async (id) => {
    const message = messages.find(m => m.id === id);
    const newIsLead = !message?.isLead;
    await updateMessage(id, { isLead: newIsLead });
    if (selectedMessage?.id === id) {
      setSelectedMessage({ ...selectedMessage, isLead: newIsLead });
    }
    await loadMessages();
    addActivity(newIsLead ? 'mark_lead' : 'unmark_lead', `${message.name} ${newIsLead ? 'markeret som lead' : 'fjernet som lead'}`);
    showNotification(newIsLead ? 'Markeret som lead' : 'Fjernet som lead');
  };

  const updateLeadStatus = async (id, status) => {
    await updateMessage(id, { leadStatus: status });
    if (selectedMessage?.id === id) {
      setSelectedMessage({ ...selectedMessage, leadStatus: status });
    }
    if (selectedLead?.id === id) {
      setSelectedLead({ ...selectedLead, leadStatus: status });
    }
    await loadMessages();
    addActivity('lead_status', `Lead status ændret til ${status}`);
    showNotification(`Lead status opdateret til ${status}`);
  };

  const addLeadNote = async (id) => {
    if (!leadNote.trim()) return;
    const message = messages.find(m => m.id === id);
    const existingNotes = message?.notes || [];
    const newNotes = [...existingNotes, {
      id: Date.now(),
      text: leadNote,
      timestamp: new Date().toISOString()
    }];
    await updateMessage(id, { notes: newNotes });
    if (selectedLead?.id === id) {
      setSelectedLead({ ...selectedLead, notes: newNotes });
    }
    setLeadNote('');
    await loadMessages();
    addActivity('add_note', `Note tilføjet til ${message.name}`);
    showNotification('Note tilføjet');
  };

  const archiveMessage = async (id) => {
    await updateMessage(id, { archived: true, read: true });
    setSelectedMessage(null);
    await loadMessages();
    addActivity('archive', 'Besked arkiveret');
    showNotification('Besked arkiveret');
  };

  const toggleMessageSelection = (id) => {
    setSelectedMessages(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const selectAllMessages = () => {
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(filteredMessages.map(m => m.id));
    }
  };

  // Computed Stats
  const totalMessages = messages.filter(m => !m.archived).length;
  const unreadMessages = messages.filter(m => !m.read && !m.archived).length;
  const leads = messages.filter(m => m.isLead).length;
  const thisWeek = messages.filter(m => {
    const msgDate = new Date(m.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return msgDate > weekAgo && !m.archived;
  }).length;

  const conversionRate = totalMessages > 0 ? ((leads / totalMessages) * 100).toFixed(1) : 0;

  // Filtered and sorted messages
  const filteredMessages = useMemo(() => {
    let result = messages.filter(m => !m.archived);

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(m =>
        m.name?.toLowerCase().includes(query) ||
        m.email?.toLowerCase().includes(query) ||
        m.company?.toLowerCase().includes(query) ||
        m.message?.toLowerCase().includes(query)
      );
    }

    // Filter by status
    if (filterStatus === 'unread') {
      result = result.filter(m => !m.read);
    } else if (filterStatus === 'read') {
      result = result.filter(m => m.read);
    }

    // Filter by service
    if (filterService !== 'all') {
      result = result.filter(m => m.service === filterService);
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'date-asc':
          return new Date(a.date) - new Date(b.date);
        case 'name-asc':
          return (a.name || '').localeCompare(b.name || '');
        case 'name-desc':
          return (b.name || '').localeCompare(a.name || '');
        case 'date-desc':
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    return result;
  }, [messages, searchQuery, filterStatus, filterService, sortBy]);

  // Filtered leads
  const filteredLeads = useMemo(() => {
    let result = messages.filter(m => m.isLead);

    if (leadFilter !== 'all') {
      result = result.filter(m => (m.leadStatus || 'new') === leadFilter);
    }

    return result.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [messages, leadFilter]);

  // Analytics data
  const analyticsData = useMemo(() => {
    const last7Days = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const count = messages.filter(m => m.date?.startsWith(dateStr)).length;
      last7Days.push({
        date: date.toLocaleDateString('da-DK', { weekday: 'short' }),
        count
      });
    }

    const serviceBreakdown = {};
    messages.forEach(m => {
      const service = m.service || 'Andet';
      serviceBreakdown[service] = (serviceBreakdown[service] || 0) + 1;
    });

    const leadStatuses = {
      new: messages.filter(m => m.isLead && (!m.leadStatus || m.leadStatus === 'new')).length,
      contacted: messages.filter(m => m.isLead && m.leadStatus === 'contacted').length,
      inProgress: messages.filter(m => m.isLead && m.leadStatus === 'inProgress').length,
      converted: messages.filter(m => m.isLead && m.leadStatus === 'converted').length,
      lost: messages.filter(m => m.isLead && m.leadStatus === 'lost').length
    };

    return { last7Days, serviceBreakdown, leadStatuses };
  }, [messages]);

  // Services list for filters
  const services = ['Meta Ads', 'Google Ads', 'SEO', 'Hjemmeside', 'Komplet pakke', 'Andet'];

  // Lead status options
  const leadStatusOptions = [
    { value: 'new', label: 'Ny', color: '#3b82f6' },
    { value: 'contacted', label: 'Kontaktet', color: '#f59e0b' },
    { value: 'inProgress', label: 'I gang', color: '#8b5cf6' },
    { value: 'converted', label: 'Konverteret', color: '#10b981' },
    { value: 'lost', label: 'Tabt', color: '#ef4444' }
  ];

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <span className="logo-text">Nordic</span>
              <span className="logo-accent">Marketing</span>
            </div>
            <h1>Admin Panel</h1>
            <p>Indtast kodeord for at fortsætte</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="password">Kodeord</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Indtast kodeord"
                autoFocus
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="btn btn-primary btn-full">
              Log ind
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className={`admin-page ${sidebarCollapsed ? 'sidebar-collapsed' : ''} ${settings.darkMode ? 'dark-mode' : ''}`}>
      {/* Notification */}
      {notification && (
        <div className={`admin-notification ${notification.type}`}>
          {notification.type === 'success' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          )}
          {notification.message}
        </div>
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="admin-logo">
            <span className="logo-text">Nordic</span>
            <span className="logo-accent">Marketing</span>
          </div>
          <span className="admin-badge">Admin</span>
        </div>

        <button
          className="sidebar-toggle"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points={sidebarCollapsed ? "9 18 15 12 9 6" : "15 18 9 12 15 6"}/>
          </svg>
        </button>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
            </svg>
            <span>Dashboard</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Beskeder</span>
            {unreadMessages > 0 && <span className="badge">{unreadMessages}</span>}
          </button>
          <button
            className={`nav-item ${activeTab === 'leads' ? 'active' : ''}`}
            onClick={() => setActiveTab('leads')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>Leads</span>
            {leads > 0 && <span className="badge green">{leads}</span>}
          </button>
          <button
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
            <span>Analyse</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Aktivitet</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <span>Indstillinger</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>Log ud</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="admin-main">
        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="admin-content">
            <div className="content-header">
              <div>
                <h1>Dashboard</h1>
                <p>Velkommen tilbage til Nordic Marketing admin panel</p>
              </div>
              <div className="header-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowQuickActions(!showQuickActions)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="1"/>
                    <circle cx="19" cy="12" r="1"/>
                    <circle cx="5" cy="12" r="1"/>
                  </svg>
                  Hurtige handlinger
                </button>
                {showQuickActions && (
                  <div className="quick-actions-menu">
                    <button onClick={markAllAsRead}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 11 12 14 22 4"/>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                      </svg>
                      Marker alle som læst
                    </button>
                    <button onClick={async () => {
                      const data = await exportMessages();
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `nordic-marketing-export-${new Date().toISOString().split('T')[0]}.json`;
                      a.click();
                      showNotification('Data eksporteret');
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Eksporter data
                    </button>
                    <button onClick={() => loadMessages()}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="23 4 23 10 17 10"/>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                      </svg>
                      Opdater data
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-number">{totalMessages}</span>
                  <span className="stat-label">Beskeder i alt</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon orange">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-number">{unreadMessages}</span>
                  <span className="stat-label">Ulæste beskeder</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-number">{leads}</span>
                  <span className="stat-label">Aktive leads</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-number">{thisWeek}</span>
                  <span className="stat-label">Denne uge</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon teal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-number">{conversionRate}%</span>
                  <span className="stat-label">Konverteringsrate</span>
                </div>
              </div>
            </div>

            {/* Mini Chart - Messages last 7 days */}
            <div className="dashboard-grid">
              <div className="chart-card">
                <h3>Beskeder de sidste 7 dage</h3>
                <div className="mini-chart">
                  {analyticsData.last7Days.map((day, i) => (
                    <div key={i} className="chart-bar-container">
                      <div
                        className="chart-bar"
                        style={{ height: `${Math.max(day.count * 20, 4)}px` }}
                      >
                        <span className="chart-value">{day.count}</span>
                      </div>
                      <span className="chart-label">{day.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="chart-card">
                <h3>Service interesse</h3>
                <div className="service-breakdown">
                  {Object.entries(analyticsData.serviceBreakdown).map(([service, count]) => (
                    <div key={service} className="breakdown-item">
                      <div className="breakdown-header">
                        <span>{service}</span>
                        <span className="breakdown-count">{count}</span>
                      </div>
                      <div className="breakdown-bar">
                        <div
                          className="breakdown-fill"
                          style={{ width: `${(count / totalMessages) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent messages */}
            <div className="recent-section">
              <div className="section-header">
                <h2>Seneste henvendelser</h2>
                <button className="btn-link" onClick={() => setActiveTab('messages')}>
                  Se alle
                </button>
              </div>
              <div className="recent-list">
                {messages.length === 0 ? (
                  <div className="empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <p>Ingen beskeder endnu</p>
                    <span>Beskeder fra kontaktformularen vises her</span>
                  </div>
                ) : (
                  messages.filter(m => !m.archived).slice(0, 5).map(msg => (
                    <div
                      key={msg.id}
                      className={`recent-item ${!msg.read ? 'unread' : ''}`}
                      onClick={() => {
                        setSelectedMessage(msg);
                        setActiveTab('messages');
                      }}
                    >
                      <div className="item-avatar">
                        {msg.name?.charAt(0).toUpperCase() || '?'}
                      </div>
                      <div className="item-content">
                        <div className="item-header">
                          <span className="item-name">{msg.name}</span>
                          <span className="item-date">
                            {new Date(msg.date).toLocaleDateString('da-DK')}
                          </span>
                        </div>
                        <p className="item-preview">{msg.message?.substring(0, 60)}...</p>
                      </div>
                      {msg.isLead && <span className="lead-badge">Lead</span>}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {activeTab === 'messages' && (
          <div className="admin-content messages-view">
            <div className="content-header">
              <div>
                <h1>Beskeder</h1>
                <p>{filteredMessages.length} beskeder {filterStatus !== 'all' || filterService !== 'all' ? '(filtreret)' : ''}</p>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="messages-toolbar">
              <div className="search-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Søg i beskeder..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="clear-search" onClick={() => setSearchQuery('')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                )}
              </div>

              <div className="filter-group">
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                  <option value="all">Alle beskeder</option>
                  <option value="unread">Ulæste</option>
                  <option value="read">Læste</option>
                </select>

                <select value={filterService} onChange={(e) => setFilterService(e.target.value)}>
                  <option value="all">Alle services</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="date-desc">Nyeste først</option>
                  <option value="date-asc">Ældste først</option>
                  <option value="name-asc">Navn A-Z</option>
                  <option value="name-desc">Navn Z-A</option>
                </select>
              </div>

              {selectedMessages.length > 0 && (
                <div className="bulk-actions">
                  <span>{selectedMessages.length} valgt</span>
                  <button onClick={deleteSelectedMessages} className="btn btn-danger btn-small">
                    Slet valgte
                  </button>
                  <button onClick={() => setSelectedMessages([])} className="btn btn-secondary btn-small">
                    Annuller
                  </button>
                </div>
              )}
            </div>

            <div className="messages-container">
              <div className="messages-list">
                {filteredMessages.length > 0 && (
                  <div className="select-all-row">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={selectedMessages.length === filteredMessages.length && filteredMessages.length > 0}
                        onChange={selectAllMessages}
                      />
                      <span>Vælg alle</span>
                    </label>
                  </div>
                )}
                {filteredMessages.length === 0 ? (
                  <div className="empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <p>Ingen beskeder fundet</p>
                    {(searchQuery || filterStatus !== 'all' || filterService !== 'all') && (
                      <button
                        className="btn btn-secondary btn-small"
                        onClick={() => {
                          setSearchQuery('');
                          setFilterStatus('all');
                          setFilterService('all');
                        }}
                      >
                        Nulstil filtre
                      </button>
                    )}
                  </div>
                ) : (
                  filteredMessages.map(msg => (
                    <div
                      key={msg.id}
                      className={`message-item ${!msg.read ? 'unread' : ''} ${selectedMessage?.id === msg.id ? 'selected' : ''} ${selectedMessages.includes(msg.id) ? 'checked' : ''}`}
                    >
                      <label className="message-checkbox" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={selectedMessages.includes(msg.id)}
                          onChange={() => toggleMessageSelection(msg.id)}
                        />
                      </label>
                      <div
                        className="message-main"
                        onClick={() => {
                          setSelectedMessage(msg);
                          markAsRead(msg.id);
                        }}
                      >
                        <div className="message-avatar">
                          {msg.name?.charAt(0).toUpperCase() || '?'}
                        </div>
                        <div className="message-content">
                          <div className="message-header">
                            <span className="message-name">{msg.name}</span>
                            {msg.isLead && <span className="lead-badge small">Lead</span>}
                          </div>
                          <span className="message-email">{msg.email}</span>
                          <p className="message-preview">{msg.message?.substring(0, 50)}...</p>
                        </div>
                        <span className="message-date">
                          {new Date(msg.date).toLocaleDateString('da-DK')}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {selectedMessage && (
                <div className="message-detail">
                  <div className="detail-header">
                    <div className="detail-info">
                      <div className="detail-avatar">
                        {selectedMessage.name?.charAt(0).toUpperCase() || '?'}
                      </div>
                      <div>
                        <h3>{selectedMessage.name}</h3>
                        <span>{selectedMessage.email}</span>
                      </div>
                    </div>
                    <div className="detail-actions">
                      <button
                        className={`action-btn ${selectedMessage.isLead ? 'active' : ''}`}
                        onClick={() => markAsLead(selectedMessage.id)}
                        title="Marker som lead"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => archiveMessage(selectedMessage.id)}
                        title="Arkiver"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="21 8 21 21 3 21 3 8"/>
                          <rect x="1" y="3" width="22" height="5"/>
                          <line x1="10" y1="12" x2="14" y2="12"/>
                        </svg>
                      </button>
                      <button
                        className="action-btn delete"
                        onClick={() => deleteMessage(selectedMessage.id)}
                        title="Slet besked"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="detail-meta">
                    <div className="meta-item">
                      <span className="meta-label">Virksomhed</span>
                      <span className="meta-value">{selectedMessage.company || 'Ikke angivet'}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Telefon</span>
                      <span className="meta-value">
                        {selectedMessage.phone ? (
                          <a href={`tel:${selectedMessage.phone}`}>{selectedMessage.phone}</a>
                        ) : 'Ikke angivet'}
                      </span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Service</span>
                      <span className="meta-value">{selectedMessage.service || 'Ikke angivet'}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Dato</span>
                      <span className="meta-value">
                        {new Date(selectedMessage.date).toLocaleString('da-DK')}
                      </span>
                    </div>
                  </div>

                  <div className="detail-body">
                    <h4>Besked</h4>
                    <p>{selectedMessage.message}</p>
                  </div>

                  {/* Quick Reply Section */}
                  <div className="quick-reply">
                    <h4>Hurtig handling</h4>
                    <div className="quick-reply-actions">
                      <a
                        href={`mailto:${selectedMessage.email}?subject=Re: Henvendelse fra Nordic Marketing`}
                        className="btn btn-primary"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        Send email
                      </a>
                      {selectedMessage.phone && (
                        <a
                          href={`tel:${selectedMessage.phone}`}
                          className="btn btn-secondary"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                          </svg>
                          Ring op
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Leads */}
        {activeTab === 'leads' && (
          <div className="admin-content leads-view">
            <div className="content-header">
              <div>
                <h1>Leads</h1>
                <p>{filteredLeads.length} leads {leadFilter !== 'all' ? '(filtreret)' : ''}</p>
              </div>
            </div>

            {/* Lead Status Filter */}
            <div className="lead-filters">
              <button
                className={`lead-filter-btn ${leadFilter === 'all' ? 'active' : ''}`}
                onClick={() => setLeadFilter('all')}
              >
                Alle ({messages.filter(m => m.isLead).length})
              </button>
              {leadStatusOptions.map(status => (
                <button
                  key={status.value}
                  className={`lead-filter-btn ${leadFilter === status.value ? 'active' : ''}`}
                  onClick={() => setLeadFilter(status.value)}
                  style={{ '--status-color': status.color }}
                >
                  {status.label} ({messages.filter(m => m.isLead && (m.leadStatus || 'new') === status.value).length})
                </button>
              ))}
            </div>

            {/* Lead Pipeline View */}
            <div className="lead-pipeline">
              {leadStatusOptions.map(status => (
                <div key={status.value} className="pipeline-column" style={{ '--status-color': status.color }}>
                  <div className="pipeline-header">
                    <h3>{status.label}</h3>
                    <span className="pipeline-count">
                      {messages.filter(m => m.isLead && (m.leadStatus || 'new') === status.value).length}
                    </span>
                  </div>
                  <div className="pipeline-cards">
                    {messages
                      .filter(m => m.isLead && (m.leadStatus || 'new') === status.value)
                      .map(lead => (
                        <div
                          key={lead.id}
                          className={`pipeline-card ${selectedLead?.id === lead.id ? 'selected' : ''}`}
                          onClick={() => setSelectedLead(lead)}
                        >
                          <div className="pipeline-card-header">
                            <span className="pipeline-avatar">{lead.name?.charAt(0).toUpperCase()}</span>
                            <div>
                              <h4>{lead.name}</h4>
                              <span>{lead.company || 'Privat'}</span>
                            </div>
                          </div>
                          <div className="pipeline-card-service">
                            {lead.service || 'Generel'}
                          </div>
                          <div className="pipeline-card-date">
                            {new Date(lead.date).toLocaleDateString('da-DK')}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Lead Detail Panel */}
            {selectedLead && (
              <div className="lead-detail-panel">
                <div className="lead-detail-header">
                  <div className="lead-detail-info">
                    <div className="lead-detail-avatar">
                      {selectedLead.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h2>{selectedLead.name}</h2>
                      <span>{selectedLead.company || 'Privat'}</span>
                    </div>
                  </div>
                  <button className="close-btn" onClick={() => setSelectedLead(null)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>

                <div className="lead-detail-content">
                  <div className="lead-detail-section">
                    <h3>Kontaktoplysninger</h3>
                    <div className="lead-contact-grid">
                      <a href={`mailto:${selectedLead.email}`} className="lead-contact-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        {selectedLead.email}
                      </a>
                      {selectedLead.phone && (
                        <a href={`tel:${selectedLead.phone}`} className="lead-contact-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                          </svg>
                          {selectedLead.phone}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="lead-detail-section">
                    <h3>Status</h3>
                    <div className="lead-status-buttons">
                      {leadStatusOptions.map(status => (
                        <button
                          key={status.value}
                          className={`status-btn ${(selectedLead.leadStatus || 'new') === status.value ? 'active' : ''}`}
                          style={{ '--status-color': status.color }}
                          onClick={() => updateLeadStatus(selectedLead.id, status.value)}
                        >
                          {status.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lead-detail-section">
                    <h3>Interesse</h3>
                    <div className="lead-service-tag">
                      {selectedLead.service || 'Generel forespørgsel'}
                    </div>
                  </div>

                  <div className="lead-detail-section">
                    <h3>Besked</h3>
                    <p className="lead-message">{selectedLead.message}</p>
                  </div>

                  <div className="lead-detail-section">
                    <h3>Noter</h3>
                    <div className="lead-notes">
                      {(selectedLead.notes || []).length === 0 ? (
                        <p className="no-notes">Ingen noter endnu</p>
                      ) : (
                        (selectedLead.notes || []).map(note => (
                          <div key={note.id} className="note-item">
                            <p>{note.text}</p>
                            <span className="note-date">
                              {new Date(note.timestamp).toLocaleString('da-DK')}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="add-note">
                      <textarea
                        placeholder="Tilføj en note..."
                        value={leadNote}
                        onChange={(e) => setLeadNote(e.target.value)}
                      />
                      <button
                        className="btn btn-primary btn-small"
                        onClick={() => addLeadNote(selectedLead.id)}
                        disabled={!leadNote.trim()}
                      >
                        Tilføj note
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Analytics */}
        {activeTab === 'analytics' && (
          <div className="admin-content">
            <div className="content-header">
              <h1>Analyse</h1>
              <p>Overblik over dine data og statistikker</p>
            </div>

            <div className="analytics-grid">
              {/* Message Trend */}
              <div className="analytics-card full-width">
                <h3>Beskeder over tid (sidste 7 dage)</h3>
                <div className="analytics-chart">
                  {analyticsData.last7Days.map((day, i) => (
                    <div key={i} className="analytics-bar-container">
                      <div
                        className="analytics-bar"
                        style={{ height: `${Math.max(day.count * 30, 10)}px` }}
                      />
                      <span className="analytics-bar-value">{day.count}</span>
                      <span className="analytics-bar-label">{day.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Breakdown */}
              <div className="analytics-card">
                <h3>Service interesse</h3>
                <div className="analytics-list">
                  {Object.entries(analyticsData.serviceBreakdown)
                    .sort((a, b) => b[1] - a[1])
                    .map(([service, count], i) => (
                      <div key={service} className="analytics-list-item">
                        <div className="analytics-list-info">
                          <span className="analytics-rank">#{i + 1}</span>
                          <span className="analytics-name">{service}</span>
                        </div>
                        <div className="analytics-list-bar">
                          <div
                            className="analytics-list-fill"
                            style={{ width: `${(count / totalMessages) * 100}%` }}
                          />
                        </div>
                        <span className="analytics-count">{count}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Lead Funnel */}
              <div className="analytics-card">
                <h3>Lead funnel</h3>
                <div className="funnel">
                  {leadStatusOptions.map((status, i) => (
                    <div
                      key={status.value}
                      className="funnel-stage"
                      style={{
                        '--stage-color': status.color,
                        '--stage-width': `${100 - i * 15}%`
                      }}
                    >
                      <span className="funnel-label">{status.label}</span>
                      <span className="funnel-value">{analyticsData.leadStatuses[status.value] || 0}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="analytics-card">
                <h3>Nøgletal</h3>
                <div className="key-metrics">
                  <div className="key-metric">
                    <span className="metric-value">{totalMessages}</span>
                    <span className="metric-label">Total beskeder</span>
                  </div>
                  <div className="key-metric">
                    <span className="metric-value">{leads}</span>
                    <span className="metric-label">Aktive leads</span>
                  </div>
                  <div className="key-metric">
                    <span className="metric-value">{conversionRate}%</span>
                    <span className="metric-label">Konverteringsrate</span>
                  </div>
                  <div className="key-metric">
                    <span className="metric-value">{thisWeek}</span>
                    <span className="metric-label">Denne uge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activity Log */}
        {activeTab === 'activity' && (
          <div className="admin-content">
            <div className="content-header">
              <div>
                <h1>Aktivitetslog</h1>
                <p>Oversigt over alle handlinger i admin panel</p>
              </div>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  if (window.confirm('Er du sikker på du vil rydde aktivitetsloggen?')) {
                    setActivityLog([]);
                    localStorage.removeItem('activityLog');
                    showNotification('Aktivitetslog ryddet');
                  }
                }}
              >
                Ryd log
              </button>
            </div>

            <div className="activity-log">
              {activityLog.length === 0 ? (
                <div className="empty-state">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <p>Ingen aktivitet endnu</p>
                  <span>Handlinger vil blive logget her</span>
                </div>
              ) : (
                <div className="activity-timeline">
                  {activityLog.map(activity => (
                    <div key={activity.id} className="activity-item">
                      <div className="activity-icon">
                        {activity.action === 'login' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                            <polyline points="10 17 15 12 10 7"/>
                            <line x1="15" y1="12" x2="3" y2="12"/>
                          </svg>
                        )}
                        {activity.action === 'logout' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                            <polyline points="16 17 21 12 16 7"/>
                            <line x1="21" y1="12" x2="9" y2="12"/>
                          </svg>
                        )}
                        {activity.action.includes('lead') && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                          </svg>
                        )}
                        {activity.action.includes('delete') && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                          </svg>
                        )}
                        {activity.action === 'mark_all_read' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 11 12 14 22 4"/>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                          </svg>
                        )}
                        {activity.action === 'archive' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="21 8 21 21 3 21 3 8"/>
                            <rect x="1" y="3" width="22" height="5"/>
                          </svg>
                        )}
                        {activity.action === 'add_note' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="12" y1="18" x2="12" y2="12"/>
                            <line x1="9" y1="15" x2="15" y2="15"/>
                          </svg>
                        )}
                      </div>
                      <div className="activity-content">
                        <p>{activity.details}</p>
                        <span className="activity-time">
                          {new Date(activity.timestamp).toLocaleString('da-DK')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <div className="admin-content">
            <div className="content-header">
              <h1>Indstillinger</h1>
              <p>Administrer dine admin panel indstillinger</p>
            </div>

            <div className="settings-grid">
              <div className="setting-card">
                <div className="setting-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                  </svg>
                  <div>
                    <h3>Notifikationer</h3>
                    <p>Konfigurer hvordan du modtager notifikationer</p>
                  </div>
                </div>
                <div className="setting-options">
                  <label className="toggle-option">
                    <span>Email notifikationer ved ny besked</span>
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                    />
                    <span className="toggle"></span>
                  </label>
                  <label className="toggle-option">
                    <span>Daglig opsummering</span>
                    <input
                      type="checkbox"
                      checked={settings.dailySummary}
                      onChange={(e) => setSettings({...settings, dailySummary: e.target.checked})}
                    />
                    <span className="toggle"></span>
                  </label>
                  <label className="toggle-option">
                    <span>Auto-svar til nye henvendelser</span>
                    <input
                      type="checkbox"
                      checked={settings.autoResponse}
                      onChange={(e) => setSettings({...settings, autoResponse: e.target.checked})}
                    />
                    <span className="toggle"></span>
                  </label>
                </div>
              </div>

              <div className="setting-card">
                <div className="setting-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <div>
                    <h3>Udseende</h3>
                    <p>Tilpas admin panel udseende</p>
                  </div>
                </div>
                <div className="setting-options">
                  <label className="toggle-option">
                    <span>Mørk tilstand</span>
                    <input
                      type="checkbox"
                      checked={settings.darkMode}
                      onChange={(e) => setSettings({...settings, darkMode: e.target.checked})}
                    />
                    <span className="toggle"></span>
                  </label>
                </div>
              </div>

              <div className="setting-card">
                <div className="setting-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <div>
                    <h3>Virksomhed</h3>
                    <p>Opdater virksomhedsinformation</p>
                  </div>
                </div>
                <div className="setting-form">
                  <div className="form-group">
                    <label>Virksomhedsnavn</label>
                    <input
                      type="text"
                      value={settings.businessName}
                      onChange={(e) => setSettings({...settings, businessName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={settings.businessEmail}
                      onChange={(e) => setSettings({...settings, businessEmail: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon</label>
                    <input
                      type="tel"
                      value={settings.businessPhone}
                      onChange={(e) => setSettings({...settings, businessPhone: e.target.value})}
                      placeholder="Valgfrit"
                    />
                  </div>
                  <div className="form-group">
                    <label>Adresse</label>
                    <input
                      type="text"
                      value={settings.businessAddress}
                      onChange={(e) => setSettings({...settings, businessAddress: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="setting-card">
                <div className="setting-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  <div>
                    <h3>Data</h3>
                    <p>Administrer dine gemte data</p>
                  </div>
                </div>
                <div className="setting-actions">
                  <button
                    className="btn btn-secondary"
                    onClick={async () => {
                      const data = await exportMessages();
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `nordic-marketing-export-${new Date().toISOString().split('T')[0]}.json`;
                      a.click();
                      addActivity('export', 'Data eksporteret');
                      showNotification('Data eksporteret');
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Eksporter beskeder
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={async () => {
                      if (window.confirm('Er du sikker på du vil slette alle beskeder? Denne handling kan ikke fortrydes.')) {
                        await clearAllMessages();
                        await loadMessages();
                        addActivity('clear_all', 'Alle beskeder slettet');
                        showNotification('Alle beskeder slettet', 'warning');
                      }
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                    Slet alle beskeder
                  </button>
                </div>
              </div>

              <div className="setting-card">
                <div className="setting-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <div>
                    <h3>Sikkerhed</h3>
                    <p>Sikkerhedsindstillinger for admin panel</p>
                  </div>
                </div>
                <div className="setting-info">
                  <div className="security-info">
                    <span className="security-label">Kodeord</span>
                    <span className="security-value">••••</span>
                  </div>
                  <p className="info-text">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="16" x2="12" y2="12"/>
                      <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                    Kontakt udvikler for at ændre kodeord
                  </p>
                </div>
              </div>

              <div className="setting-card">
                <div className="setting-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                  <div>
                    <h3>Om</h3>
                    <p>Information om admin panel</p>
                  </div>
                </div>
                <div className="about-info">
                  <p><strong>Nordic Marketing Admin Panel</strong></p>
                  <p>Version 2.0.0</p>
                  <p className="about-copyright">© 2024 Nordic Marketing</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Admin;
