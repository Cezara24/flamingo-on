import React from 'react';
import styles from './Header.module.css';
import logo from "../images/logo.png";
import Button from './Button';

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

            <div className={styles.navbar}>
                <Button text="Home" type="withoutBorder" />
                <Button text="Services" type="withoutBorder" />
                <Button text="Contact" type="withoutBorder" />
                <Button text="English" type="withoutBorder" />
                <Button text="日本語" type="withoutBorder" />
            </div>

            <Button text="お問い合わせ" type="full"/>
        </header>
    );
}
