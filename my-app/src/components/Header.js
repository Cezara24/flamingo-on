import React from 'react';
import styles from './Header.module.css';
import logo from "../images/logo.png";
import buttonStyles from './Button.module.css';

export default function Header() {
    return(
        <header className={styles.Header}>
            <div className={styles.logo}>
                <div className={styles.textContainer}>
                    <p className={styles.logo__text}><b>Fl</b></p>
                    <img className={styles.logo__img} src={logo}></img>
                    <p  className={styles.logo__text}><b>mingo-on</b></p>
                </div>
                <p className={styles.logo__motto}>imagine a better future with it</p>
            </div>

            <navbar>
                <button className={`${buttonStyles.Button} ${buttonStyles.withoutBorder}`}>Home</button>
                <button className={`${buttonStyles.Button} ${buttonStyles.withoutBorder}`}>Services</button>
                <button className={`${buttonStyles.Button} ${buttonStyles.withoutBorder}`}>Contact</button>
                <button className={`${buttonStyles.Button} ${buttonStyles.withoutBorder}`}>English</button>
                <button className={`${buttonStyles.Button} ${buttonStyles.withoutBorder}`}>日本語</button>
            </navbar>

            <button className={`${buttonStyles.Button} ${buttonStyles.button__full}`}>お問い合わせ</button>
        </header>
    );
}
