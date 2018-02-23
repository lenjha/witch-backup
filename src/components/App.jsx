import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom';

import Header from "./Header";
import Location from "./Location";

function App() {
  return (
    <div>
      <Header />
      <Route>
        <Location />
      </Route>
    </div>
  );
}

export default App;
