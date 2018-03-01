import React from 'react';
// import PropTypes from 'prop-types';
import CreatureList from './CreatureList';
function CreatureHome() {
  return (
    <div>
      <style jsx>{`
        background: lightgray;
      `}</style>

      <p>This is the Creature Home page, wherein any collected Creatures will reside.</p>
      <CreatureList />

      <p>I still gotta find a better word for 'Creature' though...</p>
    </div>
  );
}

export default CreatureHome;
