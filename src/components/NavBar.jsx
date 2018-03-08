import React from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function NavBar() {
  const link={
    margin: '20px',
    color: '#3a3d42',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'inline'
  };
  return (
    <div className='nav-section'>
      <style jsx>{`
        margin: 0;
        min-height: 19px;
        background: #f9bbbd;
        border: 3px solid white;
        padding: 2px;
        @media screen and (max-width: 400px){
          .nav-section{
            text-align: center;
          }
        }
      `}</style>
      <Link style={link} to='/explore'>Explore</Link>
      <Link style={link} to='/creaturehome'>Creature</Link>
      <Link style={link} to='/inventory'>Inventory</Link>
      <Link style={link} to='/crafting'>Crafting</Link>
    </div>
  );
}

export default NavBar;
