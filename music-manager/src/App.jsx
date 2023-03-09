import Header from "./components/Header";
import Album from "./components/Album";

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
  return (
    <div className="App">
      <Header />
      {data.map((album) => 
        <Album data={album} key={id++}/>
      )}
    </div>
  );
}

export default App;
