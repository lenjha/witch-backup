import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  const link={
    margin: '20px',
    color: '#3a3d42',
    textDecoration: 'none'
  };
  return(
    <div>
      <style jsx>{`
        footer {
          background: lightyellow;
          bottom: 0;
          padding: 20px;
          display: flex;
        }
      `}</style>
      <footer>
        <div className='footer-section'>
          <h4>Navigation</h4>
          <p><Link style={link} to='/explore'>Explore</Link></p>
          <p><Link style={link} to='/creaturehome'>Creature</Link></p>
          <p><Link style={link} to='/inventory'>Inventory</Link></p>
          <p><Link style={link} to='/crafting'>Crafting</Link></p>
        </div>
        <div className='footer-section'>
          <p>Jujubes cupcake oat cake biscuit ice cream chocolate. Brownie oat cake icing sugar plum icing cotton candy ice cream. Cake marzipan sweet carrot cake macaroon. Pudding jelly apple pie. Pastry tiramisu caramels ice cream ice cream pie muffin pie. Sweet powder cookie wafer tootsie roll cotton candy biscuit tart sweet roll. Marzipan caramels cupcake bear claw. Cookie carrot cake gingerbread dragée carrot cake wafer tootsie roll donut. Biscuit gummi bears pie. Jujubes lemon drops wafer gummi bears jelly beans. Sweet lollipop bonbon tart jelly-o halvah.</p>
          <h5>© Copyright 2018 lenjha</h5>
        </div>



      </footer>
    </div>
  );
}

export default Footer;
