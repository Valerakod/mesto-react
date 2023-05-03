import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img
        className="element__image"
        src={card?.link}
        alt={card?.name}
        onClick={handleClick}
      />
      <h2 className="element__text">{card?.name}</h2>
      <div className="element__like">
        <button
          className="element__heart"
          type="button"
          aria-label="Поставить лайк"
        ></button>
        <p className="element__heart-count">{card?.likes.length}</p>
      </div>
      <button
        className="element__delete-icon"
        type="button"
        aria-label="Удалить"
      ></button>
    </article>
  );
}

export default Card;
