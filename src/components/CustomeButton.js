import React from "react";
import styled from "styled-components";

const CustomeButton = ({ children, clickFunction, specialStyle }) => {
  return (
    <ButtonContainer onClick={clickFunction} style={specialStyle}>
      {children}
    </ButtonContainer>
  );
};
export default CustomeButton;

const ButtonContainer = styled.button`
  flex: 3;
  font-family: "Kumbh Sans", sans-serif;
  color: white;
  background-color: hsl(26, 100%, 55%);
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-height: 50px;
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
