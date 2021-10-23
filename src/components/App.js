import React, { useState, useEffect} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupEditAvatar from './PopupEditAvatar/PopupEditAvatar';
import PopupEditProfile from './PopupEditProfile/PopupEditProfile';
import PopupAddPlace from './PopupAddPlace/PopupAddPlace';
import PopupImage from './PopupImage/PopupImage';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

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
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
        <Footer />
      </div>

      <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

      <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

      <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <PopupImage />
      
      <div className="popup popup-image">
        <div className="popup__container popup-image__container">
          <button type="button" className="popup__close-button popup-image__close-button button"></button>
          <figure className="popup-image__figure">
            <img className="popup-image__image" src="#" alt="" />
            <figcaption className="popup-image__caption"></figcaption>
          </figure>
        </div>
      </div>
      
      <div className="popup popup-delete">
        <div className="popup__container">
          <button type="button" className="popup__close-button popup-delete__close-button button"></button>
          <h2 className="popup__title popup-delete__title">Вы уверены?</h2>
          <form name="popup-add__form" className="popup-delete__form form">
            <button type="submit" className="popup__delete-button popup__submit-button form__submit popup-delete__submit-button">Да</button>
          </form>
        </div>
      </div>
      
      <template id="element-template">
        <article className="element">
          <button type="button" className="element__remove-button button"></button>
          <img src="#" alt="" className="element__image" />
          <div className="element__description">
            <h2 className="element__title"></h2>
            <div className="element__like-container">
              <button type="button" className="element__like-button"></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
        </article>
      </template>
    </>
  
  );
}

export default App;
