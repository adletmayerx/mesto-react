import React, { useState, useEffect} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupEditAvatar from './PopupEditAvatar/PopupEditAvatar';
import PopupEditProfile from './PopupEditProfile/PopupEditProfile';
import PopupAddPlace from './PopupAddPlace/PopupAddPlace';
import PopupDeleteConfirm from './PopupDeleteConfirm/PopupDeleteConfirm';
import ImagePopup from './PopupImage/PopupImage';
import {api} from '../utils/api';



function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
  const [ userAvatar, setUserAvatar] = useState('');
  const [ userName, setUserName] = useState('');
  const [ userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectCard] = useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleRemoveButtonClick = () => {
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
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        userAvatar={userAvatar}
        userName={userName}
        userDescription={userDescription}
        cards={cards}
        onCardClick={handleCardClick} 
        onRemoveButtonClick={handleRemoveButtonClick}
      />
      <Footer />

      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <ImagePopup
        onClose={closeAllPopups}
        url={selectedCard.url}
        title={selectedCard.title}
      />

      <PopupDeleteConfirm isOpen={isDeleteConfirmPopupOpen} onClose={closeAllPopups} />
    </>
  );
}

export default App;
