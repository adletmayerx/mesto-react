import React, {useState, useEffect, useContext} from 'react';
import Card from '../Card/Card';
import { api } from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onRemoveButtonClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      }).catch((err) => {
        console.log(err);
    
        return [];
      });
  }, []);

  const handleCardLike = (likes, id) =>  {
    const isLiked = likes.some(i => i._id === currentUser._id);
    
    if (isLiked) {
      api
        .removeLike(id)
        .then((newCard) => {
          setCards((state) => state.map((c) => (c._id === id ? newCard : c)));
        })
        .catch((err) => {
          console.log(err);

          return [];
        });
    } else {
      api
        .addLike(id)
        .then((newCard) => {
          setCards((state) => state.map((c) => (c._id === id ? newCard : c)));
        })
        .catch((err) => {
          console.log(err);

          return [];
        });
    }
}

  const handleCardDelete = (id) => {
    api
      .deleteCard(id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== id));
      })
      .catch((err) => {
        console.log(err);

        return [];
      });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container" onClick={onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt="фотография обладателя профиля"
            className="profile__image"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__edit-button button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
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
            url = {card.link}
            alt = {card.name}
            title = {card.name}
            likes = {card.likes}
            owner = {card.owner}
            id = {card._id}
            key = {card._id}
            onCardClick = {onCardClick}
            onRemoveButtonClick = {onRemoveButtonClick}
            onCardLike = {handleCardLike}
            onCardDelete = {handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
