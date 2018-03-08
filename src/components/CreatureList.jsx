import React from 'react';
import Creature from './Creature';
import MasterCreatureList from './MasterCreatureList';

function CreatureList() {
  const length = Object.keys(MasterCreatureList).length;
  const random = Math.floor(Math.random()*length);
  return (
    <div>
      <style jsx>{`
      `}</style>
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
