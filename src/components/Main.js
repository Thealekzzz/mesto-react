import React from 'react';
import avatar from '../images/avatar.jpg';

const Main = () => {
    return (
    <main>
        <section className="profile">
          <div className="profile__info-wrapper">
            <div className="profile__avatar-wrapper">
              <img src={avatar} alt="Фото профиля" className="profile__avatar" />
              <button type="button" className="profile__update-avatar"></button>

            </div>
            <div className="profile__info">
              <div className="profile__name-wrapper">
                <h1 className="profile__name">Алексей</h1>
                <button className="profile__edit-button hoverable" type="button"
                  aria-label="Редактировать профиль"></button>
              </div>
              <p className="profile__about">Фрилансер, инфлюенсер</p>
            </div>
          </div>

          <button className="profile__add-button hoverable" type="button" aria-label="Кнопка добавить фото"></button>
        </section>

        <section aria-label="Места">
          <ul className="cards">

          </ul>
        </section>
    </main>
    );
};

export default Main;