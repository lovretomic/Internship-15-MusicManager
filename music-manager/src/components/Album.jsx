const Album = ({ data }) => {
  return (
    <div className="album">
     <p className="album__title">{data.title}</p>
     <p className="album__author">{data.author}</p>
     <p className="album__genre">{data.genre}</p>
     <p className="album__year">{data.year}</p>
     <p className="album__date">{data.dateAdded}</p>
    </div>
  );
}

export default Album;