"use client";
import { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContacts = () => {
    const element = document.getElementById("contacts");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.main} id="header">
      <Link href="/" className={styles.main_header}>
        {/* <h3 className={styles.main_header_left}>{'>'}</h3>
        <h3 className={styles.main_header_center}>Soft Does</h3>
        <h3 className={styles.main_header_right}>{'<'}</h3> */}
        SOFT DOES
      </Link>
      <div className={`${styles.main_nav} ${isMenuOpen ? styles.main_nav_open : ""}`}>
        <Link href="/services">Services</Link>
        <Link href="/">Expertise</Link>
        <Link href="/">Industies</Link>
        <Link href="/">Success Stories</Link>
        <Link href="/">Solution Hub</Link>
        <Link href="/">Company</Link>
        <Link href="/">Insights</Link>
        <button onClick={scrollToContacts}>Contact us</button>
      </div>
      <div className={styles.main_button}>
        <button onClick={scrollToContacts}>Contact us</button>
      </div>
      <div className={styles.main_burger} onClick={toggleMenu}>
        <div className={`${styles.main_burger_line} ${isMenuOpen ? styles.main_burger_line_open : ""}`}></div>
        <div className={`${styles.main_burger_line} ${isMenuOpen ? styles.main_burger_line_open : ""}`}></div>
        <div className={`${styles.main_burger_line} ${isMenuOpen ? styles.main_burger_line_open : ""}`}></div>
      </div>
    </div>
  );
}
