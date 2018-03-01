import React from 'react';
import PropTypes from 'prop-types';

function Creature(props) {
  return (
    <div>
      <style jsx>{`
      `}</style>

      <h2>{props.name}</h2>
      <i>{props.personality}</i>
      <p>{props.parts[Math.floor(Math.random()*props.parts.length)]}</p>

    </div>
  );
}

Creature.propTypes = {
  name: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  parts: PropTypes.arrayOf(PropTypes.string)
};
export default Creature;
