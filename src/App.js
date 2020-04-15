import React from 'react';
import logo from './logo.svg';
import './App.css';
import Approuter from '../src/confige/router/router'
import FooterPage from '../src/components/footer/footer'
function App() {
  return (
    <div className="App">
     <Approuter/>
     {/* <FooterPage /> */}
    </div>
  );
}

export default App;
