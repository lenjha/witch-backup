import React from 'react';
import PropTypes from 'prop-types';
import CreatureList from './CreatureList';
function CreatureHome() {
  return (
    <div>
      <style jsx>{`
        background: lightgray;
        width: 100%;
        height: 30px;
      `}</style>

      <p>This is the Creature Home page, wherein any collected Creatures will reside.</p>
      <CreatureList />

    </div>
  );
}

export default CreatureHome;
