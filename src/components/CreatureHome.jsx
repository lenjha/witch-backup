import React from 'react';
import PropTypes from 'prop-types';
import CreatureList from './CreatureList';
function CreatureHome() {
  return (
    <div>
      <style jsx>{`
        background: gray;
        width: 100%;
        height: 30px;
      `}</style>

      <p>CreatureHome works and this is proof!</p>
      <CreatureList />

    </div>
  );
}

export default CreatureHome;
