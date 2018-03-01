import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function NavBar() {
  const link={
    margin: '20px',
    color: 'red',
    textDecoration: 'none'
  };
  return (
    <div>
      <style jsx>{`
        background: aliceblue;
        width: 100%;
        margin: 0;
      `}</style>
      <Link style={link} to='/'>Home</Link>
      <Link style={link} to='/location'>Location</Link>
      <Link style={link} to='/creature'>Creature</Link>
      <Link style={link} to='/inventory'>Inventory</Link>
      <Link style={link} to='/crafting'>Crafting</Link>
    </div>
  );
}

export default NavBar;
