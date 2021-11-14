import React, { useState } from "react";

import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../images/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../images/icon-plus.svg";

//Styling and Animation
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../actions/cartAction";
import CustomeButton from "./CustomeButton";

const AddToCart = () => {
  const [cartCount, setCartCount] = useState(0);

  const dispatch = useDispatch();

  const addItems = () => {
    setCartCount(0);
    dispatch(
      addItemToCart({
        id: id,
        title: title,
        price: price,
        mainImage: mainImage,
        quantity: cartCount,
      })
    );
  };

  const changeCartCount = (value) => {
    setCartCount(value + cartCount < 0 ? 0 : value + cartCount);
  };

  const { id, title, price, mainImage } = useSelector((state) => state.itemData);

  return (
    <AddToCartContainer>
      <ItemCountContainer>
        <MinusIcon className="itemButton" onClick={() => changeCartCount(-1)} />
        <span className="itemCount">{cartCount}</span>
        <PlusIcon className="itemButton" onClick={() => changeCartCount(1)} />
      </ItemCountContainer>
      <CustomeButton clickFunction={addItems} specialStyle={{ marginLeft: "15px", boxShadow: "0px 25px 25px #ffe3cd" }}>
        <CartIcon className="cartIcon" alt="cart icon" />
        Add to cart
      </CustomeButton>
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
