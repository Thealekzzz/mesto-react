import React from 'react';

const ImagePopup = ({ selectedCard, onClose }) => {
    return (
        <div className={`popup popup_type_view ${selectedCard.name && "popup_opened"}`}>
            <div className="popup__container popup__container_type_view">
                <img src={selectedCard.link} alt={`${selectedCard.name}, фото`} className="popup__image" />
                <p className="popup__caption">{selectedCard.name}</p>

                <button onClick={onClose} className="popup__close-button popup__close-button_type_view hoverable" type="button"
                    aria-label="Кнопка закрыть всплывающее окно"></button>
            </div>
        </div>
    );
};

export default ImagePopup;