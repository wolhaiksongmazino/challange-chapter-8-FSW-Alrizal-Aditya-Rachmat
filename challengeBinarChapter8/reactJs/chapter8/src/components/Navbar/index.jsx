import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/edit" 
                  activeStyle={{ color: 'black' }}
                >
                    Edit
                </NavLink>
                <NavLink 
                  to="/register" 
                  activeStyle={{ color: 'black' }}
                >
                    Register
                </NavLink>
                <NavLink 
                  to="/search" 
                  activeStyle={{ color: 'black' }}
                >
                    Search
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;