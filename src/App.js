import React from "react";
import "./App.css";
import axios from 'axios'
import Head from './Head'
import SpacePhoto from './SpacePhoto'

function App() {
  return (
    <div className="App">
      <Head/>
      <SpacePhoto/>
    </div>
  );
}

export default App;
