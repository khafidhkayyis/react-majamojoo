const CardS2 = ({ dataCard2 }) => {
  return (
    <div
      className="cardList__majamojo"
      style={{ backgroundImage: `url(${dataCard2.bgd})` }}
    >
      <div className="cardList__btn">
        {dataCard2.active ? (
          <button className="active">{dataCard2.btn}</button>
        ) : (
          <button>{dataCard2.btn}</button>
        )}
      </div>
      <div className="cardList__desc">
        <span>{dataCard2.title}</span>
        <h3>{dataCard2.desc}</h3>
      </div>
    </div>
  );
};

export default CardS2;
