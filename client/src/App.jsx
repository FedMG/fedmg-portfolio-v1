// import * as React from 'react';
import { useEffect } from "react";
import Header from "./structure/Header.jsx";
import Main from "./structure/Main.jsx";
import "./styles/globals.css";

function App() {
  // useEffect();

  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Footer />  */}
    </div>
  );
}
export default App;
