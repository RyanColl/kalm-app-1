import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

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
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 30px;
`;
const CenteredCont = styled.div`
  align-items: center;
`;

const Login = styled.p`
  width: 100%;
  display: inline-block;
  margin: 15px 0;
  padding: 0;
`;

const DividerCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 22px;
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

const SignUp = () => {
  const history = useHistory();
  const [err, setErr] = useState("");
  const createAccount = (event) => {
    event.preventDefault();

    // if passwords dont match do this
    if (event.target[2].value !== event.target[3].value) {
      setErr("Passwords must match");
      setTimeout(() => {
        setErr("");
      }, 4500);
      return;
    }

    let data = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    fetch("/createAccount", {
      method: "POST",
      body: JSON.stringify(data),
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
          setErr("email already exists, please use another");
          setTimeout(() => {
            setErr("");
          }, 4500);
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <MainCont>
      <Img src={loginimg} />
      <Form onSubmit={createAccount}>
        <Title>Welcome to Kalm</Title>
        {err !== "" && (
          <ErrorBox>
            <p>{err}</p>
          </ErrorBox>
        )}
        <ReqInputText
          label="First Name"
          name="name"
          type="username"
          placeholder="enter your first name..."
          required="required"
        />

        <ReqInputText
          label="Email"
          name="email"
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
        {/* i dont know how to do two pw inputs to match :(( */}
        <ReqInputText
          label="Confirm Password"
          type="password"
          name="confirmed"
          placeholder="re-enter your password..."
          required="required"
        />

        <CenteredCont>
          <Login>
            Already have an account? <Link to="/login">Login</Link>
          </Login>
          <Button
            type="submit"
            text="Create Account"
            style={{ marginTop: 20, marginBottom: 40 }}
          />

          {/* <DividerCont>
            <Divider /> <Or>or</Or> <Divider />
          </DividerCont>

          <GoogleButton /> */}
        </CenteredCont>
      </Form>
    </MainCont>
  );
};

export default SignUp;
