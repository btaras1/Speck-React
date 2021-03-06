import React, {useContext} from 'react';
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
import { AuthContext } from '../../context/AuthContext';

const Header = ({
    setHamburgerMenu
}) => {
    const { isLoggedIn, isAdmin, userLogout } = useContext(AuthContext);

    return (    
        <>
            <HeaderWrapper>
                <Inner>
                    <LogoContainer to="/" >
                        <Logo src={LogoImage} alt="FOI logo" />
                    </LogoContainer>
                    <Hamburger onClick={() => setHamburgerMenu()}>
                        <HamburgerLine />
                        <HamburgerLine />
                        <HamburgerLine />
                    </Hamburger>
                    <Nav>
                        <NavItem exact to="/">Home</NavItem>
                        <NavItem to="/events">Events</NavItem>
                        {!isLoggedIn && 
                            <NavItem to="/register">Register</NavItem>
                        }
                        {isAdmin &&
                            <NavItem to="/admin">Admin</NavItem>
                        }
                        {isLoggedIn ?
                            <NavItem to="/login" onClick={()=> userLogout()}>Logout</NavItem>
                            :
                            <NavItem to="/login">Login</NavItem>
                        }
                    </Nav>
                </Inner>
            </HeaderWrapper>
        </>
    );
}

export default Header;