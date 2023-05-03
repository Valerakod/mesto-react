import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import { useState } from "react";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState( {name: "", link:""} )

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: "", link: ""});
  }
  function handleCardClick(card) {
    setSelectedCard(card)
}
  
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

            <PopupWithForm
              className="popup__form popup__form_profile"
              title={"Редактировать профиль"}
              name={"profile"}
              method="post"
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              buttonText={"Сохранить"}
              noValidate
              
            >
              
              <fieldset className="popup__input-container">
                <label className="popup__field">
                  <input
                    className="popup__input popup-text-check-name"
                    placeholder="Имя"
                    type="text"
                    name="popup-text-check-name"
                    defaultValue=""
                    required
                    id="popup-name"
                    minLength="2"
                    maxLength="40"
                    
                  />
                  <span
                    className="popup__input-error popup-name-error"
                    id="popup-name-error"
                  ></span>
                </label>
               
                <label className="popup__field">
                  <input
                    className="popup__input popup-text-check-job"
                    placeholder="Профессиональная деятельность"
                    type="text"
                    name="popup-text-check-job"
                    defaultValue=""
                    required
                    id="popup-job"
                    minLength="2"
                    maxLength="200"
                  />
                  <span
                    className="popup__input-error popup-job-error"
                    id="popup-job-error"
                  ></span>
                </label>
              </fieldset>
            </PopupWithForm>
          
            <PopupWithForm
              className="popup__form popup__form_add"
              title={"Новое место"}
              name={"add-image"}
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              buttonText={"Создать"}
              method="post"
              noValidate
            >
              <fieldset className="popup__input-container">
                <label className="popup__field">
                  <input
                    className="popup__input"
                    placeholder="Название"
                    type="text"
                    name="title"
                    defaultValue=""
                    required
                    id="popup-placename"
                    minLength="2"
                    maxLength="30"
                  />
                  <span
                    className="popup__input-error  popup-placename-error"
                    id="popup-placename-error"
                  ></span>
                </label>

                <label className="popup__field">
                  <input
                    className="popup__input"
                    placeholder="Ссылка на картинку"
                    type="url"
                    name="link"
                    defaultValue=""
                    required
                    id="popup-source"
                  />
                  <span
                    className="popup__input-error  popup-source-error"
                    id="popup-source-error"
                  ></span>
                </label>
              </fieldset>
            </PopupWithForm>

        
            <PopupWithForm
              className="popup__form popup__form_avatar"
              title={"Обновить аватар"}
              name={"avatar-form"}
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              buttonText={"Сохранить"}
            >
              <fieldset className="popup__input-container">
                <label className="popup__field">
                  <input
                    className="popup__input"
                    type="url"
                    name="avatar"
                    placeholder="Ссылка на аватар"
                    id="popup-avatar"
                    required
                  />
                  <span
                    className="popup__input-error popup-avatar-error"
                    id="popup-avatar-error"
                  ></span>
                </label>
              </fieldset>
            </PopupWithForm>
         
        
            <PopupWithForm
              className="popup__form popup__form_delete-card"
              name="popup"
            >
              <h2 className="popup__title">Вы уверены?</h2>
              <button
                className="popup__save-button  popup__delete-card"
                type="submit"
              >
                Да
              </button>
              <button
                className="popup__close-button popup__close-button_edit"
                type="button"
                aria-label="Закрыть"
              ></button>
            </PopupWithForm>
          

        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        />

      </div>
    </div>
  );
}

export default App;
