import "../assets/sass/__section3.scss";
import arrowR from "../assets/images/arrowright.png";
import arrowL from "../assets/images/arrowleft.png";
import picture1 from "../assets/images/picture.png";
const Section3 = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product__data">
          <div className="product__data__top">
            <h3>Our Products</h3>
            <div className="product__data__arrow">
              <a href="/">
                <img src={arrowL} alt="" />
              </a>
              <a href="/">
                <img src={arrowR} alt="" />
              </a>
            </div>
          </div>
          <div className="product__data__pic">
            <img src={picture1} alt="" />
          </div>
          <div className="product__data__paraf">
            <p>
              Fall Guys: Ultimate Knockout is a platform battle royale game
              developed by Mediatonic and published by Devolver Digital. It was
              released for Microsoft Windows and PlayStation 4 on 4 August 2020.
            </p>
          </div>
          <button>Visit The Site</button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
