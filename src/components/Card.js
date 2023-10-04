import React from "react";
import "./css/Card.css";

const animeCharImg =
  "https://i.pinimg.com/564x/69/ec/37/69ec37d456f007e04a20fc69f5d1320c.jpg";

const controlCard = false;

const NoCardsAdded = function () {
  return (
    <section className="no-cards-section">
      <img src={animeCharImg} alt="anime-character" />
      <div className="no-card-text">
        <h3>Add your personal card here!</h3>
        <p>Just click the + button in the right corner of the header.</p>
      </div>
    </section>
  );
};

const Card = () => {
  return <>{controlCard === true ? <Card /> : <NoCardsAdded />}</>;
};

export default Card;
