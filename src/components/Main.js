import React from 'react';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import Card from './Card';

const Main = (props) => {

    return (
        <>
            <main>
                <section className="profile">
                    <div className="profile__info-wrapper">
                        <div className="profile__avatar-wrapper">
                            <div style={{ background: `center / cover no-repeat url(${props.userData.avatar})` }} alt="Фото профиля" className="profile__avatar" />
                            <button type="button" onClick={props.onEditAvatar} className="profile__update-avatar"></button>

                        </div>
                        <div className="profile__info">
                            <div className="profile__name-wrapper">
                                <h1 className="profile__name">{props.userData.name}</h1>
                                <button onClick={props.onEditProfile} className="profile__edit-button hoverable" type="button"
                                    aria-label="Редактировать профиль"></button>
                            </div>
                            <p className="profile__about">{props.userData.description}</p>
                        </div>
                    </div>

                    <button onClick={props.onAddPlace} className="profile__add-button hoverable" type="button" aria-label="Кнопка добавить фото"></button>
                </section>

                <section aria-label="Места">
                    <ul className="cards">
                        {props.cards.map(card => (
                            <li key={card._id} onClick={() => props.onCardClick(card)} className="card-list-item">
                                <Card card={card} />
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <PopupWithForm name="edit" title="Редактировать профиль" isOpen={props.isEditProfilePopupOpened} onClose={props.onClose}>
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

            <PopupWithForm name="new-place" title="Новое место" isOpen={props.isAddPlacePopupOpened} onClose={props.onClose}>
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

            <PopupWithImage name="delete" title="Вы уверены?" selectedCard={props.selectedCard} isOpen={props.isViewPopupOpened}  onClose={props.onClose}>
                <button type="button" className="popup__submit-button popup__submit-button_type_marginless hoverable hoverable_level_low">Удалить</button>
            </PopupWithImage>

            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isEditAvatarPopupOpened} onClose={props.onClose}>
                <label>
                    <input required type="url" className="popup__input popup__input_data_image-url" id="avatar-url" name="link" placeholder="Ссылка на аватар" />
                    <span className="popup__input-error avatar-url-error"></span>
                </label>
                <button type="submit" className="popup__submit-button hoverable hoverable_level_low">Сохранить</button>
            </PopupWithForm>
        </>
    );
};

export default Main;