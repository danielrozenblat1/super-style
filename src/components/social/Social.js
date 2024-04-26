import React from 'react';
import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faFacebook,faViber,faWaze } from '@fortawesome/free-brands-svg-icons';
const SocialIcons = () => {
  return (
    <ul className={styles.iconList}>

      <li className={styles.iconContent}>
        <a
          data-social="tiktok"
          aria-label="tiktok"
          href="https://www.tiktok.com/@superstyle_hodhas"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faTiktok} />
          </svg>
        </a>
        <div className={styles.tooltip}>טיקטוק</div>
      </li>
 
      <li className={styles.iconContent}>
        <a
          data-social="facebook"
          aria-label="facebook"
          href="https://www.facebook.com/SuperStyleISR/photos"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faFacebook} />
          </svg>
        </a>
        <div className={styles.tooltip}>פייסבוק</div>
      </li>
 
      <li className={styles.iconContent}>
        <a
          data-social="phone"
          aria-label="phone"
          href="tel:+972548353140"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faViber} />
          </svg>
        </a>
        <div className={styles.tooltip}>טלפון</div>
      </li>
      <li className={styles.iconContent}>
        <a
          data-social="waze"
          aria-label="waze"
          href="https://waze.com/ul/hsv8yfjb10"
          className={styles.iconLink}
          target="_blank" rel="noopener noreferrer"
        >
          <div className={styles.filled}></div>
          <svg viewBox="0 0 100 100" version="1.1">
          <FontAwesomeIcon icon={faWaze} />
          </svg>
        </a>
        <div className={styles.tooltip}>וייז</div>
      </li>
 
    </ul>
  );
};

export default SocialIcons;