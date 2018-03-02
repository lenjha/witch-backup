import React from 'react';
import PropTypes from 'prop-types';

function Creature(props) {
  return (
    <div>
      <style jsx>{`
        background: lightyellow;
        margin: 0;
      `}</style>

      <h2>{props.name}</h2>
      <p>{props.items[Math.floor(Math.random()*props.items.length)]}</p>

    </div>
  );
}

Creature.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  parts: PropTypes.arrayOf(PropTypes.string)
};
export default Creature;
