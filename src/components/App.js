import React, { useState, useEffect} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupEditAvatar from './PopupEditAvatar/PopupEditAvatar';
import PopupEditProfile from './PopupEditProfile/PopupEditProfile';
import PopupAddPlace from './PopupAddPlace/PopupAddPlace';
import PopupImage from './PopupImage/PopupImage';
import {api} from '../utils/api';



function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [ userAvatar, setUserAvatar] = useState('');
  const [ userName, setUserName] = useState('');
  const [ userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let userId;
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        userId = userData._id;

        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);

        setCards(initialCards);
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

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          userAvatar={userAvatar}
          userName={userName}
          userDescription={userDescription} 
          cards={cards}
        />
        <Footer />
      </div>

      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <PopupImage />

      <div className="popup popup-delete">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button popup-delete__close-button button"
          ></button>
          <h2 className="popup__title popup-delete__title">Вы уверены?</h2>
          <form name="popup-add__form" className="popup-delete__form form">
            <button
              type="submit"
              className="popup__delete-button popup__submit-button form__submit popup-delete__submit-button"
            >
              Да
            </button>
          </form>
        </div>
      </div>


    </>
  );
}

export default App;
