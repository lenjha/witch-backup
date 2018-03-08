import React from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import heart from './../../img/heart.png';


function Logo() {
  const link={
    margin: '20px',
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none'
  };
  return (
    <div>
      <style jsx>{`
        display: flex;
        align-items: center;
        img {
          width: 100px;
          height: 100px;
        }
        h1 {
          font-size: 5em;
          text-align: center;
        }
      `}</style>
      <img src={heart} />
      <Link style={link} to='/'><h1>Witcherie</h1></Link>
    </div>
  );
}

export default Logo;
