const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Music Manager</h1>
      <input className="header__input" placeholder="Pretraži albume"/>
      <button className="header__button">+ Dodaj album</button>
    </header>
  )
}

export default Header;