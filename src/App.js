import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { setItem } from "./actions/itemAction";

//data
import { items } from "./data.js";

//Components
import ItemDescription from "./components/ItemDescription";
import ItemPreview from "./components/ItemPreview";
import Navbar from "./components/Navbar";
import LightBoxGallery from "./components/LightBoxGallery";

//Stylying
import styled from "styled-components";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setItem(items[0]));
  }, [dispatch]);
  const { hidden } = useSelector((state) => state.lightBox);
  return (
    <PageContainer>
      <Navbar />
      <ItemContainer>
        <ItemPreview />
        <ItemDescription />
      </ItemContainer>
      {!hidden && <LightBoxGallery />}
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
