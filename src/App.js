import React from 'react';
import { Router } from '@reach/router';

import Home from './components/Home';
import Word from './components/Word';
import ColorWord from './components/ColorWord';

function App() {
  return (
    <Router>
      <Home path="/home"/>
      <Word path="/:word"/>
      <ColorWord path="/:word/:bgColor/:textColor"/>
    </Router>
  );
}

export default App;
