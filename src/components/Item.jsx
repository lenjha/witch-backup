import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


function Item(props) {
  const {name, description, image} = props.item;
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
          background: lightyellow;
      `}</style>

      {image}<h3>{name}</h3> <i>{description}</i>

    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object
};
export default Item;
