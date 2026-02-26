import "../globals.css";
import Link from "next/link";
import styles from "./home.module.css";

export const metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <>
    
    <img src="/bg-img.png" alt="bg-img" className={styles.imgStyle} />
    </>
  );
}
