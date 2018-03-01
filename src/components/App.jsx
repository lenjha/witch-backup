import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Location from './Location';
import Creature from './Creature';
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
      <Route path='/location' component={Location} />
      <Route path='/creature' component={Creature} />
      <Route path='/inventory' component={Inventory} />
      <Route path='/crafting' component={Crafting} />
    </div>
  );
}

export default App;
