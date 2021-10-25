import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function PopupDeleteConfirm({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title={"Вы уверены?"}
      name={"delete-confirm"}
      isOpen={isOpen}
      onClose={onClose}
      buttonValue={"Да"}
    ></PopupWithForm>
  );
}
