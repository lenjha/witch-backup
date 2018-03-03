import React from 'react';

function Crafting(){
  function craft(event){
    event.preventDefault();
    // 
    alert('Craft!');
  }
  return(
    <div>
      <style jsx>{`
        background: red;
        width: 100%;
        button {
          background: darkred;
          border-radius: 20px;
          color: white;
        }
      `}</style>
      <h3>This is the Crafting Section!</h3>
      <p>First Item to Use</p>
      <p>Second Item to Use</p>
      <p>Possible Third Item to Use</p>
      <button onClick={craft}>CRAFT!</button>
    </div>
  );
}

export default Crafting;
