import React from 'react';
import CraftingItems from './CraftingItems';
import CraftingSection from './CraftingSection';

function Crafting(){
  return(
    <div>
      <style jsx>{`
        padding: 10px;
        display: flex;
        justify-content: space-around;
      `}</style>

      <CraftingSection />
      <CraftingItems />
    </div>
  );
}

export default Crafting;
