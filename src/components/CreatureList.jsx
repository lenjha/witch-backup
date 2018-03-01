import React from 'react';
import Creature from './Creature';

const usersCreatures = [
  {
    name: 'Stibium',
    personality: 'Shy',
    image: './../../img/apple.jpg',
    parts: ['Stibium Crystal', 'Kohl']
  }
];

function CreatureList() {
  return (
    <div>
      <p>Creature works!</p>
      {usersCreatures.map((creature, index) =>
        <Creature name={creature.name}
          personality={creature.personality}
          image={creature.image}
          parts={creature.parts}
          key={index}/>
      )}
    </div>
  );
}

export default CreatureList;
