import React from "react";

import CartIcon from "../images/icon-cart.svg";
import ProfileIcon from "../images/image-avatar.png";

import Logo from "../images/logo.svg";

//Styling and Animation
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavLogo src={Logo} alt="Logo" />
      <NavBody>
        <NavList>
          <a href="#Collections">Collections</a>
        </NavList>
        <NavList>
          <a href="#Men">Men</a>
        </NavList>
        <NavList>
          <a href="#Women">Women</a>
        </NavList>
        <NavList>
          <a href="#About">About</a>
        </NavList>
        <NavList>
          <a href="#Contact">Contact</a>
        </NavList>
      </NavBody>
      <NavFooter>
        <li>
          <img src={CartIcon} alt="Cart icon" />
        </li>
        <li>
          <img src={ProfileIcon} alt="Profile" />
        </li>
      </NavFooter>
    </Nav>
  );
};
export default Navbar;

const Nav = styled.nav`
  li {
    display: inline;
    margin: 0px 15px;
    cursor: pointer;
  }

  padding-bottom: 50px;
  border-bottom: solid #e8e7ec 1px;
`;

const NavLogo = styled.img`
  display: inline;
`;

const NavBody = styled.ul`
  display: inline;
  a {
    text-decoration: none;
    color: hsl(219, 9%, 45%);
  }
`;

const NavList = styled.li`
  padding-bottom: 45px;
  &:hover {
    border-bottom: 5px solid hsl(26, 100%, 55%);
  }
`;

const NavFooter = styled.ul`
  display: flex;
  float: right !important;
  text-align: center;
  align-items: center;
  margin: 0px;
  img {
    max-width: 50px;
  }
`;
