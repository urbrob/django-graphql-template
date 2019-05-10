import React from 'react'
import {Navbar, NavItem} from 'react-materialize'

function NavbarMenu(){
  return(
    <Navbar alignLinks="left">
      <NavItem>
        Getting started
      </NavItem>
      <NavItem>
        Components
      </NavItem>
      {localStorage.getItem('token') !== null &&
      <NavItem onClick={() => {
        localStorage.removeItem('token')
        window.location.reload()
      }}>
        Logout
      </NavItem>
      }
    </Navbar>
  )
}


export default NavbarMenu;
