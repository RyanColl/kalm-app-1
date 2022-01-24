import React from "react";
import styled from "styled-components";
import KalmKitty from "../../Assets/Images/coco_kitty.svg";

const KittyCont = styled.div`
  position: relative;
  top: 35px;
  left: 10px;
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;
const Kitty = styled.img`
  width: 45px;
  @media (max-width: 600px) {
    width: 40px;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  // justify-content: center;
  // align-items: center;
  // padding-top: 100px;
  // padding: 12px 30px;
`;

const SpeechBubble = styled.div`
  box-sizing: border-box;
  margin: 24px 0 16px;
  padding: 20px;
  padding-bottom: 25px;
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
  text-align: left;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.15));

  // &:after {
  //   content: "";
  //   display: block;
  //   position: abosolute;
  //   height: 30px;
  //   width: 10px;
  //   transform: translateY(5px) translateX(-5px) rotate(35deg);
  //   margin-bottom: -35px;
  //   border: 0px solid;
  //   background-color: #fff;
  //   border-radius: 0px 0px 100% 0px;
  // }
`;

const Dialogue = ({ textArray }) => {
  return (
    <>
      <Page>
        {textArray.map((text) => (
          <div>
            <KittyCont>
              <Kitty src={KalmKitty} />
              <p>Coco</p>
            </KittyCont>
            <SpeechBubble>{text}</SpeechBubble>
          </div>
        ))}
      </Page>
      {/* <Kitty>
        <img src={KalmKitty} alt="Kalm Kitty" />
      </Kitty> */}
    </>
  );
};

export default Dialogue;
