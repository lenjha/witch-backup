import React from 'react';
import CraftingItems from './CraftingItems';

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
      <CraftingItems />
    </div>
  );
}

export default Crafting;
