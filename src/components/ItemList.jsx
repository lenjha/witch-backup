import React from 'react';
import Item from './Item';

const masterItemList = [
  {
    name: 'Apple',
    description: 'It\'s an apple.',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Leaf',
    description: 'Lucky leaf!',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Bookmark',
    description: 'Saves your spot.',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Water Bottle',
    description: 'Found on the sidewalk.',
    image: './../../img/apple.jpg'
  },
  {
    name: 'Freaky Meat',
    description: 'Freaky!',
    image: './../../img/apple.jpg'
  }
];

function ItemList(){
  return (
    <div>
      <style jsx>{`
        background: red;
        display: flex;
        flex-wrap: wrap;
        max-width: 1400px;
      `}</style>
      {masterItemList.map((item, index) =>
        <Item name={item.name}
          description={item.description}
          image={item.image}
          key={index}/>
      )}
    </div>
  );
}

export default ItemList;
