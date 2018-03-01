import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div>
      <style jsx>{`
        width: 150px;
        height: 150px;
        margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: yellow;
      `}</style>

      <h3>{props.name}</h3> <i>{props.description}</i>

    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default Item;
