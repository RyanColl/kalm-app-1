import React, { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { useParams } from "react-router";
// component importing
import ReqInputText from "./reqInputText";
import Button from "../button";
import EditBtn from "./editInfoBtn";
import InfoDisplay from "./infoDisplay";
import PersonalInfo from "./personalInfo";
// image importing
import editImg from "../../../Assets/Images/edit_img.svg";
import profileIcon from "../../../Assets/Images/profile_icon.svg";
import ContactInfo from "./contactPplInfo";

// this is the Profile/Contact information page
// personalInfo.js and contactPplInfo.js are the comps
// mounted on this page as their own section

const ProfileCont = styled.div`
  width: 750px;
  margin: 0 50px 100px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  .flex-between {
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;
const TextDiv = styled.div`
  text-align: left;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 40px;
`;


const Profile = ({

}) => {
 
  const [showPplInfo, setShowPplInfo] = React.useState(true);
  const [showOtherInfo, setShowOtherInfo] = React.useState(true);
  let {id} = useParams()
  
  return (
    <ProfileCont className="flexCol">
      <TextDiv>
        <h2>Your Contact Information</h2>
        {/* <p>Your contact information will be anonymous unless you choose to disclose it. That means, if you press the “Help” button at the top left area, then your information will be sent out to your list of trusted contacts. <br/><br/> Want to learn more about the “Help” button system? <Link to="">Learn more</Link></p> */}
      </TextDiv>
      <PersonalInfo 
        showPplInfo={showPplInfo}
        onClick={()=>{setShowPplInfo(!showPplInfo)}}
        // onClick={() => setShowPplInfo(false)}
      />
      <ContactInfo 
        showOtherInfo={showOtherInfo}
        onClick={()=>{setShowOtherInfo(!showOtherInfo)}}
      />


    </ProfileCont>
  );
};

export default Profile;
