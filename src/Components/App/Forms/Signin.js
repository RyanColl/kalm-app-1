import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

//components and assets
import loginimg from "../../../Assets/Images/signinup_img.svg";
import ReqInputText from "./reqInputText";
import Button from "../button";
import GoogleButton from "../GoogleBtn/googleBtn";

const MainCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
  box-sizing: border-box;
`;
const Img = styled.img`
  width: 600px;

  @media (max-width: 1250px) {
    width: 50%;
  }
  @media (max-width: 1000px) {
    width: 0;
    display: none;
  }
`;

const Form = styled.form`
  margin: 50px 50px 20px;
  display: flex;
  flex-direction: column;
  width: 425px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 30px;
`;

const ForgotLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

const DividerCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // width: 423px;
  height: 22px;
  // @media (max-width: 500px) {
  //   width: 100%;
  // }
`;
const Divider = styled.hr`
  border-top: 1px solid #cecece;
  border-bottom: none;
  border-left: none;
  border-right: none;
  width: 125px;
  margin: 0;
`;
const Or = styled.p`
  text-align: center;
  width: 15%;
`;
const ErrorBox = styled.div`
  border: 1px solid #d01110;
  background-color: #ffcac6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
`;

const SignIn = ({ setUserId }) => {
  console.log("ryancollicutt24@gmail.com Kesha23!");
  const history = useHistory();
  const [err, setErr] = useState("");
  const login = (event) => {
    event.preventDefault();
    let data = {
      username: event.target[0].value,
      password: event.target[1].value,
    };
    fetch("/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      // this is the place where we redirect on success
      .then(({ auth, userId }) => {
        if (auth) {
          history.push(`/auth/home/${userId}`);
          setUserId(userId);
        }
      })
      .catch((e) => {
        setErr("username or password do not match");
        setTimeout(() => {
          setErr("");
        }, 4500);
      });
  };
  useEffect(() => {}, []);
  return (
    <MainCont>
      <Img
        src={loginimg}
        alt="login vector image of a lady sitting on the desk looking at a monitor"
      />
      <Form onSubmit={login}>
        <Title>Sign In</Title>
        {err !== "" && (
          <ErrorBox>
            <p>{err}</p>
          </ErrorBox>
        )}
        <ReqInputText
          label="Email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="enter your email..."
          required="required"
        />

        <ReqInputText
          label="Password"
          type="password"
          name="password"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
          minlength="5"
          placeholder="enter your password..."
          required="required"
        />

        <ForgotLink>
          <Link to="/forgot">Forgot password?</Link>
        </ForgotLink>

        <CenteredCont>
          <Button
            type="submit"
            text="Login"
            style={{ marginTop: 30, marginBottom: 30 }}
          />

          {/* <DividerCont>
            <Divider /> <Or>or</Or> <Divider />
          </DividerCont>

          <GoogleButton text="Sign in with Google" />
          */}
          <Signup>
            Don't have an account yet? <Link to="/signup">Sign up</Link>
          </Signup> 
        </CenteredCont>
      </Form>
      {/* </SignInCont> */}
    </MainCont>
  );
};

export default SignIn;
