import Stibium from './../../img/creatures/stibium.png';
import Wismut from './../../img/creatures/wismut.png';
import Mirablis from './../../img/creatures/mirablis.png';

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
