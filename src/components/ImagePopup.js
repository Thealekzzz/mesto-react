import React from 'react';

const ImagePopup = (props) => {
    return (
        <div className={`popup popup_type_view ${props.isOpen && "popup_opened"}`}>
            <div className="popup__container popup__container_type_view">
                <img src={props.selectedCard.link} alt={`${props.selectedCard.name}`} className="popup__image" />
                <p className="popup__caption">{props.selectedCard.name}</p>

                <button onClick={props.onClose} className="popup__close-button popup__close-button_type_view hoverable" type="button"
                    aria-label="Кнопка закрыть всплывающее окно"></button>
            </div>
        </div>
    );
};

export default ImagePopup;