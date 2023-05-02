import React from "react";

function PopupWithForm({ title, name, children, isOpen, onClose, buttonText }) {
  const className = `popup  popup_type_${name} ${
    isOpen ? "popup_opened" : " "
  }`;


  return (
    
    <div className={className} onClick={onClose}>
      <div className="popup__container" onClick={(e => e.stopPropagation())}>
        <form
          className="popup__form"
          method="post"
          title={title}
          name={name}
          children={children}
          buttonText={buttonText}
        >
          <h2 className="popup__title">{title}</h2>
          {children}
        </form>
        <button
          className="popup__close-button popup__close-button_edit"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <button className="popup__save-button " type="submit" onClick={onClose}>{buttonText}</button>
        
      </div>
    </div>
   
  );
}

export default PopupWithForm;
