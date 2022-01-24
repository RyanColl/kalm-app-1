
import React from "react";
import styled from "styled-components";

const ECDisplayCont = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
min-width: 400px;
max-width: 100%;
margin: 10px 0;

@media (max-width: 500px) {
  // max-width: 90%;
  min-width: 300px
}
`;
const Label = styled.p`
  text-align: left;
  font-size: 16px;
  margin: 0 0 5px 0;
`;
const Underline = styled.div`
  color: #5b6270;
  background-color: #FEFCF9;
  font-size: 16px;
  font-weight: bold;

  box-sizing: border-box;
  width: 100%;
  height: 12px;
  margin: 0;
  padding: 0 0 0 15px;
  border: none;
  border-bottom: 1px solid #cecece;
`;



const ECDisplay = ({ 
    labelDisplay= "flex",
    contacts={},
  }) => {
    return (
      <ECDisplayCont>
        <Label style={{display: {labelDisplay}}}>Name: {contacts.contact_name}</Label>
        <Label style={{display: {labelDisplay}}}>Number: {contacts.contact_phone}</Label>
        <Label style={{display: {labelDisplay}}}>Email: {contacts.contact_email}</Label>
        <Underline />
      </ECDisplayCont>
    );
  };
  
  export default ECDisplay;