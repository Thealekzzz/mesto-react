import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import api from '../utils/api';

function App() {
  let [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = useState(false);
  let [isAddPlacePopupOpened, setIsAddPlacePopupOpened] = useState(false);
  let [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = useState(false);
  let [isViewPopupOpened, setIsViewPopupOpened] = useState(false);

  let [userName, setUserName] = useState(""); 
  let [userDescription, setUserDescription] = useState(""); 
  let [userAvatar, setUserAvatar] = useState("");

  let [cards, setCards] = useState([]);

  let [selectedCard, setSelectedCard] = useState({})


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
    setIsViewPopupOpened(true);
    setSelectedCard(cardData);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpened(false);
    setIsEditAvatarPopupOpened(false);
    setIsEditProfilePopupOpened(false);
    setIsViewPopupOpened(false);

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
        isAddPlacePopupOpened={isAddPlacePopupOpened}
        isEditAvatarPopupOpened={isEditAvatarPopupOpened}
        isEditProfilePopupOpened={isEditProfilePopupOpened}
        isViewPopupOpened={isViewPopupOpened}
        onClose={closeAllPopups}
        userData={{name: userName, description: userDescription, avatar: userAvatar}}
        cards={cards}
        selectedCard={selectedCard}
      />
      <Footer />
    </div>
  );
}

export default App;
