import React from "react";

//Styling and Animation
import styled from "styled-components";
import AddToCart from "./AddToCart";

const ItemDescription = (params) => {
  return (
    <ItemDescriptionContainer>
      <div className="container">
        <p className="companyTitle">SNEAKER COMPANY</p>
        <h1 className="title">Fall Limited Edition Sneakers</h1>
        <TextDescription>
          These low-profile sneakers are perfect casual wear companion. Featuring a durable rubber outer sole, they'll
          withstand everything the weather can offer.
        </TextDescription>
        <PriceDescription>
          <h1 className="title">$125.00</h1>
          <span>50%</span>
        </PriceDescription>
        <p className="Price">$250.00</p>
        <AddToCart />
      </div>
    </ItemDescriptionContainer>
  );
};
export default ItemDescription;

const ItemDescriptionContainer = styled.div`
  margin-left: 100px;
  flex: 1;
  h1 {
    font-size: 44px;
    line-height: 1.2;
  }
  .container {
    width: 90%;
  }
  .companyTitle {
    font-weight: 700;
    color: hsl(26, 100%, 55%);
    letter-spacing: 2px;
  }
  .Price {
    font-weight: 700;
    text-decoration: line-through;
    color: hsl(220, 14%, 75%);
    margin: 0px;
  }
`;

const TextDescription = styled.p`
  line-height: 1.5;
`;

const PriceDescription = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin: 0px;
    font-size: 24px;
  }
  span {
    margin-left: 15px;
    padding: 8px;
    font-weight: 700;
    background-color: hsl(25, 100%, 94%);
    color: hsl(26, 100%, 55%);
    border-radius: 10px;
  }
`;
