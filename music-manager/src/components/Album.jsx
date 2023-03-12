import { Helper } from "../Helper";

const Album = ({ data, listIndex, setAlbums }) => {
  const today = new Date();
  const addedToday =
    (today.getDate() == data.dateAdded[0]) &&
    (today.getMonth() + 1 == data.dateAdded[1]) &&
    (today.getFullYear() == data.dateAdded[2]);
  
  const classes = `album${addedToday ? ' added-today': ''}`;

  const handleClick = () => {
    Helper.removeData(listIndex);
    setAlbums(Helper.storageData());
  }

  return (
    <div className={classes}>
     <p className="album__id">{data.id}</p>
     <p className="album__title">{data.title}</p>
     <p className="album__author">{data.author}</p>
     <p className="album__genre">{data.genre}</p>
     <p className="album__year">{data.year}</p>
     <p className="album__date">{data.dateAdded.join('.')}.</p>
     <button className="album__remove" onClick={handleClick}>Ukloni</button>
    </div>
  );
}

export default Album;