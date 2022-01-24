import React, { useEffect } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import profileIcon from "../../../Assets/Images/profile_icon.svg";
import downArrow from "../../../Assets/Images/down_triangle.svg";
import ProfileDropdown from "./profileDropdown";
import { getImgForUser } from "../../../Services/ClientFetchServices";
const MainCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const ProfileImg = styled.img`
  width: 65px;
  box-sizing: border-box;
`;
const Arrow = styled.img`
  width: 13px;
  padding: 0 10px 0 0;
`;
const DropdownPopup = styled(Popup)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileButton = ({id}) => {
  const [imgUrl, setUrl] = React.useState('')
  
  // disabled atm to work on stuff
  // useEffect(() => {
  //   getImgForUser().then(data => setUrl(data.url))
  // })
  return (
    <DropdownPopup
      trigger={
        <MainCont>
          <ProfileImg src={imgUrl!=''?imgUrl:profileIcon} />
          <Arrow src={downArrow} />
        </MainCont>
      }
      position="bottom right"
      >
      <ProfileDropdown id={id} />
    </DropdownPopup>
  );
};

export default ProfileButton;
