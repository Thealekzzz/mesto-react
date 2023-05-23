import React from 'react';
import avatar from '../images/avatar.jpg';
import deleteIcon from '../images/deleteIcon.svg';
import PopupWithForm from './PopupWithForm';

const Main = (props) => {

    return (
        <>
            <main>
                <section className="profile">
                    <div className="profile__info-wrapper">
                        <div className="profile__avatar-wrapper">
                            <img src={avatar} alt="Фото профиля" className="profile__avatar" />
                            <button type="button" onClick={props.onEditAvatar} className="profile__update-avatar"></button>

                        </div>
                        <div className="profile__info">
                            <div className="profile__name-wrapper">
                                <h1 className="profile__name">Алексей</h1>
                                <button onClick={props.onEditProfile} className="profile__edit-button hoverable" type="button"
                                    aria-label="Редактировать профиль"></button>
                            </div>
                            <p className="profile__about">Фрилансер, инфлюенсер</p>
                        </div>
                    </div>

                    <button onClick={props.onAddPlace} className="profile__add-button hoverable" type="button" aria-label="Кнопка добавить фото"></button>
                </section>

                <section aria-label="Места">
                    <ul className="cards">

                    </ul>
                </section>
            </main>

            <PopupWithForm name="edit" title="Редактировать профиль">
                <label>
                    <input required minLength="2" maxLength="40" type="text" className="popup__input popup__input_data_name" id="input-name" name="name" placeholder="Имя" />
                    <span className="popup__input-error input-name-error"></span>
                </label>

                <label>
                    <input required minLength="2" maxLength="200" type="text" className="popup__input popup__input_data_about" id="input-about" name="about" placeholder="О себе" />
                    <span className="popup__input-error input-about-error"></span>
                </label>

                <button type="submit" className="popup__submit-button hoverable hoverable_level_low">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm name="new-place" title="Новое место">
                <label>
                    <input required minLength="2" maxLength="30" type="text" className="popup__input popup__input_data_title" id="input-title" name="name" placeholder="Название" />
                    <span className="popup__input-error input-title-error"></span>

                </label>

                <label>
                    <input required type="url" className="popup__input popup__input_data_image-url" id="new-place-url" name="link" placeholder="Ссылка на картинку" />
                    <span className="popup__input-error new-place-url-error"></span>
                </label>
                <button type="submit" className="popup__submit-button hoverable hoverable_level_low">Создать</button>
            </PopupWithForm>

            <PopupWithForm name="delete" title="Вы уверены?">
                <button type="button" className="popup__submit-button popup__submit-button_type_marginless hoverable hoverable_level_low">Удалить</button>
            </PopupWithForm>

            <PopupWithForm name="avatar" title="Обновить аватар">
                <label>
                    <input required type="url" className="popup__input popup__input_data_image-url" id="avatar-url" name="link" placeholder="Ссылка на аватар" />
                    <span className="popup__input-error avatar-url-error"></span>
                </label>
                <button type="submit" className="popup__submit-button hoverable hoverable_level_low">Сохранить</button>
            </PopupWithForm>

            <template id="card-template">
                <li className="card-list-item">
                    <article className="card">
                        <img src="./images/cards/balaklava.jpg" alt="temp alt" className="card__image" />
                        <div className="card__caption-wrapper">
                            <h2 className="card__caption">.</h2>
                            <div className="card__like-wrapper">
                                <button type="button" aria-label="Кнопка поставить лайк."
                                    className="card__like-button hoverable hoverable_level_medium"></button>

                                <p className="card__like-count"></p>

                            </div>
                        </div>

                        <img src={deleteIcon} alt="Кнопка удалить карточку" className="card__remove-button hoverable" />

                    </article>
                </li>
            </template>
        </>
    );
};

export default Main;