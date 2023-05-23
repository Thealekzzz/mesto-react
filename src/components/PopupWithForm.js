import React from 'react';

const PopupWithForm = (props) => {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <button className="popup__close-button popup__close-button_type_edit hoverable" type="button"
                    aria-label="Закрыть всплывающее окно, кнопка"></button>

                <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}-form`}>

                    {props.children}

                    {/* <label>
                        <input required minLength="2" maxLength="40" type="text" className="popup__input popup__input_data_name" id="input-name" name="name" placeholder="Имя" />
                        <span className="popup__input-error input-name-error"></span>
                    </label>

                    <label>
                        <input required minLength="2" maxLength="200" type="text" className="popup__input popup__input_data_about" id="input-about" name="about" placeholder="О себе" />
                        <span className="popup__input-error input-about-error"></span>
                    </label>

                    <button type="submit" className="popup__submit-button hoverable hoverable_level_low">Сохранить</button> */}
                </form>

            </div>
        </div>
    );
};

export default PopupWithForm;