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

  const handleSetAlbums = (newAlbum) => {
    setAlbums([...albums, newAlbum]);
  }

  return (
    <div className="App">
      <AddAlbum addAlbum={handleSetAlbums}></AddAlbum>
      <Header setAlbums={setAlbums}/>
      <AlbumsHeader />
      {albums.map((album) => 
        <Album data={album} key={id++}/>
      )}
    </div>
  );
}

export default App;
