import React, { Component } from 'react';
import Header from './aside/Header';
import Footer from './aside/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import popular_style from './styles/useful.module.css';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="800">
                    <h1 className={popular_style.text_center} style={{ 'marginTop': '120px' }}>VÀO SERVER DISCORD ĐỂ MUA HÀNG NHÉ !</h1>
                </main>
                <Footer fixed />
            </React.Fragment>
        );
    }
}

export default Home;