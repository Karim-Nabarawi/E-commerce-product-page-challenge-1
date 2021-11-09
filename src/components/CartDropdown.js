import React from "react";

//Styling and Animation
import styled from "styled-components";

//componenet

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <div className="title">
        <h3>Cart</h3>
      </div>
      <CartItems content={false}>
        <span className="empty-message">Your cart is empty</span>
      </CartItems>

      {/* <CustomButton onClick={submitHandler}>GO TO CHECKOUT</CustomButton> */}
    </CartDropdownContainer>
  );
};
export default CartDropdown;

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  //padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  background-color: white;

  .title {
    border-bottom: 1px solid hsl(220, 14%, 75%);
  }
  h3 {
    text-align: left;
    color: hsl(220, 13%, 13%);
    font-weight: 700;
    margin: 0px;
    padding: 20px;
    font-size: 16px;
  }

  .cart-items {
    height: 250px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    overflow-x: hidden;
    justify-content: center;
  }

  .empty-message {
    font-size: 16px;
    font-weight: 700;
  }

  button {
    margin-top: auto;
  }
`;

const CartItems = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
  justify-content: ${(props) => (props.content ? "flex-start" : "center")};

  .empty-message {
    font-size: 16px;
    font-weight: 700;
  }
`;