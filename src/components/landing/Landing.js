import React from 'react'
import styles from "./landing.module.css"
import bg from "../../assets/landingBg.svg"

export default function Landing() {
    return (
        <div className={styles.mainContainer}>
            <img id={styles.img} src={bg} alt="Foto van een hond als achtergrond" />
            <div className={styles.contentContainer}>
                <div className={styles.title}>
                    <div id={styles.topTitle}>Wij willen</div>
                    <div id={styles.middelTitle}>het best voor jouw</div>
                    <div id={styles.lowTitle}>en jouw huisdier</div>
                </div>
                <div>
                    <p id={styles.description}>Alles voor jouw huisdier hebben wij in onze winkel staan. Wij helpen graag met advies of als u problemen heeft met uw huisdier.</p>
                    <div className={styles.btnContainer}>
                        <button className={styles.btnFull}>Kom bij ons langs</button>
                        <button className={styles.btnClear}>Reviews</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
