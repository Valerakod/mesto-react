import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../utils/Api";
import avatarImage from "../images/avatar.jpg";
import Card from "./Card.js";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState("Валерия Емец");
  const [userDescription, setUserDescription] = useState(
    "Студентка Я.Практикум"
  );
  const [userAvatar, setUserAvatar] = useState(avatarImage);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            className="profile__avatar"
            type="button"
            onClick={onEditAvatar}
          >
            <img
              className="profile__avatar-img"
              src={userAvatar}
              alt="Аватар"
              
            />
          </button>

          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить"
            onClick={onAddPlace}
          ></button>
        </section>

        <section className="elements">
       
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Main;
