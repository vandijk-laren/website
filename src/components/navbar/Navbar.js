import React from "react";
import styles from "./navbar.module.css";
import logoBlue from "../../assets/logoBlue.svg";

export default function Navbar() {
  return (
    <div class="w-screen h-28 flex flex-row justify-center items-center bg-[#d2d2d27a] fixed top-0 left-0 z-[100] backdrop-blur-[5px]">
      <img
        class="hidden md:block lg:block absolute left-[1em] object-cover"
        src={logoBlue}
        alt="logo van van dijk laren"
      />
      <div class="flex flex-row justify-between items-center gap-[1em] w-fit">
        <p class="text-primary-text-color font-bold">Honden</p>
        <p class="text-primary-text-color font-bold">Katten</p>
        <p class="text-primary-text-color font-bold">en meer</p>
        <div className={styles.devider} />
        <p class="text-primary-text-color font-bold">Contact</p>
      </div>
    </div>
  );
}
