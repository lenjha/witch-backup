import React from 'react';
import Wismut from './../../img/creatures/wismut2.png';

function About(){
  return(
    <div className='section'>
      <style jsx>{`
          padding: 10px;
        .section{
          max-width: 600px;
        }
          img {
            width: 50%;
            max-width: 300px;
            bottom: 0;
          }
      `}</style>
      <h3>This is the About Section!</h3>
      <p>Witcherie will be a virtual pet simulator with crafting elements.</p>
      <p>Bonbon toffee powder jujubes donut biscuit tiramisu jelly beans. Marshmallow tart wafer muffin. Oat cake oat cake lollipop gummies dragée candy cake. Lemon drops gingerbread sweet tart biscuit biscuit. Toffee cotton candy gingerbread sweet roll. Toffee muffin lollipop biscuit lemon drops halvah candy. Ice cream ice cream candy cupcake topping. Gingerbread biscuit lemon drops chupa chups candy biscuit croissant pudding. Pudding cake soufflé soufflé. Gummies jelly beans lollipop cake oat cake macaroon donut bear claw. Jelly beans soufflé bear claw cupcake candy canes cheesecake jelly-o candy canes pastry. Sweet ice cream cotton candy brownie biscuit jujubes cupcake.</p>

      <p>Carrot cake jelly caramels tiramisu muffin halvah. Brownie marshmallow caramels muffin jelly beans fruitcake. Jelly beans fruitcake dragée sweet roll jelly beans icing bonbon icing. Chocolate cake chupa chups halvah. Toffee lollipop marzipan cheesecake cake bear claw candy marshmallow. Jelly beans bonbon gummies jelly-o. Jujubes sesame snaps carrot cake oat cake. Marshmallow tootsie roll donut danish. Powder gummi bears apple pie jelly-o gummi bears tiramisu toffee marzipan bear claw. Donut carrot cake danish sweet sesame snaps carrot cake jelly. Tootsie roll muffin jelly-o jelly-o. Pudding chocolate lemon drops apple pie fruitcake marshmallow.</p>
      <img src={Wismut}></img>
    </div>
  );
}


export default About;
