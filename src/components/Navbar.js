import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import ProfileIcon from "../images/image-avatar.png";

import Logo from "../images/logo.svg";

//Styling and Animation
import styled from "styled-components";
import CartDropdown from "./CartDropdown";
import { toggleCartHidden } from "../actions/cartAction";

const Navbar = () => {
  const { hidden } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <Nav>
      <div>
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
      </div>
      <NavFooter>
        <NavCart hidden={hidden}>
          <CartIcon className="cart-icon" onClick={toggleCart} />
          {!hidden && <CartDropdown />}
        </NavCart>
        <li>
          <img src={ProfileIcon} className="profile" alt="Profile" />
        </li>
      </NavFooter>
    </Nav>
  );
};
export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  li {
    display: inline;
    margin: 0px 15px;
    cursor: pointer;
  }

  border-bottom: solid #e8e7ec 1px;
`;

const NavLogo = styled.img`
  display: inline;
`;

const NavBody = styled.ul`
  display: inline-flex;
  margin-bottom: 0px;
  a {
    text-decoration: none;
    color: hsl(219, 9%, 45%);
  }
`;

const NavList = styled.li`
  padding-bottom: 50px;
  border-bottom: 5px solid transparent;
  &:hover {
    border-color: hsl(26, 100%, 55%);
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
  .profile {
    border: 2px solid transparent;
    border-radius: 100px;
    &:hover {
      border-color: hsl(26, 100%, 55%);
    }
  }
`;

const NavCart = styled.li`
  position: relative;
  .cart-icon path {
    fill: ${(props) => (!props.hidden ? "hsl(220,13%,13%)" : "")};
  }
`;
