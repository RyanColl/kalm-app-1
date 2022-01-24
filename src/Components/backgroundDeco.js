import React from "react";
import styled from "styled-components";
import LeftDeco from "../Assets/Images/background/left_deco.svg";
import RightDeco from "../Assets/Images/background/right_deco.svg";

const MainCont = styled.div`
  width: 100vw;
  position: fixed;
  bottom: 0;
`;
const Left = styled.div`
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
`;
const Right = styled.div`
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
`;
const LeftImg = styled.img`
  height: 150px;

  @media (min-width: 1500px) {
    height: 250px;
  }
  @media (max-width: 550px) {
    height: 125px;
  }
`;
const RightImg = styled.img`
  height: 250px;
  @media (min-width: 1500px) {
    height: 300px;
  }
  @media (max-width: 550px) {
    height: 200px;
  }
`;

const BackgroundDeco = () => {
  return (
    <MainCont>

      <Left>
        <LeftImg src={LeftDeco} />
      </Left>

      <Right>
        <RightImg src={RightDeco} />
      </Right>

    </MainCont>
  );
};

export default BackgroundDeco;
