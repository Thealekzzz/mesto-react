import React from 'react';

const PopupWithForm = ({ name, title, isOpen, onClose, children, buttonText }) => {
    return (
        <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <button onClick={onClose} className="popup__close-button popup__close-button_type_edit hoverable" type="button"
                    aria-label="Закрыть всплывающее окно, кнопка"></button>

                <form className={`popup__form popup__form_type_${name}`} name={`${name}-form`}>
                    {children}

                    <button type="submit" className="popup__submit-button hoverable hoverable_level_low">{buttonText}</button>
                </form>

            </div>
        </div>
    );
};

export default PopupWithForm;