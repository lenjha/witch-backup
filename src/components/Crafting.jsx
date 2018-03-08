import React from 'react';
import CraftingItems from './CraftingItems';
import CraftingSection from './CraftingSection';

function Crafting(){
  return(
    <div className='section'>
      <style jsx>{`
          .craft-body{            
            padding: 10px;
            display: flex;
          }
      `}</style>
      <div className='craft-body'>
        <CraftingSection />
        <CraftingItems />
      </div>
    </div>
  );
}

export default Crafting;
