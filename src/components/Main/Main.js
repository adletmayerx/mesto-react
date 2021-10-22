import React from 'react';

export default function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector('.popup-avatar').classList.add('popup_opened');
  }

  const handleEditProfileClick = () => {
    document.querySelector('.popup-edit').classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup-add').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container" onClick={handleEditAvatarClick}>
          <img
            src="#"
            alt="фотография обладателя профиля"
            className="profile__image"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title"></h1>
          <button
            type="button"
            className="profile__edit-button button"
            onClick={handleEditProfileClick}
          ></button>
          <p className="profile__subtitle"></p>
        </div>
        <button type="button" className="profile__add-button button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}
