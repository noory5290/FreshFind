import React, { useState, useEffect } from 'react';

// Guard against duplicate increment on initial load/Strict Mode re-render in the same session
let hasRecordedVisit = false;

export default function TopBar() {
  const [time, setTime] = useState('--:--:--');
  const [visitorCount, setVisitorCount] = useState(() => {
    try {
      const saved = localStorage.getItem('websiteVisitors');
      const parsed = parseInt(saved, 10);
      return !isNaN(parsed) ? parsed : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-PK', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('websiteVisitors');
      let count = stored !== null ? parseInt(stored, 10) : 0;
      if (isNaN(count)) count = 0;

      if (!hasRecordedVisit) {
        hasRecordedVisit = true;
        count = count + 1;
        localStorage.setItem('websiteVisitors', count.toString());
      }

      setVisitorCount(count);
    } catch (e) {
      console.error('Error updating visitor counter:', e);
    }

    const handleStorageChange = (e) => {
      if (e.key === 'websiteVisitors' && e.newValue) {
        const val = parseInt(e.newValue, 10);
        if (!isNaN(val)) {
          setVisitorCount(val);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="top-bar">
      <div className="top-container">
        <div className="live-time">
          <i className="fa-solid fa-clock"></i>
          Live Time:
          <span id="clock">{time}</span>
        </div>

        <div className="visitors">
          <i className="fa-solid fa-eye"></i>
          Visitors:
          <strong id="visitor-counter">{visitorCount}</strong>
        </div>
      </div>
    </div>
  );
}
