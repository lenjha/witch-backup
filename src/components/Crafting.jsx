import React from 'react';
import CraftingItems from './CraftingItems';
import CraftingSection from './CraftingSection';

function Crafting(){
  return(
    <div className='section'>
      <style jsx>{`
        padding: 10px;
        display: flex;
      `}</style>

      <CraftingSection />
      <CraftingItems />
    </div>
  );
}

export default Crafting;
