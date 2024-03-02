import React, { Component } from "react";
import Header from "./aside/Header";
import Footer from "./aside/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import popular_style from "./styles/useful.module.css";
import home_style from "./styles/components/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import "../FontAwesome";

AOS.init();

class Home extends Component {
  constructor(props) {
    super(props);

    this.what_we_have = React.createRef();
  }

  scroll_WhatWeHave = () =>
    this.what_we_have.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <div
            className={home_style.first_component}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
          >
            <div className={home_style.big_logo}></div>
            <h1 className={popular_style.text_center}>
              WELCOME TO FURINA STORE
            </h1>
            <p className={popular_style.text_center}>
              Shop bán Spotify, Minecraft, Discord Nitro, ... uy tín tại Việt
              Nam !
            </p>
            <button
              className={home_style.about_us}
              onClick={this.scroll_WhatWeHave}
            >
              About us
            </button>
          </div>

          <div
            ref={this.what_we_have}
            id={home_style.what_we_have}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
          >
            <h1
              className={`${popular_style.text_center} ${home_style.not_poppins}`}
            >
              Shop của chúng tôi bán gì nhỉ ?
            </h1>

            <div className={home_style.list_cards}>
              <div className={home_style.card}>
                <img src="/items/spotify.png" />
                <h1>SPOTIFY</h1>
                <p>
                  Giúp bạn nghe những bản nhạc với chất lượng cao và không quảng
                  cáo
                </p>
              </div>

              <div className={home_style.card}>
                <img src="/items/minecraft.png" />
                <h1>MINECRAFT</h1>
                <p>
                  Cho bạn một trải nghiệm chơi Minecraft bản quyền hoàn toàn hợp
                  pháp.
                </p>
              </div>

              <div className={home_style.card}>
                <img src="/items/nitro.png" />
                <h1>DISCORD NITRO</h1>
                <p>Nâng cấp trải nghiệm Discord của bạn với Nitro</p>
              </div>

              <div className={home_style.card}>
                <img src="/items/3dots.png" />
                <h1>AND MORE</h1>
                <p>Và nhiều hơn thế nữa !</p>
              </div>
            </div>
          </div>

          <div
            id={home_style.service}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
          >
            <h1
              className={`${popular_style.text_center} ${home_style.not_poppins}`}
            >
              Về chúng tôi
            </h1>

            <div className={home_style.list_cards}>
              <div className={home_style.card}>
                <div className={home_style.card_icon}>
                  <FontAwesomeIcon icon={["fas", "check"]} />
                </div>
                <h1>LEGIT</h1>
                <p>
                  Shop đầu tiên đã được thành lập vào năm 2022, với hơn 500+ đơn
                  hàng. Chúng tôi tự hào vì đã không exit scam :troll:
                </p>
              </div>

              <div className={home_style.card}>
                <div className={home_style.card_icon}>
                  <FontAwesomeIcon icon={["fas", "phone"]} />
                </div>
                <h1>SUPPORT</h1>
                <p>
                  Chúng tôi sẽ cố gắn hỗ trợ tốt, giải quyết vấn đề của khách
                  hàng.
                </p>
              </div>

              <div className={home_style.card}>
                <div className={home_style.card_icon}>
                  <FontAwesomeIcon icon={["fas", "ticket"]} />
                </div>
                <h1>GOODS</h1>
                <p>
                  Tất cả mắt hàng shop bán đều là hàng chất lượng cao, đã được
                  kiểm tra trước khi đến tay khách hàng.
                </p>
              </div>
            </div>
          </div>

          <div
            id={home_style.staffs}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
          >
            <h1
              className={`${popular_style.text_center} ${home_style.not_poppins}`}
            >
              Các quản trị viên
            </h1>

            <div className={home_style.list_cards}>
              <div className={`${home_style.card} ${home_style.card_user}`}>
                <img src="/staffs/furina.jpg" />
                <h1>ender</h1>
                <p className={home_style.job}>Founder</p>

                <div className={home_style.list_social}>
                  <a
                    href="https://www.facebook.com/notend3r/"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                  </a>
                  <a href="https://e-z.bio/notender" target={"_blank"}>
                    <FontAwesomeIcon icon={["fab", "discord"]} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            id={home_style.check_out}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
          >
            <h1
              className={`${popular_style.text_center} ${home_style.not_poppins}`}
            >
              Bạn muốn mua hàng ?
            </h1>
            <div className={popular_style.flex_center}>
              <a
                href="https://discord.gg/furinaStore"
                target={"_blank"}
                className={home_style.discord_server}
              >
                <FontAwesomeIcon icon={["fab", "discord"]} /> THAM GIA DISCORD
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
