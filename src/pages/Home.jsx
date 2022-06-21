import "../assets/sass/home.scss";
import CardHome from "../components/CardHome";
import cardMoja from "../assets/images/cmajamojo.png";
import Imgcard from "../assets/images/imgCard.png";
import Imgcard1 from "../assets/images/imgCard1.png";
import Imgcard2 from "../assets/images/imgCard2.png";

const Home = () => {
  const dataCards = [
    {
      image: cardMoja,
      title: "Majamojo",
      paragraf: "To Be The Biggest and MAJA-stic, Indonesian Game Developer",
    },
    {
      image: Imgcard,
      title: "Product",
      paragraf: "Fall Guy v4.5 : Introducing Ultimate Showdown Battle",
    },
    {
      image: Imgcard1,
      title: "Product",
      paragraf:
        "Katamari Damashi : Is it going to win game of the year this time?",
    },
    {
      image: Imgcard2,
      title: "News",
      paragraf: "NamcoBandai is giving a clue of Persona 5 Steam Version",
    },
  ];
  return (
    <div className="homePage">
      <div className="home">
        <div className="home__container">
          <div className="home__desc">
            <div className="home__hastag">
              <a href="/">#roadtoSEA</a>
            </div>
            <div className="home__title">
              <span>
                To Be The Biggest and MAJA-stic, Indonesian Game Developer
              </span>
            </div>
            <div className="home__button">
              <button>See Our Story</button>
            </div>
          </div>
          <div className="home__cards">
            {dataCards.map((item) => (
              <CardHome dataCards={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="cardList">
        <div className="cardList__title">
          <h2>What’s New</h2>
          <button>See All News</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
