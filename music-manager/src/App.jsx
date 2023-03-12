import AddAlbum from "./components/AddAlbum";
import Header from "./components/Header";
import Album from "./components/Album";
import { Helper } from "./Helper";
import { useState } from "react";
import AlbumsHeader from "./components/AlbumsHeader";

const data = [
  {
    title: 'Album 1',
    artist: 'Mixed authors'
  },
  {
    title: 'Album XYZ',
    artist: 'Random author'
  }
]

let id = 0;

const App = () => {
  const [albums, setAlbums] = useState(Helper.storageData());
  const [albumsCount, setAlbumsCount] = useState(Helper.storageData().length);

  return (
    <div className="App">
      <AddAlbum setAlbums={setAlbums} setAlbumsCount={setAlbumsCount}></AddAlbum>
      <Header setAlbums={setAlbums} albumsCount={albumsCount}/>
      <AlbumsHeader />
      {albums.length ? albums.map((album) => 
        <Album data={album} setAlbums={setAlbums} setAlbumsCount={setAlbumsCount} key={id++}/>
      ) : <p className="no-albums">{Helper.storageData().length === 0 ? 'Nije dodan niti jedan album.' : 'Niti jedan album ne odgovara pretrazi.'}</p>}
    </div>
  );
}

export default App;
