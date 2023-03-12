import AddAlbum from "./components/AddAlbum";
import Header from "./components/Header";
import Album from "./components/Album";
import { Helper } from "./Helper";
import { useState } from "react";

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
      <Header />
      {albums.map((album) => 
        <Album data={album} key={id++}/>
      )}
      <button onClick={() => console.log(albums)}>Console log albums</button>
    </div>
  );
}

export default App;
