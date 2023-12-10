import React from "react";
import styles from './Body.module.css';

export function Body({ isMinimized, toggleMinimized }) {

  return (
    <div className={`${styles.body} ${isMinimized ? styles.maximized : ''}`} onClick={toggleMinimized} onClick={e => e.stopPropagation()}>
      <div>Create a Report</div>
      <div>Activity</div>
      <div>Pipeline</div>
      <div>Submit Request</div>
    </div>
  );
}