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
          span{
            display: flex;
            justify-content: flex-end;
          }
      `}</style>
      <h3>Crafting Items</h3>
      <span>
        <ItemList />
      </span>
    </div>
  );
}

export default CraftingItems;
