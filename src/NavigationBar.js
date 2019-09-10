import React from 'react'
import About from './About.js'
import TopSearches from './TopSearches'
import { NavLink } from 'react-router-dom';
import DropDown from './DropDown'
import logo from './assets/logo.png'
import SearchContainer from './Containers/SearchContainer'

import {  Navbar } from 'reactstrap';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'white',
}


const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" size="large" variant="dark">
    <NavLink
   to="/About"
   exact
   style={link}
   activeStyle={{
     background: 'white'
   }}
 >About</NavLink>
 <NavLink
to="/TopSearches"
/* set exact so it knows to only set activeStyle when route is deeply equal to link */
exact
/* add styling to Navlink */
style={link}
/* add prop for activeStyle */
activeStyle={{
  background: 'white'
}}
>Top Searches</NavLink>
  // <DropDown/>

  </Navbar>

</div>

  );
};





export default NavigationBar;
