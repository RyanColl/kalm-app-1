import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  editProfileInfo,
  getContactInfo,
  uploadImage,
  importData,
} from "../../../Services/ClientFetchServices";
import ReqInputText from "./reqInputText";
import Button from "../button";
import EditBtn from "./editInfoBtn";
import InfoDisplay from "./infoDisplay";
import profileIcon from "../../../Assets/Images/profile_icon.svg";
import { useParams } from "react-router";
// this component is the Personal Information section
// on the Profile/Contact Information page
// and is mounted onto the profile.js component

const PersonalInfoCont = styled.div`
  width: 100%;

  .flex-between {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }
  .alignCenter {
    align-items: center;
  }
  .justifyCenter {
    justify-content: center;
  }
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  align-items: center;
  width: 100%;
`;
const FlexCol2 = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 100%;
`;
const PersonalInfoCont2 = styled.div`
  width: 100%;

  .flex-between {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }
  .alignCenter {
    align-items: center;
  }
  .justifyCenter {
    justify-content: center;
  }
`;
const Title = styled.h4``;
const Title2 = styled.h4`
  text-align: left;
`;

const ProfileImg = styled.img`
  width: 185px;
  margin-left: 24px;
  margin-right: 24px;

  @media (max-width: 700px) {
    margin-top: 30px;
    width: 150px;
  }
`;
const ButtonCont = styled.input`
  width: 190px;
  height: 40px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 4px 0px #00000026;


  background-color: #c3e5f0;
  color: #5b6270;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 30px;

  &:hover {
    background-color: #9dd4e7;
  }
`;

const ImportButton = styled.input`
  margin-top: 12px;
  padding: 4px 12px;
  border: none;
  border-radius: 5px;
  background-color: #fbd3cb;
  color: #5b6270;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f7a797;
  }
`;
const ImportLink = styled.a`
  margin-top: 12px;
`;

const PersonalInfo = ({ showPplInfo = true }) => {
  const [profileData, setProfileData] = useState({});
  const [showInfo, setShow] = useState(showPplInfo);
  const click = () => setShow(!showInfo);
  const formSubmit = (e) => {
    e.preventDefault();
    click();
    editProfileInfo(e.target).then((res) => console.log(res));
  };
  useEffect(() => {
    getContactInfo().then((res) => setProfileData(res));
  }, []);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      console.log(img);
      uploadImage(img);
    }
  };
  if (showInfo === true) {
    return (
      <PersonalInfoCont>
        <FlexRow className="flex-between">
          <Title>Personal Information</Title>
          <EditBtn onClick={click} />
        </FlexRow>
        <FlexRow>
          <FlexCol2>
            <ProfileImg id="profile-image" src={profileIcon} />
            {/* <ProfileImg
              id="profile-image"
              src={
                profileData.aws_key != "" ? profileData.aws_key : profileIcon
              }
            /> */}
          </FlexCol2>
          <FlexCol>
            <InfoDisplay
              label="First Name: "
              value={profileData.name != undefined ? profileData.name : ""}
              disabled="disabled"
              readOnly="readOnly"
            />
            <InfoDisplay
              label="Phone Number: "
              value={profileData.number != undefined ? profileData.number : ""}
              disabled="disabled"
              readOnly="readOnly"
            />
            <InfoDisplay
              label="Email: "
              value={profileData.email != undefined ? profileData.email : ""}
              disabled="disabled"
              readOnly="readOnly"
            />
          </FlexCol>
        </FlexRow>
        <FlexCol>
          <InfoDisplay
            label="Address: "
            value={profileData.address != undefined ? profileData.address : ""}
            disabled="disabled"
            readOnly="readOnly"
          />
        </FlexCol>
      </PersonalInfoCont>
    );
  } else if (showInfo === false) {
    console.log(profileData.aws_key);
    return (
      <PersonalInfoCont2 className="alignCenter">
        <form onSubmit={formSubmit} styles={{ width: "auto" }}>
          <Title2>Personal Information</Title2>
          <FlexRow>
            <FlexCol2>
              <ProfileImg id="profile-image" src={profileIcon} />
              {/* <ProfileImg
                id="profile-image"
                src={
                  profileData.aws_key != "" ? profileData.aws_key : profileIcon
                }
                style={{ marginBottom: 8 }}
              /> */}

              {/* <ImportButton type="button" value="Change Image" onClick={importData} /> */}
              <ImportLink onClick={importData}>Change Image</ImportLink>
            </FlexCol2>
            <FlexCol2>
              <ReqInputText
                label="First Name"
                placeholder="enter your first name..."
                value={profileData.name != undefined ? profileData.name : ""}
                onChange={(e) =>
                  setProfileData({ ...profileData, name: e.target.value })
                }
                required="required"
              />
              <ReqInputText
                label="Phone Number"
                placeholder="enter your phone number..."
                value={
                  profileData.number != undefined ? profileData.number : ""
                }
                onChange={(e) =>
                  setProfileData({ ...profileData, number: e.target.value })
                }
                required="required"
              />
              <ReqInputText
                label="Email"
                placeholder="enter your email..."
                value={profileData.email != undefined ? profileData.email : ""}
                required="required"
                readOnly="readOnly"
              />
            </FlexCol2>
          </FlexRow>
          <FlexRow>
            <FlexCol2>
              <ReqInputText
                label="Address"
                asterisk=""
                placeholder="enter your address..."
                value={
                  profileData.address != undefined ? profileData.address : ""
                }
                onChange={(e) =>
                  setProfileData({ ...profileData, address: e.target.value })
                }
                // required="required"
              />
              <ReqInputText
                label="Apartment/Suite"
                asterisk=""
                placeholder="enter your apartment/suite details..."
                value={profileData.unit != undefined ? profileData.unit : ""}
                onChange={(e) =>
                  setProfileData({ ...profileData, unit: e.target.value })
                }
              />
            </FlexCol2>
            <FlexCol2>
              <ReqInputText
                label="City"
                asterisk=""
                placeholder="enter your city..."
                value={profileData.city != undefined ? profileData.city : ""}
                onChange={(e) =>
                  setProfileData({ ...profileData, city: e.target.value })
                }
              />
              <ReqInputText
                label="Postal Code"
                asterisk=""
                placeholder="enter your postal code..."
                value={
                  profileData.postal != undefined ? profileData.postal : ""
                }
                onChange={(e) =>
                  setProfileData({ ...profileData, postal: e.target.value })
                }
              />
            </FlexCol2>
          </FlexRow>
          <ButtonCont type="submit" value="save changes" />
        </form>
      </PersonalInfoCont2>
    );
  }
};

export default PersonalInfo;
