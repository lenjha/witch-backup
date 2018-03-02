import React from 'react';
import Item from './Item';

// const masterItemsList = [
//   {
//     name: 'Stibium Crystal',
//     description: 'Shinyyyyy.',
//     image: './../../img/apple.jpg'
//   },
//   {
//     name: 'Kohl',
//     description: 'Fashion statement that never really went out of style.',
//     image: './../../img/apple.jpg'
//   },
//   {
//     name: 'Wismut Horn',
//     description: 'A little soft.',
//     image: './../../img/apple.jpg'
//   },
//   {
//     name: 'Wismut Eye',
//     description: 'It\'s looking right at me.',
//     image: './../../img/apple.jpg'
//   },
//   {
//     name: 'Mirablis Flower',
//     description: 'Mirablis are very proud of their little flower.',
//     image: './../../img/apple.jpg'
//   },
//   {
//     name: 'Mirablis Root',
//     description: 'It\'s kind of hairy...',
//     image: './../../img/apple.jpg'
//   },
//   {
//     name: 'Mirablis Leaf',
//     description: 'A lil leaf',
//     image: './../../img/apple.jpg'
//   }
// ];

const masterItemsList = [
  {
    name: 'Meat',
    description: 'Some tail meat from Stibium - it grows back with time.',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Egg',
    description: 'A Stibium egg.',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Milk',
    description: 'Milk.  It\'s got a slight purple tint.',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Potato',
    description: 'A mundane yet delicious tuber.',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Onion',
    description: 'An onion.',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Bread',
    description: 'It smells yummy!',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Onion Milk',
    description: 'Oddly enough, it\'s not the most popular flavor.',
    image: './../../img/apple.jpg'
  },
  {
    name: 'English Breakfast',
    description: 'Palpatations, in gustatory form.',
    image: './../../img/apple.jpg'
  }
];

const usersItems = [
  masterItemsList[Math.floor(Math.random()*masterItemsList.length)],
  masterItemsList[Math.floor(Math.random()*masterItemsList.length)],
  masterItemsList[Math.floor(Math.random()*masterItemsList.length)]
];

function ItemList(){
  return (
    <div>
      <style jsx>{`
        background: salmon;
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
      `}</style>
      {usersItems.map((item, index) =>
        <Item name={item.name}
          description={item.description}
          image={item.image}
          key={index}/>
      )}
    </div>
  );
}

export default ItemList;
