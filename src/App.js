import React, {useState, useEffect} from "react";
import "./App.css";
import Head from './Head';
import SpacePhoto from './SpacePhoto';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [selectedData, selectData] = useState(null)

const nasaPhotos = () => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=itGbk2qKoCROALVCWHzayHBeCHRi7Gute7uJHTsm')
  .then((res) =>{
    console.log(res.data)
    setData(res.data)
  })
  .catch(err =>{console.log(err)})
}

  useEffect(nasaPhotos,[])

  return (
    <div className="App">
      <Head/>
      <SpacePhoto data={data}/>
    </div>
  );
}

export default App;
