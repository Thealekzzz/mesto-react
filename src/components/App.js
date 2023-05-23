import deleteIcon from '../images/deleteIcon.svg';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <button className="popup__close-button popup__close-button_type_edit hoverable" type="button"
            aria-label="Кнопка закрыть всплывающее окно"></button>

          <form className="popup__form popup__form_type_edit" name="edit-profile-form">
            <label>
              <input required minlength="2" maxlength="40" type="text" className="popup__input popup__input_data_name" id="input-name" name="name" placeholder="Имя" />
              <span className="popup__input-error input-name-error"></span>
            </label>

            <label>
              <input required minlength="2" maxlength="200" type="text" className="popup__input popup__input_data_about" id="input-about" name="about" placeholder="О себе" />
              <span className="popup__input-error input-about-error"></span>
            </label>

            <button type="submit" className="popup__submit-button hoverable hoverable_level_low">Сохранить</button>
          </form>

        </div>
      </div>

      <div className="popup popup_type_new-place">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <button className="popup__close-button popup__close-button_type_new-place hoverable" type="button"
            aria-label="Кнопка закрыть всплывающее окно"></button>

          <form className="popup__form popup__form_type_new-place" name="new-place-form">
            <label>
              <input required minlength="2" maxlength="30" type="text" className="popup__input popup__input_data_title" id="input-title" name="name" placeholder="Название" />
              <span className="popup__input-error input-title-error"></span>

            </label>

            <label>
              <input required type="url" className="popup__input popup__input_data_image-url" id="new-place-url" name="link" placeholder="Ссылка на картинку" />
              <span className="popup__input-error new-place-url-error"></span>
            </label>
            <button type="submit" className="popup__submit-button hoverable hoverable_level_low">Создать</button>
          </form>

        </div>
      </div>

      <div className="popup popup_type_view">
        <div className="popup__container popup__container_type_view">
          <img src="./" alt="temp alt" className="popup__image" />
          <p className="popup__caption"></p>

          <button className="popup__close-button popup__close-button_type_view hoverable" type="button"
            aria-label="Кнопка закрыть всплывающее окно"></button>
        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
          <button className="popup__close-button popup__close-button_type_delete hoverable" type="button"
            aria-label="Кнопка закрыть всплывающее окно"></button>


          <button type="button" className="popup__submit-button popup__submit-button_type_marginless hoverable hoverable_level_low">Удалить</button>

        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <button className="popup__close-button popup__close-button_type_new-place hoverable" type="button"
            aria-label="Кнопка закрыть всплывающее окно"></button>

          <form className="popup__form popup__form_type_avatar" name="update-avatar">
            <label>
              <input required type="url" className="popup__input popup__input_data_image-url" id="avatar-url" name="link" placeholder="Ссылка на аватар" />
              <span className="popup__input-error avatar-url-error"></span>
            </label>
            <button type="submit" className="popup__submit-button hoverable hoverable_level_low">Сохранить</button>
          </form>

        </div>
      </div>

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
    </body>
  );
}

export default App;
