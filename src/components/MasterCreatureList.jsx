import Stibium from './../../img/creatures/stibium.png';
import Wismut from './../../img/creatures/wismut.png';
import Mirablis from './../../img/creatures/mirablis.png';

export default{
  stibium : {
    name: 'Stibium',
    image: Stibium,
    items: ['Meat', 'Egg']
  },
  wismut : {
    name: 'Wismut',
    image: Wismut,
    items: ['Milk']
  },
  mirablis : {
    name: 'Mirablis',
    image: Mirablis,
    items: ['Potato', 'Onion']
  }
};

// Object.keys(objectName).map(key =>
//   objectName[key]
// )

// length of MasterCreatureList (objects) - then generate a number from that
