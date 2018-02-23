import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';

import Header from "./Header";
import Home from "./Home";
import Location from "./Location";
import Inventory from "./Inventory";

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/location' component={Location} />
      <Route path='/inventory' component={Inventory} />
    </div>
  );
}

export default App;
