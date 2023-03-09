import { Helper } from "../Helper.js";

const AddAlbum = () => {
  const handleClick = () => {
    Helper.hideAddMenu();
  }

  return (
    <div className="add">
      <div className="add__form">
      <button className="add__form-button" onClick={handleClick}>X</button>
        <h2 className="add__form-title">Novi album</h2>
        <input type="text" className="add__form-input title"/>
        <input type="text" className="add__form-input author"/>
        <select name="" id="" className="add__form-input">
          <option value="">-- Odaberi žanr --</option>
          <option value="">Pop</option>
          <option value="">Rock</option>
          <option value="">Jazz</option>
          <option value="">Punk</option>
        </select>
        <input type="number" className="add__form-input year"/>
      </div>
    </div>
  )
}

export default AddAlbum;