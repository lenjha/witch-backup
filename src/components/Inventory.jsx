import React from 'react';
// import ReactDOM from 'react-dom';
import ItemList from './ItemList';

function Inventory() {
  return (
    <div className='section'>
      <h2>Inventory</h2>
      <p>This is the user's inventory section.</p>
      <ItemList />
    </div>
  );
}

export default Inventory;
