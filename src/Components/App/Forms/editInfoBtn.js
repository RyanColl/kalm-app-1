import React from "react";
import styled from "styled-components";
// image importing
import editImg from "../../../Assets/Images/edit_img.svg";

const EditLink = styled.a`
    // min-width: 150px;
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const EditIcon = styled.img`
    margin: 0 0 0 7px; 
    width: 19px;
    height: 19px;
`;

const EditBtn=({
    onClick=onclick,
    linkText="edit information",
})=>{

    return <EditLink onClick={onClick}>
        {linkText}
        {/* IMAGE HALP NEED CHANGE COLOR WITH LINK */}
        <EditIcon src={editImg}/>
    </EditLink>
}

export default EditBtn;