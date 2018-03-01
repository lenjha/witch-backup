import React from 'react';
import Creature from './Creature';

const usersCreatures = [
  {
    name: 'Stibium',
    personality: 'Capricious',
    image: './../../img/apple.jpg',
    parts: ['Stibium Crystal', 'Kohl']
  },
  {
    name: 'Wismut',
    personality: 'Shy',
    image: './../../img/apple.jpg',
    parts: ['Witmut Horn', 'Wismut Eye']
  },
  {
    name: 'Mirablis',
    personality: 'Quirky',
    image: './../../img/apple.jpg',
    parts: ['Mirablis Leaf', 'Mirablis Root', 'Mirablis Flower']
  }
];

function CreatureList() {
  return (
    <div>
      <style jsx>{`
        background: pink;
      `}</style>
      <p>CreatureList works!</p>
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
