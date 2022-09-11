import * as React from 'react';
import Header from './structure/Header.js';
import Main from './structure/Main.js';
import './styles/globals.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Main />
    <Footer />  */}
    </div>
  );
};
export default App;
