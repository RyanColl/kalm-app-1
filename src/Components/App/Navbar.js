import React from "react";
import { Link, useLocation } from "react-router-dom";
import Kalmlogo from "../../Assets/Logo/logo_kalm.svg";
import styled from "styled-components";
import ProfileButton from "./ProfileBtn/profileButton";
import StyledLink from "../styledLink";
import { useParams, useHistory } from "react-router";
const Nav = styled.nav`
  box-sizing: border-box;
  margin: 5px 10px 0 ;
  max-height: 76px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  margin-top: 5px;
  width: 65px;
  box-sizing: border-box;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ButtonCont = styled.input`
  padding-left: 12px;
  padding-right: 12px;
  height: 30px;
  margin-left: 15px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 4px 0px #00000026;


  background-color: #fbd3cb;
  color: #5b6270;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f7a797;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
const ButtonLink = styled(Link)`
  text-decoration: none;
`;

const Navbar = () => {
  let { id } = useParams();
  const query = useQuery();
  const history = useHistory()
  const activityType = query.get("activityType");
  const logoLinkRedirect =
    activityType === "all"
      ? "/auth/activities"
      : `/auth/activities/?activityType=${activityType}`;
  const helpClick = () => {
    history.push('/auth/help')
  }
  return (
    <Nav>
      <FlexRow>
        <Link to={logoLinkRedirect}>
          <Logo id="Logo" src={Kalmlogo} />
        </Link>
        <ButtonCont onClick={helpClick} type="button" value="Emergency Relief" />
      </FlexRow>
      <ProfileButton id={id | 0} />
    </Nav>
  );
};
export default Navbar;

export function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
