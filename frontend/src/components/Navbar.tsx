import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  

export default function NavbarCom() {
    const style = {
        display: "flex",
        "justify-content": "space-around"
      };
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* <nav style={style}>
            <Link to="/">Home</Link>
            <Link to="/done">Done</Link>
            <Link to="/favourite">Favourite</Link>
            <Link to="/trash">Trash</Link>
            </nav> */}
        <Navbar color="light" light expand="md">
        {/* <NavbarBrand href="/">CanDO</NavbarBrand> */}
        <div className="logo">
            <Link to="/">CanDO</Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink href="/done">Done</NavLink> */}
              <Link to="/done">Done</Link>
            </NavItem>
            <NavItem>
              {/* <NavLink href="/favourite">Favourite</NavLink> */}
              <Link to="/favourite">Favourite</Link>
            </NavItem>
            <NavItem>
              {/* <NavLink to="/trash">Trash</NavLink> */}
              <Link to="/trash">Trash</Link>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
            
        </div>
    )
}
