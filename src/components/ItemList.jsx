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
name:
}
]

const usersItems = [  {
  name: 'Stibium Crystal',
  description: 'Shinyyyyy.',
  image: './../../img/apple.jpg'
},
{
  name: 'Kohl',
  description: 'Fashion statement that never really went out of style.',
  image: './../../img/apple.jpg'
},
{
  name: 'Wismut Horn',
  description: 'A little soft.',
  image: './../../img/apple.jpg'
},
{
  name: 'Wismut Eye',
  description: 'It\'s looking right at me.',
  image: './../../img/apple.jpg'
},
{
  name: 'Mirablis Flower',
  description: 'Mirablis are very proud of their little flower.',
  image: './../../img/apple.jpg'
},
{
  name: 'Mirablis Root',
  description: 'It\'s kind of hairy...',
  image: './../../img/apple.jpg'
},
{
  name: 'Mirablis Leaf',
  description: 'A lil leaf',
  image: './../../img/apple.jpg'
}
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
