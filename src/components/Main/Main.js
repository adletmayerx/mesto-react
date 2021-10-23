import React from 'react';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container" onClick={onEditAvatar}>
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
            onClick={onEditProfile}
          ></button>
          <p className="profile__subtitle"></p>
        </div>
        <button type="button" className="profile__add-button button" onClick={onAddPlace}></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}
