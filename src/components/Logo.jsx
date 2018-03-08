import React from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import heart from './../../img/heart.png';
import logo from './../../img/logo.png';


function Logo() {
  const link={
    margin: '20px',
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none',
  };
  return (
    <div>
      <style jsx>{`
        display: flex;
        align-items: center;
        img {
          width: 35%;
          max-width: 900px;
        }
        h1 {
          font-size: 5em;
          text-align: center;
        }
      `}</style>

      <Link style={link} to='/'><img src={logo}></img></Link>
    </div>
  );
}

export default Logo;
