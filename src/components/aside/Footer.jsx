import React from 'react';
import popular_style from '../styles/useful.module.css';
import footer_style from '../styles/footer.module.css';

function Footer(params) {
    return (
        <footer className={params.fixed !== undefined ? footer_style.fixed : null}>
            <p className={popular_style.text_center} style={{ 'margin': '0' }}>&copy; Copyright by Furina Store, ender.</p>
            <p className={popular_style.text_center} style={{ 'margin': '0' }}> Designed by Haruto & Rushie.</p>
        </footer>
    );
}

export default Footer;