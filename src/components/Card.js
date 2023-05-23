import React from 'react';
import deleteIcon from '../images/deleteIcon.svg';

const Card = (props) => {
    return (
        <article className="card">
            <div style={{ background: `center / cover no-repeat url(${props.card.link})` }} className="card__image" />
            <div className="card__caption-wrapper">
                <h2 className="card__caption">{props.card.name}</h2>
                <div className="card__like-wrapper">
                    <button type="button" aria-label="Кнопка поставить лайк."
                        className="card__like-button hoverable hoverable_level_medium"></button>

                    <p className="card__like-count">{props.card.likes.length}</p>

                </div>
            </div>

            <img src={deleteIcon} alt="Кнопка удалить карточку" className="card__remove-button hoverable" />

        </article>
    );
};

export default Card;