import React from "react";

import ItemDescription from "./components/ItemDescription";
import ItemPreview from "./components/ItemPreview";
import Navbar from "./components/Navbar";

import styled from "styled-components";
import LightBoxGallery from "./components/LightBoxGallery";

function App() {
  return (
    <PageContainer>
      <Navbar />
      <ItemContainer>
        <ItemPreview />
        <ItemDescription />
      </ItemContainer>
      <LightBoxGallery />
    </PageContainer>
  );
}

export default App;

const ItemContainer = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const PageContainer = styled.div`
  font-family: "Kumbh Sans", sans-serif;
  margin: 50px 15% 0px 15%;
  color: hsl(219, 9%, 45%);
  .title {
    color: hsl(220, 13%, 13%);
  }
`;
