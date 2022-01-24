import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

//components and assets
import loginimg from "../../../Assets/Images/signinup_img.svg";
import ReqInputText from "./reqInputText";
import Button from "../button";

const MainCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
`;
const Img = styled.img`
  width: 600px;

  @media (max-width: 1250px) { width: 50%; }
  @media (max-width: 1000px) { width: 0; display: none; }
`;

const SignInCont = styled.div`
  margin: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  text-align: left;
  width: 300px;
  margin-bottom: 30px;
`;
const CenteredCont = styled.div`
  align-items: center;
`;

const Signup = styled.p`
  width: 100%;
  display: inline-block;
  margin: 30px 0;
  padding: 0;
`;
const ErrorBox = styled.div`
  border: 1px solid #d01110;
  background-color: #ffcac6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
`;

const ForgotPass = () => {
  const history = useHistory();
  const [err, setErr] = useState("");
  const fgPass = (event) => {
    event.preventDefault();
    fetch("/forgotPass", {
      method: "POST",
      body: JSON.stringify({ email: event.target[0].value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ auth }) => {
        if (auth) {
          history.push("/login");
        }
        if (!auth) {
          setErr("email does not exist");
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <MainCont>
      <Img src={loginimg} />
      <SignInCont>
        <Title>Forgot Password</Title>
        {err !== "" && (
          <ErrorBox>
            <p>{err}</p>
          </ErrorBox>
        )}
        <form onSubmit={fgPass}>
          <ReqInputText
            label="Email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="enter your email..."
            required="required"
          />

          <CenteredCont>
            <Button
              type="submit"
              text="Password Reset"
              style={{ marginTop: 30, marginBottom: 30 }}
            />

            <Signup>
              Don't have an account yet? <Link to="/signup">Sign up</Link>
            </Signup>
          </CenteredCont>
        </form>
      </SignInCont>
    </MainCont>
  );
};

export default ForgotPass;
