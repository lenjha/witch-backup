import React from 'react';
// import ReactDOM from 'react-dom';
import ItemList from './ItemList';

function CraftingItems() {
  return (
    <div>
      <style jsx>{`
          h3{
            text-align: center;
          }
          .craft-list{
            display: flex;
            align-content: center;
          }

      `}</style>
      <h3>Crafting Items</h3>
      <div className='craft-list'>
        <ItemList />
      </div>
    </div>
  );
}

export default CraftingItems;
