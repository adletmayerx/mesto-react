import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function PopupEditProfile({ isOpen, onClose }) {
  return (
    <PopupWithForm 
    title={'Редактировать профиль'} 
    name={'edit-profile'} 
    isOpen={isOpen}
    onClose={onClose}
    buttonValue={'Сохранить'} 
    children={
      <>
      <input name="name" type="text" className="popup__input popup__input_type_name form__input"
            id="name-input" required minLength="2" maxLength="40" placeholder="Ваше имя" />
      <span className="form__input-error name-input-error"></span>
      <input name="about" type="text" className="popup__input popup__input_type_about form__input"
            id="about-input" required minLength="2" maxLength="200" placeholder="Расскажите о себе" />
      <span className="form__input-error about-input-error"></span>
      </>
    } />
  );
}
