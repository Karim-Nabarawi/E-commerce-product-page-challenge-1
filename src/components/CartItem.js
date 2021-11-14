import React from "react";

import { ReactComponent as DeletIcon } from "../images/icon-delete.svg";

import styled from "styled-components";

const CartItem = ({ data }) => {
  return (
    <Item>
      <img src={data.mainImage} alt="" />
      <div className="data">
        <p>{data.title}</p>
        <p>
          ${data.price}.00 x {data.quantity}
          <b> ${data.price * data.quantity}.00</b>
        </p>
      </div>
      <DeletIcon className="deleteIcon" />
    </Item>
  );
};
export default CartItem;

const Item = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  margin: 20px;
  justify-items: center;
  justify-content: space-between;
  img {
    border-radius: 5px;
  }
  b {
    color: hsl(220, 13%, 13%);
  }
  .data {
    text-align: left;
  }
  p {
    margin: 0;
  }

  .deleteIcon {
    &:hover {
      use {
        fill: hsl(220, 13%, 13%);
      }
    }
    cursor: pointer;
  }
`;
