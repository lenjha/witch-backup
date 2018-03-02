import React from 'react';

function About(){
  return(
    <div>
      <style jsx>{`
        background: salmon;
      `}</style>
      <h3>This is the About Section!</h3>
      <h4>To-Do List:</h4>
      <ul>
        <li>Push a random Creature and stuff to the userCreatures array</li>
        <li>Harvest Creature - remove them from the userCreatures array then add a random object to userItems array<ul>
          <li>Alternatively, simply take an object from the Creature.</li>
        </ul></li>
        <li>Implement crafting functionality<ul>
          <li>Remove items used in crafting from the userItems array</li>
          <li>Add item into userItems array</li>
        </ul></li>
        <li>Drawings for header, logo, creatures, and items - perhaps other illustrations as well</li>
        <li>Consider transitions/animations throughout the site</li>
        <li>Cooldown for Explore/Harvesting</li>
        <li>Weather API for Creature discovery chance</li>
      </ul>
    </div>
  );
}

export default About;
