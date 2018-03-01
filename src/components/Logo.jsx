import React from 'react';
import ReactDOM from 'react-dom';
import heart from './../../img/heart.png';

function Logo() {
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
      <h1>Witcherie</h1>
    </div>
  );
}

export default Logo;
