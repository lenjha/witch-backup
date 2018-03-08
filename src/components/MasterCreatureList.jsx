import Stibium from './../../img/creatures/stibium2.png';
import Wismut from './../../img/creatures/wismut2.png';
import Mirablis from './../../img/creatures/mirablis2.png';

export default{
  stibium : {
    name: 'MasterStibium',
    image: Stibium,
    items: ['Meat', 'Egg']
  },
  wismut : {
    name: 'MasterWismut',
    image: Wismut,
    items: ['Milk']
  },
  mirablis : {
    name: 'MasterMirablis',
    image: Mirablis,
    items: ['Potato', 'Onion']
  }
};

// Object.keys(objectName).map(key =>
//   objectName[key]
// )

// length of MasterCreatureList (objects) - then generate a number from that
