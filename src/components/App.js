import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupEditAvatar from './PopupEditAvatar/PopupEditAvatar';
import PopupEditProfile from './PopupEditProfile/PopupEditProfile';
import PopupAddPlace from './PopupAddPlace/PopupAddPlace';
import PopupDeleteConfirm from './PopupDeleteConfirm/PopupDeleteConfirm';
import ImagePopup from './PopupImage/PopupImage';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api'



function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectCard] = useState({});
  const [currentUser, setCurrentUser] = useState({name: '', about: ''});
  const [deletingCardId, setDeletingCardId] = useState('');


  useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      }).catch((err) => {
        console.log(err);
    
        return [];
      });
  }, []);



  useEffect(() => {
    api.getUserInfo().then(res => {
      setCurrentUser(res);
    }).catch((err) => {
      console.log(err);
  
      return [];
    });
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleRemoveButtonClick = (id) => {
    setDeletingCardId(id);
    setIsDeleteConfirmPopupOpen(true);
  };

  const handleCardClick = (url, title) => {
    setSelectCard({url, title});
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteConfirmPopupOpen(false);

    setSelectCard({});
  };

  const handleUpdateUser = (name, about) => {
    api
      .editProfile(name, about)
      .then((res) => setCurrentUser(res))
      .catch((err) => {
        console.log(err);

        return [];
      }).finally(() => closeAllPopups());
  }

  const handleUpdateAvatar = (avatar) => {
    api
      .editAvatar(avatar)
      .then((res) => setCurrentUser(res))
      .catch((err) => {
        console.log(err);

        return [];
      }).finally(() => closeAllPopups());
  }

  const handleAddPlaceSubmit = (name, link) => {
    api
    .addCard(name, link)
      .then(newCard => setCards([newCard, ...cards]))
      .catch((err) => {
        console.log(err);

        return [];
      })
      .finally(() => closeAllPopups());
  }

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

  const handleCardDelete = () => {
    api
      .deleteCard(deletingCardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== deletingCardId));
      })
      .catch((err) => {
        console.log(err);

        return [];
      }).finally(() => closeAllPopups());
  }
  
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onRemoveButtonClick={handleRemoveButtonClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <PopupEditAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupEditProfile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupAddPlace
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <ImagePopup
          onClose={closeAllPopups}
          url={selectedCard.url}
          title={selectedCard.title}
        />

        <PopupDeleteConfirm
          isOpen={isDeleteConfirmPopupOpen}
          onClose={closeAllPopups}
          onDelete={handleCardDelete}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
