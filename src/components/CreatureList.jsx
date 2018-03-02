import React from 'react';
import Creature from './Creature';

const masterCreaturesList = [
  {
    name: 'Stibium',
    image: './../../img/apple.jpg',
    items: ['Meat', 'Kohl']
  },
  {
    name: 'Wismut',
    image: './../../img/apple.jpg',
    items: ['Wismut Horn', 'Wismut Eye']
  },
  {
    name: 'Mirablis',
    image: './../../img/apple.jpg',
    items: ['Potato', 'Mirablis Root', 'Mirablis Flower']
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
        button {
          background: lavender;
          border-radius: 20px;
        }
      `}</style>
      <p>These are the Creature(s) you have collected!</p>
      {usersCreatures.map((creature, index) =>
        <Creature name={creature.name}
          image={creature.image}
          items={creature.items}
          key={index}/>
      )}
    </div>
  );
}

export default CreatureList;
