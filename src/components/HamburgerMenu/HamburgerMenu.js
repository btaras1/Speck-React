import React, {useState} from 'react';
import LogoImage from '../../assets/images/logo.png'

import {NavItem, HambWrapper} from './HamburgerMenuStyle'

const HamburgerMenu = (props) => {

    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    return (
            
  
                    <HambWrapper>
                    <NavItem exact to="/" onClick={()=>props.setHamburgerMenu()}>Home</NavItem>
                    <NavItem to="/events" onClick={()=>props.setHamburgerMenu()}>Events</NavItem>
                    </HambWrapper>

            
    );
}

export default HamburgerMenu;