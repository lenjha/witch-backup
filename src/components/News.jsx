import React from 'react';
// import ReactDOM from 'react-dom';

function News() {
  return (
    <div className='section'>
      <style jsx>{`
      `}</style>
      <h1>Community News</h1>
      <h4>Witcherie is being worked on!</h4>
      <h4>To-Do List:</h4>
      <ul>
        <li>Push a random Creature and stuff to the userCreatures array</li>
        <li>Take Item from Creature<ul>
        </ul></li>
        <li>Implement crafting functionality<ul>
          <li>Remove items used in crafting from the userItems array</li>
          <li>Add item into userItems array</li>
        </ul></li>
        <li>Drawings for header, logo, creatures, and items - perhaps other illustrations as well</li>
      </ul><br />
      <h4>Beyond MVP:</h4>
      <ul>
        <li>Consider transitions/animations throughout the site</li>
        <li>Cooldown for Explore/Harvesting</li>
        <li>Weather API for Creature discovery chance</li>
        <li>Harvest Creature for special Items</li>
      </ul>
    </div>
  );
}

export default News;
