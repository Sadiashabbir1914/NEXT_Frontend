import React from 'react';
import Link from 'next/link';
import styles from "../(marketing)/home.module.css"

export default function HeaderPage() {
  return (
    <div>
      <header className={styles.main}>
      <h1 className='text-2xl text-white'>SkillForge</h1>
      <nav className={styles.navbar}>
        <ul className={styles.navbar}>
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/about" >About</Link></li>
        <li><Link href="/pricing" >Price</Link></li>
        <li><Link href="/dashboard" >Dashboard</Link></li>
        </ul>
      </nav>
    </header>
    </div>
  )
}
