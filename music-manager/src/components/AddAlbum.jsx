import { Helper } from "../Helper.js";
import { genres } from "../enums.js";

const AddAlbum = ({addAlbum}) => {
  const close = () => {
    Helper.hideAddMenu();
  }

  const handleClick = () => {
    const title = document.querySelector('.add__form-input.title').value;
    const author = document.querySelector('.add__form-input.author').value;
    const genreInput = document.querySelector('.add__form-input.genre');
    const genre = genreInput.options[genreInput.selectedIndex].text;
    const year = document.querySelector('.add__form-input.year').value;
    const date = new Date();

    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    const dateAdded = d + '.' + m + '.' + y;

    const data = {title, author, genre, year, dateAdded};

    Helper.addData(data);
    addAlbum(data);
    Helper.hideAddMenu();
  }

  return (
    <div className="add">
      <div className="add__form">
      <button className="add__form-button" onClick={close}>X</button>
        <h2 className="add__form-title">Novi album</h2>
        <input type="text" className="add__form-input title" placeholder="Unesi naslov"/>
        <input type="text" className="add__form-input author" placeholder="Unesi autora"/>
        <select name="" id="" className="add__form-input genre">
          <option value="">-- Odaberi žanr --</option>
          {genres.map((genre) => (<option value="">{genre}</option>))}
        </select>
        <input type="number" className="add__form-input year" placeholder="Unesi godinu"/>
        <button className="add__form-submit" onClick={handleClick}>Dodaj album</button>
      </div>
    </div>
  )
}

export default AddAlbum;