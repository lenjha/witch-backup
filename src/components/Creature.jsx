import React from 'react';
import PropTypes from 'prop-types';

function Creature(props) {
  function getItem(event){
    event.preventDefault();
    //userInventory.push(this.creature.parts[Math.floor(Math.random()*this.creature.parts.length)])
    alert('You got an item!');
  }

  const {name, image, items} = props.creature;

  return (
    <div>
      <style jsx>{`
        background: lightyellow;
        margin: 0;
        img {
          width: 120px;
          height: auto;
        }
        button {
          border-radius: 20px;
          background: #3e5170;
          color: white;
        }
      `}</style>
      <h2>{name}</h2>
      <img src={image} /><br />
      <button onClick={getItem}>Get Item!</button>
    </div>
  );
}

Creature.propTypes = {
  creature: PropTypes.object
};
export default Creature;
