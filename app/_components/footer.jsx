import React from 'react';
import styles from "../(marketing)/home.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.main}>
      <p>Contact us at: <a href="mailto:Skillforge1@gmail.com" className={styles.footer}>Skillforge1@gmail.com</a></p>
      </footer>
    </div>
  )
}
