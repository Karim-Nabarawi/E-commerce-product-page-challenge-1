import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Icons
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";

//Components
import CartDropdown from "./CartDropdown";
import { toggleCartHidden } from "../actions/cartAction";

//Styling and Animation
import styled from "styled-components";

const CartIconNav = () => {
  const { hidden, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <NavCart hidden={hidden}>
      <CartIcon className="cart-icon" onClick={toggleCart} />
      {!hidden && <CartDropdown />}
      <p className="number">3</p>
    </NavCart>
  );
};
export default CartIconNav;

const NavCart = styled.li`
  position: relative;
  user-select: none;
  .cart-icon path {
    fill: ${(props) => (!props.hidden ? "hsl(220,13%,13%)" : "")};
  }
  .number {
    position: absolute;
    top: -20px;
    right: -5px;
    font-size: 12px;
    color: white;
    background-color: hsl(26, 100%, 55%);
    border-radius: 20px;
    padding: 0px 5px;
    pointer-events: none;
  }
`;
