import React from 'react';
import PropTypes from 'prop-types';

function Creature(props) {
  return (
    <div>
      <style jsx>{`
        background: lightyellow;
        margin: 0;
      `}</style>
      <h1>Current Pet(s)</h1>

      <h2>{props.name}</h2>

    </div>
  );
}

Creature.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  parts: PropTypes.arrayOf(PropTypes.string)
};
export default Creature;
