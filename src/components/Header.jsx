import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";

function Header() {
  return (
    <div>
      <style jsx>{`
        background: salmon;
        width: 100%;
        margin: 0;
      `}</style>
      <h1>Header works!</h1>
      <NavBar />
    </div>
  );
}

export default Header;
