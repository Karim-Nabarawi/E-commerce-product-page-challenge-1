import React from "react";

import ItemPreview from "./ItemPreview";

import { ReactComponent as Close } from "../images/icon-close.svg";

//Styling and Animation
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleLightBoxHidden } from "../actions/lightBoxAction";

const LightBoxGallery = () => {
  const dispatch = useDispatch();
  const CloseLightBox = () => {
    dispatch(toggleLightBoxHidden());
  };

  return (
    <LightBoxContainer>
      <div className="background"></div>
      <div className="gallery">
        <div className="close-icon">
          <Close className="close" onClick={CloseLightBox} />
        </div>
        <div className="ImageContainer">
          <ItemPreview isLightBox={true} />
        </div>
      </div>
    </LightBoxContainer>
  );
};
export default LightBoxGallery;

const LightBoxContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
  top: 0;
  right: 0;
  text-align: center;
  .background {
    position: absolute;
    opacity: 75%;
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 0%);
    z-index: -1;
  }
  .gallery {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .close-icon {
      text-align: end;
      padding-bottom: 25px;
    }
  }
  .close {
    cursor: pointer;
  }
  .close path {
    fill: white;
    &:hover {
      fill: hsl(26, 100%, 55%);
    }
  }

  .ImageContainer {
    display: relative;
  }
`;
