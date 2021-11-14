import React, { useState } from "react";

import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../images/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../images/icon-plus.svg";

//Styling and Animation
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../actions/cartAction";

const AddToCart = () => {
  const [cartCount, setCartCount] = useState(0);

  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(
      addItemToCart({
        id: 0,
        title: "Fall Limited Edition Sneakers",
        count: cartCount,
      })
    );
  };

  const changeCartCount = (value) => {
    setCartCount(value + cartCount < 1 ? 1 : value + cartCount);
  };

  return (
    <AddToCartContainer>
      <ItemCountContainer>
        <MinusIcon className="itemButton" onClick={() => changeCartCount(-1)} />
        <span className="itemCount">{cartCount}</span>
        <PlusIcon className="itemButton" onClick={() => changeCartCount(1)} />
      </ItemCountContainer>
      <ButtonContainer onClick={addItems}>
        <CartIcon className="cartIcon" alt="cart icon" />
        Add to cart
      </ButtonContainer>
    </AddToCartContainer>
  );
};
export default AddToCart;

const AddToCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  margin-top: 50px;
`;
const ItemCountContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: hsl(223, 64%, 98%);
  padding: 15px 0;
  border-radius: 10px;
  span {
    flex: 1;
    text-align: center;
  }
  .itemButton {
    color: hsl(26, 100%, 55%);
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    margin: 0px 15px;
    user-select: none;
    &:hover {
      opacity: 50%;
    }
  }

  .itemCount {
    color: hsl(220, 13%, 13%);
  }
`;

const ButtonContainer = styled.button`
  flex: 3;
  font-family: "Kumbh Sans", sans-serif;
  margin-left: 15px;
  color: white;
  background-color: hsl(26, 100%, 55%);
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0px 25px 25px #ffe3cd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .cartIcon {
    margin-right: 20px;
  }
  .cartIcon path {
    fill: white;
  }
  &:hover {
    opacity: 50%;
  }
`;
