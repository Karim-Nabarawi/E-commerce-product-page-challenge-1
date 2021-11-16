import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleLightBoxHidden } from "../actions/lightBoxAction";

import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";

//Styling and Animation
import styled from "styled-components";

const ItemPreview = ({ isLightBox = false }) => {
  const { images } = useSelector((state) => state.itemData);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => setCurrentImage(0), [images]);

  const dispatch = useDispatch();
  const showLightBox = () => {
    dispatch(toggleLightBoxHidden());
  };

  const btnClick = (direction) => {
    setCurrentImage(
      direction + currentImage < 0
        ? images.length - 1
        : direction + currentImage > images.length - 1
        ? 0
        : direction + currentImage
    );
  };

  return (
    <ImageContainer>
      <MainImageContainer isLightBox={isLightBox}>
        <div className="btn previousBtn" onClick={() => btnClick(-1)}>
          <Previous />
        </div>
        <DisplayImage src={images[currentImage]} alt="Product 1" onClick={showLightBox} />
        <div className="btn nextBtn" onClick={() => btnClick(1)}>
          <Next />
        </div>
      </MainImageContainer>
      <ItemPreviewContainer>
        {images.map((img, index) => {
          return (
            <div
              className={images[currentImage] === img ? "SelectContainer" : ""}
              onClick={() => setCurrentImage(index)}
              key={index}
            >
              <span className="border"></span>
              <span className="filter"></span>
              <img src={img} alt="Product" />
            </div>
          );
        })}
      </ItemPreviewContainer>
    </ImageContainer>
  );
};
export default ItemPreview;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
  img {
    border-radius: 15px;
    cursor: pointer;
  }
`;

const MainImageContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  img {
    cursor: ${(props) => (props.isLightBox ? "default" : "pointer")};
  }
  .btn {
    position: absolute;
    user-select: none;
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 120px;
    display: ${(props) => (props.isLightBox ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      path {
        stroke: hsl(26, 100%, 55%);
      }
    }
  }
  .previousBtn {
    top: 50%;
    left: -5%;
    transform: translate(-5 px, -20 px);
  }

  .nextBtn {
    top: 50%;
    right: -5%;
    transform: translate(-5 px, -20 px);
  }
`;

const DisplayImage = styled.img`
  width: 450px;
`;

const ItemPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  width: 450px;
  margin: auto;
  img {
    width: 90px;
    cursor: pointer;
    &:hover {
      opacity: 50%;
    }
  }

  span {
    position: absolute;
    border-radius: 15px;
    width: 85px;
    height: 85px;
    content: "";
    background-color: transparent;
    border: 3px solid transparent;
    opacity: 75%;
    cursor: pointer;
  }

  .filter {
    &:hover {
      background-color: white;
    }
  }

  .SelectContainer {
    position: relative;
    span {
      border-color: hsl(26, 100%, 55%);
    }
    .filter {
      background-color: white;
    }
  }
`;
