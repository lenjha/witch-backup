import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


function Item(props) {
  const {name, description, image} = props.item;
  return (
    <div className='item'>
      <style jsx>{`

        img {
          max-width: 100px;
          height: auto;
        }
      `}</style>

      <img src={image} /><h3>{name}</h3> <i>{description}</i>

    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object
};
export default Item;
