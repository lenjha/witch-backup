// import PropTypes from 'prop-types';

//const {creatures, inventory} = props.item;
// return(
// ...
// );

// User.propTypes = {
//   creatures: PropTypes.object,
//   inventory: PropTypes.object
// }

import Stibium from './../../img/creatures/stibium.png';
import Wismut from './../../img/creatures/wismut.png';
import Mirablis from './../../img/creatures/mirablis.png';

import PlaceholderPic from './../../img/heart.png';

export default {
  user: {
    creatures: [1],
    inventory: [2]
  },
  creaturesById: {
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
  },
  inventoryById: {
    1 : {
      name: 'Meat',
      description: 'Some tail meat from Stibium - it grows back with time.',
      image: PlaceholderPic
    },
    2 : {
      name: 'Egg',
      description: 'A Stibium egg.',
      image: PlaceholderPic
    },
    3 : {
      name: 'Milk',
      description: 'Milk.  It\'s got a slight purple tint.',
      image: PlaceholderPic
    },
    4 : {
      name: 'Potato',
      description: 'A mundane yet delicious tuber.',
      image: PlaceholderPic
    },
    onion : {
      name: 'Onion',
      description: 'An onion.',
      image: PlaceholderPic
    },
    bread : {
      name: 'Bread',
      description: 'It smells yummy!',
      image: PlaceholderPic
    },
    onionMilk : {
      name: 'Onion Milk',
      description: 'Oddly enough, it\'s not the most popular flavor.',
      image: PlaceholderPic
    },
    milkToast : {
      name: 'Milk Toast',
      description: 'Fairly inoffensive food, light and easy to digest.',
      image: PlaceholderPic
    },
    englishBreakfast : {
      name: 'English Breakfast',
      description: 'Palpatations, in gustatory form.',
      image: PlaceholderPic
    }
  }
};
