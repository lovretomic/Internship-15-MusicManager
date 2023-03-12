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

  return (
    <div className="App">
      <AddAlbum setAlbums={setAlbums}></AddAlbum>
      <Header setAlbums={setAlbums}/>
      <AlbumsHeader />
      {albums.map((album, i) => 
        <Album data={album} listIndex={i} setAlbums={setAlbums} key={id++}/>
      )}
    </div>
  );
}

export default App;
