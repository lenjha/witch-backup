import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

function NavBar() {
  const link={

  };
  return (
    <div>
      <style jsx>{`
        background: aliceblue;
      `}</style>
    <Link style={link} to='/'>Home</Link>
    <Link style={link} to='/location'>Location</Link>
    <Link style={link} to='/inventory'>Inventory</Link>
    </div>
  );
}

export default NavBar;
