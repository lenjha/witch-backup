import React from 'react';
import ItemList from './ItemList';

function Crafting(){
  return(
    <div>
      <style jsx>{`
        background: salmon;
        padding: 10px;
        display: flex;
        justify-content: space-around;
      `}</style>
      <h3>This is the Crafting Section!</h3>
      <ItemList />
    </div>
  );
}

export default Crafting;
