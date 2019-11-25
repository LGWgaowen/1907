import React from 'react';
import Carouseler from "./Carousel"
import AppCss from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={AppCss.hello} id={AppCss.font}>hello 1907</h1>
      <input type="number"/>
      <input type="file"></input>
        <Carouseler></Carouseler>
    </div>
  );
}

export default App;
