import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <ul className={styles.footerColumns}>
            <li className={styles.column}>
                <h3 className={styles.columnTitle}>Our team</h3>
            </li>
            <li className={styles.column}>
                <h3 className={styles.columnTitle}>My account</h3>
                <ul className={styles.rows}>
                    <li className={styles.row}>Lorem</li>
                    <li className={styles.row}>Ipsum</li>
                    <li className={styles.row}>Dolor</li>
                    <li className={styles.row}>Sit</li>
                </ul>
            </li>
            <li className={styles.column}>
                <h3 className={styles.columnTitle}>Services</h3>
                <ul className={styles.rows}>
                    <li className={styles.row}>Support</li>
                    <li className={styles.row}>Customer service</li>
                    <li className={styles.row}>Returns</li>
                    <li className={styles.row}>Dolor</li>
                </ul>
            </li>
            <li className={styles.column}>
                <h3 className={styles.columnTitle}>Contact us</h3>
            </li>
        </ul>
    </footer>
);

export default Footer;
