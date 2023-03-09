import { Helper } from "../Helper";

const Header = () => {
  const handleClick = () => {
    Helper.showAddMenu();
  }
  return (
    <header className="header">
      <h1 className="header__title">Music Manager</h1>
      <input className="header__input" placeholder="Pretraži albume"/>
      <button className="header__button" onClick={handleClick}>+ Dodaj album</button>
    </header>
  )
}

export default Header;