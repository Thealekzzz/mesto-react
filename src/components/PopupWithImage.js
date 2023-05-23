import React from 'react';

const PopupWithImage = () => {
    return (
        <div className="popup popup_type_view">
            <div className="popup__container popup__container_type_view">
                <img src="./" alt="temp alt" className="popup__image" />
                <p className="popup__caption"></p>

                <button className="popup__close-button popup__close-button_type_view hoverable" type="button"
                    aria-label="Кнопка закрыть всплывающее окно"></button>
            </div>
        </div>
    );
};

export default PopupWithImage;