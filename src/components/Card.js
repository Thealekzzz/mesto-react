import React from 'react';
import deleteIcon from '../images/deleteIcon.svg';

const Card = ({ card, onCardClick }) => {
    return (
        <article className="card">
            <img src={card.link} alt={`${card.name}, фото`} onClick={() => onCardClick(card)} className="card__image" />
            <div className="card__caption-wrapper">
                <h2 className="card__caption">{card.name}</h2>
                <div className="card__like-wrapper">
                    <button type="button" aria-label="Кнопка поставить лайк."
                        className="card__like-button hoverable hoverable_level_medium"></button>

                    <p className="card__like-count">{card.likes.length}</p>

                </div>
            </div>

            <img src={deleteIcon} alt="Кнопка удалить карточку" className="card__remove-button hoverable" />

        </article>
    );
};

export default Card;