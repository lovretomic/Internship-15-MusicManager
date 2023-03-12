import { Helper } from "../Helper";

const Header = ({setAlbums, albumsCount}) => {
  const addAlbum = () => {
    Helper.showAddMenu();
  }
  const filter = () => {
    const str = document.querySelector(".header__input").value;
    setAlbums(Helper.filterData(str));
  }
  return (
    <header className="header">
      <h1 className="header__title">Music Manager</h1>
      <input className="header__input" placeholder="Filtritaj albume" onChange={filter}/> 
      <button className="header__button" onClick={addAlbum} disabled={albumsCount < 10 ? false : true}>+ Dodaj album {albumsCount}/10</button>
    </header>
  )
}

export default Header;