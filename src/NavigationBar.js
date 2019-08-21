import React from 'react'
import About from './About.js'
import TopSearches from './TopSearches'
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown'


import { Navbar } from 'react-bootstrap';
// import {  Navbar } from 'reactstrap';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'red',
  textDecoration: 'none',
  color: 'black',
}


const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
    <NavLink
   to="/About"
   /* set exact so it knows to only set activeStyle when route is deeply equal to link */
   exact
   /* add styling to Navlink */
   style={link}
   /* add prop for activeStyle */
   activeStyle={{
     background: 'red'
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
  background: 'orange'
}}
>Top Searches</NavLink>
  <Dropdown/>
  </Navbar>

</div>

  );
};



export default NavigationBar;
