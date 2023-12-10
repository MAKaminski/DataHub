import React, { useState, useEffect } from 'react';
import styles from './ActivitySection.module.css';

function ActivitySection() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${hours}:${minutes}:${remainingSeconds}`;
  }

  return (
    <div className={styles.activitySection}>
      <h2 className={styles.activityHeader}>Activity</h2>
      <p className={styles.activityCounter}>Counter: {formatTime(seconds)}</p>
    </div>
  );
}

export default ActivitySection;