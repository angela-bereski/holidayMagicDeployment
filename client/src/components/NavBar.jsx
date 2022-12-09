import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="pretty">
        <h1>Holiday Magic Makers</h1>
        <div className="navNav">
          <NavLink to ="/magicMakers">Home</NavLink>
          <NavLink to ="/addMagicMaker">Add Some Magic</NavLink>
        </div>
    </div>
  )
}

export default NavBar