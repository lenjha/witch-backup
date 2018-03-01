import React from 'react';
// import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Logo from './Logo';

function Header() {
  return (
    <div>
      <style jsx>{`
        background: honeydew;
        width: 100%;
        margin: 0;
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
