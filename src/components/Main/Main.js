import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import { api } from '../../utils/api';

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onRemoveButtonClick,
}) {
  const [ userAvatar, setUserAvatar] = useState('');
  const [ userName, setUserName] = useState('');
  const [ userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);

        setCards(initialCards);
      }).catch((err) => {
        console.log(err);
    
        return [];
      });
  }, []);


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
        <button
          type="button"
          className="profile__add-button button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            url={card.link}
            alt={card.name}
            title={card.name}
            likes={card.likes.length}
            key={card._id}
            onCardClick={onCardClick}
            onRemoveButtonClick={onRemoveButtonClick}
          />
        ))}
      </section>
    </main>
  );
}
