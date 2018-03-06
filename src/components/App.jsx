import React from 'react';
// import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Explore from './Explore';
import CreatureHome from './CreatureHome';
import Inventory from './Inventory';
import Crafting from './Crafting';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <style jsx>{`
        font-family: monospace;
      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/creaturehome' component={CreatureHome} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/crafting' component={Crafting} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
