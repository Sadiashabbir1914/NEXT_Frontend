import styles from "./home.module.css";
import Link from "next/link";
import HeaderPage from "../_components/header";

export default function MarketingLayout({ children }) {
  return (  
    <>
    <HeaderPage />
    {children}
    <footer className={styles.main}>
      <p>Contact us at: <a href="gmail:Skillforge1@gmail.com" className={styles.footer}>Skillforge1@gmail.com</a></p>
    </footer>
    </>
  );
}