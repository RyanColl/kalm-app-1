import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HotlineCard from "./hotlineCard";

const MainCont = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

const HotlineList = () => {
  return (
    <MainCont>
      <HotlineCard text="Mental Health Support Line" number="310-6789" />
      <HotlineCard text="Vancouver Coastal Health Regional Distress Line" number="310-6789" />
      <HotlineCard text="Anywhere in BC 1-800-Suicide" number="1-800-784-2433" />
      <HotlineCard text="Senior Distress Line" number="604-872-1234" />
      <HotlineCard text="Sunshine Coast / Sea to Sky" number="1-866-661-3311" />
    </MainCont>
  );
};

export default HotlineList;
