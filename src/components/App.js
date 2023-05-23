import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  function handleEditAvatarClick() {
      const avatarPopupElement = document.querySelector(".popup_type_avatar");
      console.log(avatarPopupElement);
      
      avatarPopupElement.classList.add("popup_opened");
  }

  function handleEditProfileClick() {
      const editPopupElement = document.querySelector(".popup_type_edit");
      console.log(editPopupElement);
      
      editPopupElement.classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
      const placePopupElement = document.querySelector(".popup_type_new-place");
      console.log(placePopupElement);
      
      placePopupElement.classList.add("popup_opened");
  }


  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />
    </div>
  );
}

export default App;
