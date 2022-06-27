import "../assets/sass/footer.scss";
import Fb from "../assets/images/fb.png";
import Linkin from "../assets/images/linkin.png";
import Twit from "../assets/images/twiter.png";
import Yt from "../assets/images/yutube.png";
import Ig from "../assets/images/insta.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top__left">
            <div className="footer__top__left__tag">
              <h2>#Let’s Make Indonesia Games Great!</h2>
            </div>
            <div className="footer__top__left__gmail">
              <span>
                <a href="/">Contact : hello@majamojo.id</a>
              </span>
            </div>
          </div>
          <div className="footer__top__right">
            <div className="footer__top__right__navbar">
              <ul className="footer__top__right__navbar__nav">
                <li>
                  <a href="/">Our Products</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer__top__right__icon">
              <ul className="footer__top__right__icon__nav">
                <li>
                  <a href="/">
                    <img src={Fb} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={Linkin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={Twit} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={Yt} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={Ig} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__title">
            <h1>© 2022 Majamojo All Rights Reserved</h1>
          </div>
          <div className="footer__bottom__right">
            <div className="footer__bottom__right__nav">
              <h2>Terms & Condition</h2>
            </div>
            <div className="footer__bottom__right__nav">
              <h2>Privacy Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
