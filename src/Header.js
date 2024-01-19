import React from 'react';
import style from './Header.module.css';
import homeOfficeBanner from './home_office_banner_narrow_new.jpg';

function Header() {
    return (
        <header className={style.Header}>
            <div className={style.TopDiv}>
                <nav>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>

                </nav>
            </div>
            <div className={style.ImgDiv}>
                <img src={homeOfficeBanner} alt="Home office banner." />
            </div>

        </header>

    );

}

export default Header;