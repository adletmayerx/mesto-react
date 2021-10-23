import React from "react";

export default function Card({ url, alt, title, likes }) {
  return (
      <article className="element">
        <button
          type="button"
          className="element__remove-button button"
        ></button>
        <img src={url} alt={alt} className="element__image" />
        <div className="element__description">
          <h2 className="element__title">{title}</h2>
          <div className="element__like-container">
            <button type="button" className="element__like-button"></button>
            <p className="element__like-counter">{likes}</p>
          </div>
        </div>
      </article>
  ); 
}
