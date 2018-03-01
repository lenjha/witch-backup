import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Explore from './Explore';
import CreatureHome from './CreatureHome';
import Inventory from './Inventory';
import Crafting from './Crafting';

function App() {
  return (
    <div>
      <style jsx>{`
        font-family: monospace;
      `}</style>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/explore' component={Explore} />
      <Route path='/creaturehome' component={CreatureHome} />
      <Route path='/inventory' component={Inventory} />
      <Route path='/crafting' component={Crafting} />
    </div>
  );
}

export default App;
