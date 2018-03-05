import Stibium from './../../img/creatures/stibium.png';
import Wismut from './../../img/creatures/wismut.png';
import Mirablis from './../../img/creatures/mirablis.png';

export default{
  1 : {
    name: 'Stibium',
    image: Stibium,
    items: ['Meat', 'Egg']
  },
  2 : {
    name: 'Wismut',
    image: Wismut,
    items: ['Milk']
  },
  3 : {
    name: 'Mirablis',
    image: Mirablis,
    items: ['Potato', 'Onion']
  }
};

// Object.keys(objectName).map(key =>
//   objectName[key]
// )

// length of MasterCreatureList (objects) - then generate a number from that
