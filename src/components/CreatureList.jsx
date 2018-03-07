import React from 'react';
import Creature from './Creature';
import MasterCreatureList from './MasterCreatureList';

function CreatureList() {
  const length = Object.keys(MasterCreatureList).length;
  const random = Math.floor(Math.random()*length);
  return (
    <div>
      <style jsx>{`
        background: pink;
        button {
          background: lavender;
          border-radius: 20px;
        }
      `}</style>
      <p>These are the Creature(s) you have collected!</p>
      {Object.keys(MasterCreatureList).map((id, index) => {
        if (index === random){
          return <Creature creature={MasterCreatureList[id]}
            key={index}/>;
        }
      })
      }
    </div>
  );
}

export default CreatureList;
