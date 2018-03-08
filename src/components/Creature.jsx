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
        img {
          width: 200px;
          margin: 5px;
        }
        .creature{
          margin: 5px;
        }

      `}</style>
      <div className='creature'>
        <h2>{name}</h2>
        <p>Has: {items}</p>
        <img src={image} /><br />
        <button onClick={getItem}>Get Item!</button>
      </div>
    </div>
  );
}

Creature.propTypes = {
  creature: PropTypes.object
};
export default Creature;
