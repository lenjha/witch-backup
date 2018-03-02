import React from 'react';
// import ReactDOM from 'react-dom';
import News from './News';
import About from './About';

function Home() {
  return (
    <div>
      <style jsx>{`
        span{
          display: flex;
          justify-content: center;
        }
      `}</style>
      <h1>Welcome!</h1>
      <span>
        <News />
        <About />
      </span>
    </div>
  );
}

export default Home;
