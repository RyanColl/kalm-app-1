import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropDownCont = styled.div`
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  width: 250px;
  background-color: white;
  flex-direction: column;
  justify-content: center;

  .navLink {
    display: block;
    text-align: left;
    text-decoration: none;
    color: #5b6270;
  }
`;
const MenuLink = styled(Link)`
  display: block;
  text-align: left;
  text-decoration: none;
  color: #5b6270;
`;

const Divider = styled.hr`
  border-top: 1px solid #cecece;
  border-bottom: none;
  border-left: none;
  border-right: none;
  width: 100%;
  margin: 10px 0;
`;

const HelpSect = styled.div`
  display: none;
  margin: 0;
  padding: 0;
  @media (max-width: 800px) {
    display: block;
  }
`;

const ProfileDropdown = ({ id }) => {
  return (
    <DropDownCont>
      <MenuLink to={`/auth/contact-info/${id}`}>View Contact Info</MenuLink>
      <Divider />
      <HelpSect>
        <MenuLink to="/auth/help">Emergency Relief</MenuLink>
        <Divider />
      </HelpSect>
      <MenuLink to="/">Logout</MenuLink>
    </DropDownCont>
  );
};

export default ProfileDropdown;
