/* eslint-disable jsx-a11y/alt-text */
import React, { Component, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Redirect, Switch, Route, Link} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import { getHelp } from "./Services/ClientFetchServices";
// components, pages, and assets
import Kalmlogo from "./Assets/Logo/logo_kalm.svg";
import WelcomeAnimation from "./Components/Welcome/WelcomeAnimation";
import Navbar from "./Components/App/Navbar";
import SignUp from "./Components/App/Forms/Signup";
import SignIn from "./Components/App/Forms/Signin";
import ForgotPass from "./Components/App/Forms/ForgotPass";
import PopUpMood from "./Components/App/PopUpMood";
import Profile from "./Components/App/Forms/profile";
import Dialogue from "./Components/App/dialogue";
import Activity from "./Activities/Activity";
import Activities from "./Activities/Activities";
import StyledLink from "./Components/styledLink";
import JustButton from "./Components/styledButton";
import Testing from "./Testing/Testing";
import BackgroundDeco from "./Components/backgroundDeco";
import HotlineList from "./Components/App/hotline/hotlineList";

class App extends Component {
  state = {
    data: null,
    generationUrl: "",
    PopUp: false,
    mainPage: false,
    animate: true,
    redirect: false,
    userId: 0
  };
  constructor(props) {
    super(props);
    this.PopUpClick = this.PopUpClick.bind(this);
    this.SignIn = this.SignIn.bind(this);
    this.SignUp = this.SignUp.bind(this);
    this.Forgot = this.Forgot.bind(this);
  }
  
  initiateAnimation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(false);
        // }, 3800);
      }, 0);
    });
  }
  initiateLoadingMainPage() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
        // }, 3500);
      }, 0);
    });
  }
  componentDidMount() {
    this.initiateAnimation().then((f) =>
      this.setState({ ...this.state, animate: f })
    );
    this.initiateLoadingMainPage().then((t) =>
      this.setState({ ...this.state, mainPage: t })
    );
  }
  PopUpClick() {
    this.setState({ ...this.state, PopUp: true });
    console.log("click in effect");
  }
  PopUp() {
    this.setState({ ...this.state, PopUp: false });
  }

  signUpWithGoogle = () => {};

  WelcomeScreen() { return <WelcomeAnimation />; }

  SignIn() { return <SignIn /> }
  SignUp() { return <SignUp /> }
  Forgot() { return <ForgotPass /> }
  Profile() { return <Profile /> }

  PositiveDialog() {
    return <div className="dialogCont">
      <Dialogue
        textArray={[
          "That’s good to hear! We’re glad you are well.",
          "Let’s do some activities... :)",
        ]}/>
      <StyledLink destination="/auth/activities/?activityType=positive" text="Activities"/>
      </div>
  }

  NeutralDialog() {
    return <div className="dialogCont">
      <Dialogue
        textArray={[
          "I understand how you’re feeling.",
          "Let’s do some activities to elevate your mood.",
        ]}/>
      <StyledLink destination="/auth/activities/?activityType=neutral" text="Activities"/>
      </div>
  }

  NegativeDialog() {
    return <div className="dialogCont">
        <Dialogue
          textArray={[
            "Let’s do something about that.",
            "Would you like to do some activities, or talk to somebody?",
          ]}/>
        <div className="flexRow">
          <StyledLink destination="/auth/activities/?activityType=negative" text="Activities"/>
          <StyledLink destination="/auth/help" text="Contact"/>
        </div>
      </div>
  }
  
  Help() {
    const onHelpClick = () => {
      console.log('here')
      getHelp()
    }
    return <div className="dialogCont">
        <Dialogue
          textArray={["Here are ways you can contact someone:"]}/>
        <Dialogue
          textArray={["For emergency if you need help from your trusted contacts: This will send out your contact information to your trusted contacts. They may contact you, or come to your location to help you."]}/>
        <div className="justifyRight">
          <JustButton onClick={onHelpClick} text="Send out Notification"/>
        </div>
        <Dialogue
          textArray={["Contact a Crisis Hotline."]}/>
        <div className="justifyRight">
          <StyledLink destination="/auth/hotline" text="Crisis Hotline"/>
        </div>
      </div>
  }
  
  CrisisHotline() {
    return <div className="dialogCont">
    <Dialogue
      textArray={["Here are some Crisis Hotlines you can contact."]}/>
      <HotlineList />
    </div>
  }

  // testing pages
  Testing() { return <Testing /> }

  handleClick = (e, node) => {
    if (node.current.contains(e.target)) {
      // click is inside
      return;
    }
    this.state.PopUp && window.location.replace("/");
    this.setState({ ...this.state, PopUp: true });
  };

  render() {
    return (
      <div className="Main">
        {
          <CSSTransition in={this.state.animate} timeout={0} unmountOnExit>
            <WelcomeAnimation />
          </CSSTransition>
        }
        
        {this.state.mainPage && (
            <Router>
                <Switch>
                  {/* NO AUTH PAGES: login/signup/profile */}
                  <Route exact={true} path="/">
                    <Redirect to="/login" />
                  </Route>
                  <Route path="/login">
                    <nav><img className="navLogo" src={Kalmlogo} alt="Kalm logo"/></nav>
                    <this.SignIn />
                  </Route>
                  <Route path="/signup">
                    <nav><img className="navLogo" src={Kalmlogo} alt="Kalm logo"/></nav>
                    <this.SignUp />
                  </Route>
                  <Route path="/forgot">
                    <nav><img className="navLogo" src={Kalmlogo} alt="Kalm logo"/></nav>
                    <this.Forgot />
                  </Route>

                  {/* AUTH PAGES */}
                  <Route path="/auth/home/:id">
                    <Navbar />
                    <div className="centeredCont">
                      <PopUpMood setUserId={this.setUserId} />
                    </div>
                  </Route>

                  {/* dialog page: comes after mood popup */}
                  <Route path="/auth/pos-dialog">
                    <Navbar />
                    <div className="centeredCont">
                      <this.PositiveDialog />
                    </div>
                  </Route>
                  <Route path="/auth/neutral-dialog">
                    <Navbar />
                    <div className="centeredCont">
                      <this.NeutralDialog />
                    </div>
                  </Route>
                  <Route path="/auth/neg-dialog">
                    <Navbar />
                    <div className="centeredCont">
                      <this.NegativeDialog />
                    </div>
                  </Route>

                  {/* activities list page: ? */}
                  <Route path="/auth/activities" exact>
                    <Navbar />
                    <div className="centeredCont">
                      <Activities />
                    </div>
                  </Route>

                  {/* activities list page: add pages in the activities.js files not here */}
                  <Route path="/auth/activities/:id">
                    <Navbar />
                    <div className="centeredCont">
                      <Activity />
                    </div>
                  </Route>

                  {/* help page */}
                  <Route path="/auth/help">
                    <Navbar />
                    <div className="centeredCont">
                      <this.Help />
                    </div>
                  </Route>
                  {/* hotline page */}
                  <Route path="/auth/hotline">
                    <Navbar />
                    <div className="centeredCont">
                      <this.CrisisHotline />
                    </div>
                  </Route>

                  {/* contact page (aka profile page) */}
                  <Route path="/auth/contact-info/:id">
                    <Navbar />
                    <div className="centeredCont">
                      <this.Profile />
                    </div>
                  </Route>

                  {/* extra pages  */}
                  <Route path="/testing">
                    <this.Testing />
                  </Route>
                </Switch>
            </Router>
        )}
        <div className="bgDeco">
          <BackgroundDeco />
        </div>
      </div>
    );
  }
}
export default App;
