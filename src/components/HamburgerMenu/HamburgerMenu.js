import React from 'react';


import {NavItem, HambWrapper} from './HamburgerMenuStyle'

const HamburgerMenu = (props) => {
    return (
            
  
                    <HambWrapper>
                    <NavItem exact to="/" onClick={()=>props.setHamburgerMenu()}>Home</NavItem>
                    <NavItem to="/events" onClick={()=>props.setHamburgerMenu()}>Events</NavItem>
                    <NavItem to="/login" onClick={()=>props.setHamburgerMenu()}>Login</NavItem>
                    <NavItem to="/register" onClick={()=>props.setHamburgerMenu()}>Register</NavItem>
                    <NavItem to="/admin" onClick={()=>props.setHamburgerMenu()}>Admin</NavItem>
                    </HambWrapper>

            
    );
}

export default HamburgerMenu;