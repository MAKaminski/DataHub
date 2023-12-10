import React from "react";
import styles from './SideNav.module.css';
import { DashboardIcon, MonitorIcon, SettingsIcon, SubmitRequestIcon } from './SideNavIcon.js';

export function SideNav({ onOpenModal, isMinimized, toggleMinimized }) {
  return (
    <div className={`${styles.sidenav} ${isMinimized ? styles.minimized : ''}`} onClick={toggleMinimized}>
      <a href="#dashboard" onClick={e => e.stopPropagation()}>
        {isMinimized && <DashboardIcon className={styles.icon} />}
        {!isMinimized && 'Dashboard'}
      </a>
      <a href="#monitor" onClick={e => e.stopPropagation()}>
        {isMinimized && <MonitorIcon className={styles.icon} />}
        {!isMinimized && 'Monitor'}
      </a>
      <a href="#settings" onClick={e => e.stopPropagation()}>
        {isMinimized && <SettingsIcon className={styles.icon} />}
        {!isMinimized && 'Settings'}
      </a>
      <a href="#submit" onClick={(e) => { e.stopPropagation(); onOpenModal(); }}>
        {isMinimized && <SubmitRequestIcon className={styles.icon} />}
        {!isMinimized && 'Submit Request'}
      </a>
    </div>
  );
}