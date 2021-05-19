import React, {useEffect} from 'react';
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
    useEffect(() => {
        console.log("Header")
        console.log(props.isLoggedIn);
        console.log(props.isAdmin);
        console.log("Header");
    }, [props.isLoggedIn])
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
                    {!props.isLoggedIn && 
                        <NavItem to="/register">Register</NavItem>
                    }
                    {props.isAdmin &&
                        <NavItem to="/admin">Admin</NavItem>
                    }
                    {props.isLoggedIn ?
                        <NavItem to="/login" onClick={()=>{props.userLogout()}}>Logout</NavItem>
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