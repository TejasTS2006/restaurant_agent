'use client';

import React, { useState, useEffect } from 'react';

export default function AttendancePage() {
  const [status, setStatus] = useState<'clocked-out' | 'clocked-in'>('clocked-out');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [history, setHistory] = useState([
    { action: 'Clock In', time: '08:00 AM', date: 'Today' },
    { action: 'Clock Out', time: '04:30 PM', date: 'Yesterday' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggle = () => {
    const now = new Date();
    const newAction = status === 'clocked-out' ? 'Clock In' : 'Clock Out';
    
    setHistory(prev => [{
      action: newAction,
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: 'Just now'
    }, ...prev]);
    
    setStatus(status === 'clocked-out' ? 'clocked-in' : 'clocked-out');
  };

  return (
    <div className="attendance-page">
      <div className="header">
        <h1>Staff Attendance</h1>
        <p className="subtitle">Clock in/out and view your shift records</p>
      </div>

      <div className="main-grid">
        <div className="card clock-card glass">
          <div className="current-time">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <div className="current-date">
            {currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
          
          <div className={`status-banner ${status}`}>
            {status === 'clocked-in' ? 'You are currently ON SHIFT' : 'You are currently CLOCKED OUT'}
          </div>

          <button 
            className={`action-btn ${status}`} 
            onClick={handleToggle}
          >
            {status === 'clocked-out' ? 'START SHIFT' : 'END SHIFT'}
          </button>
        </div>

        <div className="card history-card glass">
          <h3>Recent Activity</h3>
          <div className="history-list">
            {history.map((entry, i) => (
              <div key={i} className="history-item">
                <div className="entry-dot"></div>
                <div className="entry-info">
                  <span className="action">{entry.action}</span>
                  <span className="meta">{entry.date} at {entry.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .attendance-page {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .header h1 { font-size: 32px; margin-bottom: 4px; }
        .subtitle { color: var(--text-muted); font-size: 14px; }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 24px;
        }

        .card {
          padding: 32px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .current-time {
          font-size: 48px;
          font-weight: 800;
          font-family: monospace;
          color: var(--primary);
        }

        .current-date {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 32px;
        }

        .status-banner {
          width: 100%;
          text-align: center;
          padding: 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .status-banner.clocked-out {
          background: rgba(255,255,255,0.05);
          color: var(--text-muted);
        }

        .status-banner.clocked-in {
          background: var(--primary-glow);
          color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .action-btn {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.05em;
          transition: all 0.2s;
        }

        .action-btn.clocked-out {
          background: var(--primary);
          color: black;
        }

        .action-btn.clocked-in {
          background: var(--error);
          color: white;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .history-card {
          align-items: flex-start;
          max-height: 480px;
          overflow-y: auto;
        }

        h3 { margin-bottom: 24px; font-size: 18px; }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .history-item {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .entry-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--border);
        }

        .history-item:first-child .entry-dot {
          background: var(--primary);
          box-shadow: 0 0 8px var(--primary);
        }

        .entry-info {
          display: flex;
          flex-direction: column;
        }

        .action { font-size: 14px; font-weight: 600; }
        .meta { font-size: 12px; color: var(--text-muted); }
      `}</style>
    </div>
  );
}
