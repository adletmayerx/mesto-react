import React from "react";

export default function PopupWithForm() {
  return (
    <div className="popup popup_type_image">
        <div className="popup__container popup-image__container">
          <button type="button" className="popup__close-button popup-image__close-button button"></button>
          <figure className="popup-image__figure">
            <img className="popup-image__image" src="#" alt="" />
            <figcaption className="popup-image__caption"></figcaption>
          </figure>
        </div>
      </div>
  );
}