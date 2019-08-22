import React from 'react';
// import './style.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap'
import { Link } from 'react-router-dom';



class DropDown extends React.Component {
  constructor(props) {
     super(props);

     this.toggle = this.toggle.bind(this);
     this.state = {
       dropdownOpen: false
     };
   }

   toggle() {
     this.setState(prevState => ({
       dropdownOpen: !prevState.dropdownOpen
     }));
   }
  render() {
    return (
       <div>
    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  <DropdownToggle caret>
    All Categories
  </DropdownToggle >
  <DropdownMenu>
    <DropdownItem tag={Link} to="/appliances">Appliances</DropdownItem>
    <DropdownItem tag={Link} to="/computer">Computer</DropdownItem>
    <DropdownItem tag={Link} to="/electronics">Electronics</DropdownItem>
    <DropdownItem tag={Link} to="/mobile">Mobile</DropdownItem>

  </DropdownMenu>
</Dropdown>

       </div>

    );
  }
}



export default DropDown;
