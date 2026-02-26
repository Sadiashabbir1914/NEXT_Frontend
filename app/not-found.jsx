import React from 'react';
import HeaderPage from './_components/header';
import styles from "./(marketing)/home.module.css"

export default function NotFound() {
  return (
    <div>
      <HeaderPage />
      <p>Page does not exist.</p>
      <p>Go Home Page!</p>
      <footer className={styles.main}>
      <p>Contact us at: <a href="gmail:Skillforge1@gmail.com" className={styles.footer}>Skillforge1@gmail.com</a></p>
      </footer>
    </div>
  )
}
