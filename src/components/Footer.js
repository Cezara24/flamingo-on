import React from "react";
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <p className={styles.mail}>info@flamingo-on.com</p>
            <p>Copyright © 2023 flamingo on</p>
        </footer>
    )
}
