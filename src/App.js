import logo from './logo.svg';
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

}

export default App;
