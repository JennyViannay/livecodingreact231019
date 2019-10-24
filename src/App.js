import React from 'react';

import './App.css';
// STYLE NESS 8BIT
import { Container } from "nes-react";
import Nav from './components/layout/Nav';
import Login from './components/Login';


function App() {
  //RECUPERE DANS LE LOCAL STORAGE LA VALEUR STOCKEE DANS USERNAME
  const username = localStorage.getItem('username');
  return (
    <div className="App">
      {/* CONDITIONNE ICI L'AFFICHAGE DE L'ENTRÉE DE L'APPLICATION (PAGE HOME '/'), SI USERNAME EXISTE ALORS J'AFFICHE '/' SINON J'ARRIFCHE '/LOGIN' */}
        {username ? <Nav /> : <Login />}

    </div>
  );
}

export default App;
