import React from 'react';

function Crafting(){
  function craft(event){
    event.preventDefault();
    // remove the used items from inventory
    // if the items used match up to the items in a formula's ingredients section, add the formula result to inventory
    alert('Craft!');
  }
  return(
    <div>
      <style jsx>{`
        width: 100%;
        button {
          width: 100px;
        }
      `}</style>
      <h2>Crafting</h2>
      <button onClick={craft}>CRAFT!</button>
    </div>
  );
}

export default Crafting;
