import React, { useState } from "react";

import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";

//Styling and Animation
import styled from "styled-components";

const ItemPreview = () => {
  const [currentImage, setCurrentImage] = useState(Image1);
  const previewImages = [Image1, Image2, Image3, Image4];
  return (
    <ImageContainer>
      <DisplayImage src={currentImage} alt="Product 1" />
      <ItemPreviewContainer>
        {previewImages.map((img) => {
          return (
            <div className={currentImage === img ? "SelectContainer" : ""} onClick={() => setCurrentImage(img)}>
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
