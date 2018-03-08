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
import Footer from './Footer';
import Error404 from './Error404';

import Stibium from './../../img/creatures/stibium2.png';
import Wismut from './../../img/creatures/wismut2.png';
import Mirablis from './../../img/creatures/mirablis2.png';
import MeatImg from './../../img/items/meat.png';
import EggImg from './../../img/items/egg.png';
import MilkImg from './../../img/items/milk.png';
import WheatImg from './../../img/items/wheat.png';

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
          image: MeatImg
        },
        egg : {
          name: 'Egg',
          description: 'A Stibium egg.',
          image: EggImg
        },
        milk : {
          name: 'Milk',
          description: 'Milk.  It\'s got a slight purple tint.',
          image: MilkImg
        },
        wheat : {
          name: 'Wheat',
          description: 'Wheat.  Don\'t get too excited.',
          image: WheatImg
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
        <style global jsx>{`
            html, body {
              margin: 0;
              padding: 0;
              font-family: monospace;
              background: aliceblue;
            }

            .section {
              min-height: 60vh;
              border: 5px white solid;
              padding: 10px;
              border-radius: 10px;
              background: #bee5bf;
              width: 70%;
              max-width: 1000px;
              margin: 10px auto;
            }
            .creature, .item {
              border: 5px white solid;
              border-radius: 20px;
              background: aliceblue;
              padding: 5px;
              width: 225px;
              text-align: center;
            }
            .item {
              max-width: 175px;
              max-height: 175px;
              margin: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            @media screen and (max-width: 400px){
              .creature, .item {
                margin: auto;
              }
            }
            button {
              font-family: monospace;
              border: 4px white solid;
              border-radius: 20px;
              background: #f9bbbd;
            }
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
        <Footer />
      </div>
    );
  }
}

export default App;
