import React from "react";
import styles from "./navbar.module.css";
import logoBlue from "../../assets/logoBlue.svg";

export default function Navbar() {
  return (
    <div className={styles.mainContainer}>
      <img id={styles.img} src={logoBlue} alt="logo van van dijk laren" />
      <div className={styles.navContainer}>
        <p id={styles.navText}>Honden</p>
        <p id={styles.navText}>Katten</p>
        <p id={styles.navText}>en meer</p>
        <div className={styles.devider} />
        <p id={styles.navText}>Contact</p>
      </div>
    </div>
  );
}
