import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';

import Header from "./Header";
import Home from "./Home";
import Creature from "./Creature";
import Inventory from "./Inventory";

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/creature' component={Creature} />
      <Route path='/inventory' component={Inventory} />
    </div>
  );
}

export default App;
