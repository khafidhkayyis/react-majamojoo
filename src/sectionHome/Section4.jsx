import "../assets/sass/__section4.scss";
import arrow from "../assets/images/Arrow 31.png";
const Section4 = () => {
  return (
    <div className="container">
      <div className="know">
        <div className="know__title">
          <h2>Know Us Better</h2>
        </div>
        <div className="know__card">
          <div className="know__card__item">
            <div className="know__card__item__title">
              <h2>Our Story</h2>
            </div>
            <div className="know__card__item__desc">
              <div className="know__card__item__desc__wrapper">
                <div className="know__card__item__desc__paraf">
                  <p>
                    See our inspiring story about building the greatest
                    Indonesia Game Development
                  </p>
                </div>
                <div className="know__card__item__desc__button">
                  <a href="/">
                    <img src={arrow} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="know__card__item">
            <div className="know__card__item__title">
              <h2>Career</h2>
            </div>
            <div className="know__card__item__desc">
              <div className="know__card__item__desc__wrapper">
                <div className="know__card__item__desc__paraf">
                  <p>
                    Want to be a part of ground breaking history in Indonesia
                    Gaming communisty?
                  </p>
                </div>
                <div className="know__card__item__desc__button">
                  <a href="/">
                    <img src={arrow} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
