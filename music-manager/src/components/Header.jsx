import { Helper } from "../Helper";

const Header = ({setAlbums}) => {
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
      <button className="header__button" onClick={addAlbum}>+ Dodaj album</button>
    </header>
  )
}

export default Header;