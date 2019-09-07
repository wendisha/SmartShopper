import React from 'react'
import {
  Nav,
  NavbarBrand,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


// const link = {
//   textDecoration: 'underline'
// }


const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <NavLink tag={Link} to="/about">About</NavLink>
            <NavLink tag={Link} to="/TopSearches">Top Searches</NavLink>
            <NavLink tag={Link} to="/Contact">Contact</NavLink>
          </Nav>
        </Navbar>
        
    )

}






export default NavigationBar
