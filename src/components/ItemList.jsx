import React from 'react';
import Item from './Item';
import MasterItemList from './MasterItemList';

function ItemList(){
  const itemsLength = Object.keys(MasterItemList).length;
  const randomItem = Math.floor(Math.random()*itemsLength);
  const randomItem2 = Math.floor(Math.random()*itemsLength);
  const randomItem3 = Math.floor(Math.random()*itemsLength);
  return (
    <div>
      <style jsx>{`
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
        justify-content: center;
      `}</style>
      {Object.keys(MasterItemList).map((id, index) => {
        if (index === randomItem){
          return <Item item={MasterItemList[id]}
            key={index}/>;
        }}
      )}
      {Object.keys(MasterItemList).map((id, index) => {
        if (index === randomItem2){
          return <Item item={MasterItemList[id]}
            key={index}/>;
        }}
      )}
      {Object.keys(MasterItemList).map((id, index) => {
        if (index === randomItem3){
          return <Item item={MasterItemList[id]}
            key={index}/>;
        }}
      )}
    </div>
  );
}

export default ItemList;
