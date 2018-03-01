import React from 'react';
import Creature from './Creature';

const masterCreaturesList = [
  {
    name: 'Stibium',
    image: './../../img/apple.jpg',
    parts: ['Stibium Crystal', 'Kohl']
  },
  {
    name: 'Wismut',
    image: './../../img/apple.jpg',
    parts: ['Wismut Horn', 'Wismut Eye']
  },
  {
    name: 'Mirablis',
    image: './../../img/apple.jpg',
    parts: ['Mirablis Leaf', 'Mirablis Root', 'Mirablis Flower']
  }
];

const usersCreatures = [
  masterCreaturesList[Math.floor(Math.random()*masterCreaturesList.length)]
];

function CreatureList() {
  return (
    <div>
      <style jsx>{`
        background: pink;
      `}</style>
      <p>These are the Creature(s) you have collected!</p>
      {usersCreatures.map((creature, index) =>
        <Creature name={creature.name}
          image={creature.image}
          parts={creature.parts}
          key={index}/>
      )}
    </div>
  );
}

export default CreatureList;
