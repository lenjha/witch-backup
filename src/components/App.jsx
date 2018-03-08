import React from 'react';
// import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Explore from './Explore';
import CreatureHome from './CreatureHome';
import Inventory from './Inventory';
import Crafting from './Crafting';
import Error404 from './Error404';

import Stibium from './../../img/creatures/stibium.png';
import Wismut from './../../img/creatures/wismut.png';
import Mirablis from './../../img/creatures/mirablis.png';

import PlaceholderPic from './../../img/heart.png';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        creatures: [null],
        inventory: [null]
      },
      creaturesById: {
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
      },
      inventoryById: {
        meat : {
          name: 'Meat',
          description: 'Some tail meat from Stibium - it grows back with time.',
          image: PlaceholderPic
        },
        egg : {
          name: 'Egg',
          description: 'A Stibium egg.',
          image: PlaceholderPic
        },
        milk : {
          name: 'Milk',
          description: 'Milk.  It\'s got a slight purple tint.',
          image: PlaceholderPic
        },
        potato : {
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
    this.handleAddCreature = this.handleAddCreature.bind(this);
  }

  handleAddCreature(){
    this.setState({});
    console.log('state is...');
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <style jsx>{`
            font-family: monospace;
            `}</style>
        <Header />
        <Switch>
          <Route exact path='/' render={Home} />
          <Route path='/explore' render={Explore} />
          <Route path='/creaturehome' render={CreatureHome} />
          <Route path='/inventory' render={Inventory} />
          <Route path='/crafting' component={Crafting} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
