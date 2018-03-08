import React from 'react';
// import PropTypes from 'prop-types';
import CreatureList from './CreatureList';
function CreatureHome() {
  return (
    <div className='section'>
      <style jsx>{`
      `}</style>
      <h2>Creatures</h2>
      <p>This is the Creature Home page, wherein any collected Creatures will reside.</p>
      <CreatureList />
    </div>
  );
}

export default CreatureHome;
