const CardHome = ({ dataCards }) => {
  return (
    <div className="home__card">
      <div className="home__card__image">
        <img src={dataCards.image} alt="" />
      </div>
      <div className="home__card__desc">
        <span>{dataCards.title}</span>
        <p>{dataCards.paragraf}</p>
      </div>
    </div>
  );
};

export default CardHome;
