import logo from './logo.svg';
import Player from "./components/Player";
import './App.css';
import { useState, useEffect } from 'react';



function App() {
  const [songs, setSongs] = useState([
    {
      "title": "Ahh Oh",
      "artist": "Adult Time",
      "album": "Joy Imported From A Happier Age",
      "track": "1",
      "year": "2022",
      "img_src": "./songs_images/cover.jpg",
      "src": "./songs/Ahh Oh.wav",
    },
    {
      "title": "Shrine Lickers",
      "artist": "Adult Time",
      "album": "Joy Imported From A Happier Age",
      "track": "2",
      "year": "2022",
      "img_src": "./songs_images/cover.jpg",
      "src": "./songs/Shrine Lickers2.wav",
    },
    {
      "title": "Things Keep Happening",
      "artist": "Adult Time",
      "album": "Joy Imported From A Happier Age",
      "track": "3",
      "year": "2022",
      "img_src": "./songs_images/cover.jpg",
      "src": "./songs/Things Keep Happening2.wav",
    },
    {
      "title": "New Lighthouses",
      "artist": "Adult Time",
      "album": "Joy Imported From A Happier Age",
      "track": "4",
      "year": "2022",
      "img_src": "./songs_images/cover.jpg",
      "src": "./songs/New Lighthouses2.wav",
    },
    {
      "title": "New Normal",
      "artist": "Adult Time",
      "album": "Joy Imported From A Happier Age",
      "track": "5",
      "year": "2022",
      "img_src": "./songs_images/cover.jpg",
      "src": "./songs/New Normal2.wav",
    },
  ]);

  const [currentSongIndex,setCurrentSongIndex] = useState(0);
  const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=>{
    setNextSongIndex(()=>{
    if (currentSongIndex + 1 >songs.length - 1 ){
      return 0;
    } else{
      return currentSongIndex + 1;
    }
  });
  },[currentSongIndex])

  return (
    <div className="App">
    <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
    </div>
  );

}

export default App;
