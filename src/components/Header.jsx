import React from 'react';
// import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Logo from './Logo';
// import background from './../../img/bg.png';

function Header() {
  return (
    <div className='header'>
      <style jsx>{`
        .header {
          width: 100%;
          margin: 0;
          background-size: cover;
          background-position: center;
          background-image: url('https://i.imgur.com/6Nm4L76.jpg');
        }

        h1 {
          font-size: 5em;
          text-align: center;
        }
      `}</style>
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;
