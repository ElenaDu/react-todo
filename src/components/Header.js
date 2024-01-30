import React from 'react';
import styles from './Header.module.css';
import homeOfficeBanner from './home_office_banner_narrow_new.jpg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topDiv}>
                <nav>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>

                </nav>
            </div>
            <div className={styles.imgDiv}>
                <img src={homeOfficeBanner} alt="Home office banner." />
            </div>

        </header>

    );

}

export default Header;