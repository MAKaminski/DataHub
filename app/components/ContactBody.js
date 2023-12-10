import React from "react";
import styles from './Body.module.css';
import styles from './Body.module.css';

export function Body({ isMinimized, toggleMinimized }) {

  return (
    <div className={`${styles.body} ${isMinimized ? styles.maximized : ''}`} onClick={toggleMinimized} onClick={e => e.stopPropagation()}>
      <div>Contact for Support
        <div>
          <a href="mailto:MKaminski1337@Gmail.com">Email</a>
          <a href="tel:404-838-8613">Call</a>
          <a href="https://github.com/MAKaminski/DataHub">Github</a>
      </div>
    </div>
    </div>>
  );
}