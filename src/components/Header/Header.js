import React, {useState} from 'react';
import LogoImage from '../../assets/images/logo.png'
import{
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem,
    Hamburger,
    HamburgerLine
} from './HeaderStyle';

const Header = (props) => {
    return (
        <>
            <HeaderWrapper>
            <Inner>
                <LogoContainer to="/" >
                    <Logo src={LogoImage} alt="FOI logo" />
                </LogoContainer>
                <Hamburger onClick={()=>props.setHamburgerMenu()}>
                    <HamburgerLine />
                    <HamburgerLine />
                    <HamburgerLine />
                </Hamburger>
                <Nav>
                    <NavItem exact to="/">Home</NavItem>
                    <NavItem to="/events">Events</NavItem>
                </Nav>
            </Inner>
        </HeaderWrapper>
</>

    );
}

export default Header;