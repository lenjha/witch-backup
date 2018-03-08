import React from 'react';

function Area() {
  function summonCreature(event){
    event.preventDefault();
    // usersCreatures.push(masterCreaturesList[Math.floor(Math.random()*masterCreaturesList.length)]);
    alert('Summon!');
  }
  return (
    <div>
      <style jsx>{`
      `}</style>
      <p>Area works!</p>
      <button onClick={summonCreature}>Summon a Creature!</button>
    </div>
  );
}

export default Area;
