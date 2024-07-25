import { useState } from 'react'
import {BodyArea}from'./st_source/BodyArea'
import {BottomArea}from'./st_source/BottomArea'
import {TopArea}from'./st_source/TopArea'
import './st_style/App.css'

function App() {
  const [leftMenu,setLeftMenu]= useState(4);
  return (
    <div id='App'>

      <TopArea setLeftMenu={setLeftMenu}/>
      <BodyArea leftMenu={leftMenu}/>
      <BottomArea/>

    </div>
  );
}

export default App;
