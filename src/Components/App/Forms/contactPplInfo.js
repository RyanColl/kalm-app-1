import React from "react";
import styled from "styled-components";
import Button from "../button";
import ReqInputText from "./reqInputText";
import EditBtn from "./editInfoBtn";
import InfoDisplay from "./infoDisplay";
import ECDisplay from "./emergencyInfoDisplay";
import profileIcon from "../../../Assets/Images/profile_icon.svg";
import { useState, useEffect } from "react";
import {
  setEmergencyContactInfo,
  fetchEmergencyContactInfo,
} from "../../../Services/ClientFetchServices";
// this component is the Personal Information section
// on the Profile/Contact Information page
// and is mounted onto the profile.js component

const ContactInfoCont = styled.div`
  margin-top: 60px;
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
  flex-wrap: row wrap;
  // align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  width: 100%;
`;
const ContactInfoCont2 = styled.div`
  margin-top: 60px;
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
  margin-bottom: 100px;

  &:hover {
    background-color: #9dd4e7;
  }
`;

const ContactInfo = ({ showOtherInfo = true }) => {
  const [contactData, setContactData] = useState([]);
  const [postData, setPostData] = useState({
    contact_id: 0,
    contact_name: "",
    contact_phone: "",
    contact_email: "",
  });
  const [showOther, setShow] = useState(showOtherInfo);
  const click = () => setShow(!showOther);
  const formSubmit = (e) => {
    e.preventDefault();
    click();
    setEmergencyContactInfo(e.target).then((res) => {
      fetchEmergencyContactInfo().then((result) => setContactData(result));
    });
  };
  useEffect(() => {
    fetchEmergencyContactInfo().then((result) => setContactData(result));
  }, []);
  if (showOther === true) {
    return (
      <ContactInfoCont>
        <FlexRow className="flex-between">
          <Title>Personal Trusted Contacts</Title>
          <EditBtn onClick={click} linkText="edit trusted contacts" />
        </FlexRow>
        {Array.isArray(contactData) && contactData.length > 0 ? (
          contactData.map((contact, i) => {
            if (i <= 3) return <ECDisplay contacts={contact} />;
            else return <></>;
          })
        ) : (
          <></>
        )}
      </ContactInfoCont>
    );
  } else if (showOther === false) {
    return (
      <ContactInfoCont2 className="alignCenter">
        <form onSubmit={formSubmit}>
          <Title2>Personal Trusted Contacts</Title2>
          <FlexRow>
            <FlexCol>
              <ReqInputText
                label="Name"
                asterisk=""
                placeholder="enter trusted contact's name..."
                value={postData.contact_name}
                onChange={(e) =>
                  setPostData({ ...postData, contact_name: e.target.value })
                }
                required="required"
              />
              <ReqInputText
                label="Phone Number"
                asterisk=""
                placeholder="enter trusted contact's number..."
                value={postData.contact_phone}
                onChange={(e) =>
                  setPostData({ ...postData, contact_phone: e.target.value })
                }
                required="required"
              />
            </FlexCol>
            <FlexCol>
              <ReqInputText
                label="Email"
                asterisk=""
                placeholder="enter trusted contact's email..."
                value={postData.contact_email}
                onChange={(e) =>
                  setPostData({ ...postData, contact_email: e.target.value })
                }
                required="required"
              />
            </FlexCol>
          </FlexRow>
          {/* button component wont work here? */}
          <ButtonCont type="submit" value="save changes" />
        </form>
      </ContactInfoCont2>
    );
  }
};

export default ContactInfo;
