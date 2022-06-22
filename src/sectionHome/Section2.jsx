import "../assets/sass/__section2.scss";
import Card2 from "../components/CardS2";
import CardG from "../components/CardGame";
import bgdCard from "../assets/images/cards2.png";
import bgdCard2 from "../assets/images/fallguy.png";
import bgdGame from "../assets/images/cardgame.png";
import bgdGame1 from "../assets/images/Rectangle31.png";
import bgdGame2 from "../assets/images/Rectangle33.png";

const Section2 = () => {
  const dataCard2 = [
    {
      bgd: bgdCard,
      btn: "News",
      title: "Majamojo",
      desc: "Majamojo is getting the best game publisher across SEA",
      active: true,
    },
    {
      bgd: bgdCard2,
      btn: "product",
      title: "Fall guy",
      desc: "Fall Guy Ultimate Showdown has been released Today",
      active: false,
    },
  ];

  const dataCardG = [
    {
      bgd: bgdGame,
      btn: "News",
      title: "Game Dev",
      desc: "Indonesian Community Supports Local Game Creator",
      active: true,
    },
    {
      bgd: bgdGame1,
      btn: "Product",
      title: "Katamari",
      desc: "Player Support Katamari Bug fix By submiting Reports",
      active: false,
    },
    {
      bgd: bgdGame2,
      btn: "Product",
      title: "It Takes Two",
      desc: "It Takes Two : Bringing A New Level For Harder Challenge",
      active: false,
    },
  ];
  return (
    <div className="cardList">
      <div className="cardList__title">
        <h2>What’s New</h2>
        <button>See All News</button>
      </div>
      <div className="cardList__item">
        {dataCard2.map((item) => (
          <Card2 dataCard2={item} />
        ))}
      </div>

      <div className="cardList__child">
        {dataCardG.map((item2) => (
          <CardG dataCardG={item2} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
