import React from 'react';
import Card from '../Card/Card';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, userAvatar, userName, userDescription, cards }) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container" onClick={onEditAvatar}>
          <img
            src={userAvatar}
            alt="фотография обладателя профиля"
            className="profile__image"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button button" onClick={onAddPlace}></button>
      </section>

    <section className='elements'>
        {cards.map((card) => (
          <Card
            url={card.link} alt={card.name} title={card.name} likes={card.likes.length} key={card.id}
          />
        ))}
      </section>
    </main>
  );
}
