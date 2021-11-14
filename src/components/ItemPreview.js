import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleLightBoxHidden } from "../actions/lightBoxAction";

//Styling and Animation
import styled from "styled-components";

const ItemPreview = () => {
  const { images } = useSelector((state) => state.itemData);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => setCurrentImage(images[0]), [images]);

  const dispatch = useDispatch();
  const showLightBox = () => {
    dispatch(toggleLightBoxHidden());
  };
  return (
    <ImageContainer>
      <DisplayImage src={currentImage} alt="Product 1" onClick={showLightBox} />
      <ItemPreviewContainer>
        {images.map((img, index) => {
          return (
            <div
              className={currentImage === img ? "SelectContainer" : ""}
              onClick={() => setCurrentImage(img)}
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

const DisplayImage = styled.img`
  width: 450px;
  margin-bottom: 20px;
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
