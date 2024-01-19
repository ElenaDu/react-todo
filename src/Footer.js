import React from 'react';
import style from './Footer.module.css';

function Footer() {
    return(
        <footer className={style.Footer}>
            <p>&copy; {new Date().getFullYear()} Alena Dudko</p>
        </footer>

    );
}
export default Footer;