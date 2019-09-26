import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class Example extends React.Component {
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
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

// Dropdown.propTypes = {
//   disabled: PropTypes.bool,
//   direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
//   group: PropTypes.bool,
//   isOpen: PropTypes.bool,
//   // For Dropdown usage inside a Nav
//   nav: PropTypes.bool,
//   active: PropTypes.bool,
//   // For Dropdown usage inside a Navbar (disables popper)
//   inNavbar: PropTypes.bool,
//   tag: PropTypes.string, // default: 'div' unless nav=true, then 'li'
//   toggle: PropTypes.func,
//   setActiveFromChild: PropTypes.bool
// };

// DropdownToggle.propTypes = {
//   caret: PropTypes.bool,
//   color: PropTypes.string,
//   className: PropTypes.string,
//   disabled: PropTypes.bool,
//   onClick: PropTypes.func,
//   'data-toggle': PropTypes.string,
//   'aria-haspopup': PropTypes.bool,
//   // For DropdownToggle usage inside a Nav
//   nav: PropTypes.bool,
//   // Defaults to Button component
//   tag: PropTypes.any
// };

// DropdownMenu.propTypes = {
//   tag: PropTypes.string,
//   children: PropTypes.node.isRequired,
//   right: PropTypes.bool,
//   flip: PropTypes.bool, // default: true,
//   className: PropTypes.string,
//   cssModule: PropTypes.object,
//   // Custom modifiers that are passed to DropdownMenu.js, see https://popper.js.org/popper-documentation.html#modifiers
//   modifiers: PropTypes.object,
//   persist: PropTypes.bool, // presist the popper, even when closed. See #779 for reasoning
//   // passed to popper, see https://popper.js.org/popper-documentation.html#Popper.Defaults.positionFixed
//   positionFixed: PropTypes.bool
// };

// DropdownItem.propTypes = {
//   children: PropTypes.node,
//   active: PropTypes.bool,
//   disabled: PropTypes.bool,
//   divider: PropTypes.bool,
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   header: PropTypes.bool,
//   onClick: PropTypes.func,
//   className: PropTypes.string,
//   cssModule: PropTypes.object,
//   toggle: PropTypes.bool // default: true
// };
