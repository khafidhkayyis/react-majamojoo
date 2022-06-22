const CardGame = ({ dataCardG }) => {
  console.log(dataCardG.active);
  return (
    <div
      className="cardList__game"
      style={{ backgroundImage: `url(${dataCardG.bgd})` }}
    >
      <div className="cardList__game__btn">
        {dataCardG.active ? (
          <button className="active">{dataCardG.btn}</button>
        ) : (
          <button>{dataCardG.btn}</button>
        )}
      </div>
      <div className="cardList__game__desc">
        <span>{dataCardG.title}</span>
        <h3>{dataCardG.desc}</h3>
      </div>
    </div>
  );
};

export default CardGame;
