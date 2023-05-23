import React from 'react';

const PopupWithForm = (props) => {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <button onClick={props.onClose} className="popup__close-button popup__close-button_type_edit hoverable" type="button"
                    aria-label="Закрыть всплывающее окно, кнопка"></button>

                <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}-form`}>
                    {props.children}
                </form>

            </div>
        </div>
    );
};

export default PopupWithForm;