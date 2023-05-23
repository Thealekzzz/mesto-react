import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = useState(false);
  const [isAddPlacePopupOpened, setIsAddPlacePopupOpened] = useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = useState(false);

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  const [selectedCard, setSelectedCard] = useState({})


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpened(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpened(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpened(true);
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpened(false);
    setIsEditAvatarPopupOpened(false);
    setIsEditProfilePopupOpened(false);

    setSelectedCard({});
  }

  useEffect(() => {
    api.getUserData()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(err => {
        console.log("Ошибка получения данных пользователя");
      });

    api.getInitialCards()
      .then(cards => {
        setCards(cards);
      })
      .catch(err => {
        console.log("Ошибка получения фотографий");
      });
  }, [])


  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        userData={{ name: userName, description: userDescription, avatar: userAvatar }}
        cards={cards}
        selectedCard={selectedCard}
      />
      <Footer />

      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpened} onClose={closeAllPopups} buttonText="Сохранить">
        <label>
          <input required minLength="2" maxLength="40" type="text" className="popup__input popup__input_data_name" id="input-name" name="name" placeholder="Имя" />
          <span className="popup__input-error input-name-error"></span>
        </label>

        <label>
          <input required minLength="2" maxLength="200" type="text" className="popup__input popup__input_data_about" id="input-about" name="about" placeholder="О себе" />
          <span className="popup__input-error input-about-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm name="new-place" title="Новое место" isOpen={isAddPlacePopupOpened} onClose={closeAllPopups} buttonText="Создать">
        <label>
          <input required minLength="2" maxLength="30" type="text" className="popup__input popup__input_data_title" id="input-title" name="name" placeholder="Название" />
          <span className="popup__input-error input-title-error"></span>

        </label>

        <label>
          <input required type="url" className="popup__input popup__input_data_image-url" id="new-place-url" name="link" placeholder="Ссылка на картинку" />
          <span className="popup__input-error new-place-url-error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup name="delete" title="Вы уверены?" selectedCard={selectedCard} onClose={closeAllPopups}>
        <button type="button" className="popup__submit-button popup__submit-button_type_marginless hoverable hoverable_level_low">Удалить</button>
      </ImagePopup>

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpened} onClose={closeAllPopups} buttonText="Сохранить">
        <label>
          <input required type="url" className="popup__input popup__input_data_image-url" id="avatar-url" name="link" placeholder="Ссылка на аватар" />
          <span className="popup__input-error avatar-url-error"></span>
        </label>
      </PopupWithForm>
    </div>
  );
}

export default App;
