import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function PopupAddPlace({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title={"Новое место"}
      name={"add-place"}
      isOpen={isOpen}
      onClose={onClose}
      buttonValue={"Создать"}
    >
      <input
        name="title"
        type="text"
        className="popup__input popup__input_type_title form__input"
        id="title-input"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="form__input-error title-input-error"></span>
      <input
        name="link"
        type="url"
        className="popup__input popup__input_type_link form__input"
        id="link-input"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="form__input-error link-input-error"></span>
    </PopupWithForm>
  );
}
