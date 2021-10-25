import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function PopupEditAvatar({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"edit-avatar"}
      isOpen={isOpen}
      onClose={onClose}
      buttonValue={"Сохранить"}
    >
      <input
        name="avatar"
        type="url"
        className="popup__input popup__input_type_avatar form__input"
        id="avatar-input"
        placeholder="Обновить аватар"
        required
      />
      <span className="form__input-error avatar-input-error"></span>
    </PopupWithForm>
  );
}
