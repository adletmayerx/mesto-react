import React from "react";

export default function PopupWithForm({ title, name, children, buttonValue }) {
  const handleCloseButtonClick = (evt) => {
    evt.target.closest('popup').classList.remove('popup_opened');
  }
  const handleOverlayClick = (evt) => {
    evt.target.classList.remove('popened_opened');
  }
  return (
    <div className={`popup popup_type_${name}`} onClick={handleOverlayClick}>
        <div className="popup__container">
          <button type="button" className="popup__close-button button" onClick={handleCloseButtonClick}></button>
          <h2 className="popup__title">{title}</h2>
          <form name={name} className="form" novalidate>
            {children}
            <button type="submit" className="popup__save-button popup__submit-button form__submit">{buttonValue}</button>
          </form>
        </div>
      </div>
  );
}