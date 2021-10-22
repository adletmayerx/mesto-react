import React, { useState, useEffect} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>

      <div className="popup popup-edit">
        <div className="popup__container">
          <button type="button" className="popup__close-button popup-edit__close-button button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="profile-edit__form" className="popup-edit__form form" novalidate>
            <input name="name" type="text" className="popup__input popup__input_type_name form__input"
            id="name-input" required minlength="2" maxlength="40" placeholder="Ваше имя" />
            <span className="form__input-error name-input-error"></span>
            <input name="about" type="text" className="popup__input popup__input_type_about form__input"
            id="about-input" required minlength="2" maxlength="200" placeholder="Расскажите о себе" />
            <span className="form__input-error about-input-error"></span>
            <button type="submit" className="popup__save-button popup__submit-button form__submit popup-edit__submit-button">Сохранить</button>
          </form>
        </div>
      </div>
      
      <div className="popup popup-add">
        <div className="popup__container">
          <button type="button" className="popup__close-button popup-add__close-button button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form name="popup-add__form" className="popup-add__form form">
            <input name="title" type="text" className="popup__input popup__input_type_title form__input"
            id="title-input" placeholder="Название" minlength="2" maxlength="30" required />
            <span className="form__input-error title-input-error"></span>
            <input name="link" type="url" className="popup__input popup__input_type_link form__input"
            id="link-input" placeholder="Ссылка на картинку" required />
            <span className="form__input-error link-input-error"></span>
            <button type="submit" className="popup__create-button popup__submit-button form__submit popup-add__submit-button">Создать</button>
          </form>
        </div>
      </div>
      
      <div className="popup popup-avatar">
        <div className="popup__container">
          <button type="button" className="popup__close-button popup-avatar__close-button button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="popup-avatar__form" className="popup-avatar__form form">
            <input name="avatar" type="url" className="popup__input popup__input_type_avatar form__input"
            id="avatar-input" placeholder="Обновить аватар" required />
            <span className="form__input-error avatar-input-error"></span>
            <button type="submit" className="popup__save-button popup__submit-button form__submit popup-avatar__submit-button">Сохранить</button>
          </form>
        </div>
      </div>
      
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
    </div>
  
  );
}

export default App;
