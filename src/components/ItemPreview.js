import React, { useState } from "react";

import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";

//Styling and Animation
import styled from "styled-components";

const ItemPreview = () => {
  const [currentImage, setCurrentImage] = useState(Image2);
  const previewImages = [Image1, Image2, Image3, Image4];
  return (
    <ImageContainer>
      <DisplayImage src={currentImage} alt="Product 1" />
      <ItemPreviewContainer>
        {previewImages.map((img) => {
          return (
            <div className={currentImage === img ? "SelectContainer" : ""} onClick={() => setCurrentImage(img)}>
              <span></span>
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
    border: 3px solid transparent;
  }

  .SelectContainer {
    position: relative;
    span {
      border: 3px solid hsl(26, 100%, 55%);
      border-radius: 15px;
      position: absolute;
      width: 90px;
      height: 90px;
    }
    img {
      opacity: 50%;
    }
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
    &:hover {
      opacity: 50%;
    }
  }
`;
