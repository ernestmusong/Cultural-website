import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from 'Components/Layout';
import logo from "./becuda-logo.png";
import {FaAlignJustify, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllProjects from "./components/Projects/AllProjects";
import Events from "./components/News/Events";
import SingleEvent from "./components/News/SingleEvent";
import AuthService from "./services/auth.service";
import Login from "./components/sessions/login.component";
import Register from "./components/sessions/register.component";
import Home from "./components/Home/home.component";
import Profile from "./components/Dashboard/profile.component";
import BoardUser from "./components/Dashboard/board-user.component";
import BoardModerator from "./components/Dashboard/board-moderator.component";
import BoardAdmin from "./components/Dashboard/board-admin.component";
import Footer from "./components/footer";
import SingleProject from "./components/Projects/SingleProject";
import Icon from "./components/Home/Icon";
import  PopupModal from "./components/PopupModal";
import EventBus from "./common/EventBus";
import BefangYouthsInitiative from "./components/Branches/BEYOIN/BefangYouthsInitiative";
import CommingSoon from "./components/General/CommingSoon";
import ContributePage from "./components/Contributions/ContributePage";
import ContributeDetails from "./components/Contributions/ContributeDetails";
import BeyoinMember from "./components/Branches/BEYOIN/BeyoinMember";
import ListOfSupporters from "./components/Web-creator/ListOfWebSupporters";
import ListOfContributors from "./components/Contributions/ListOfContributors";
import WebCreator from "./components/Web-creator/WebCreator";
import BefangDiaspora from "./components/Branches/Diaspora/BefangDiaspora";
import DiasporaMember from "./components/Branches/Diaspora/DiasporaMember";
import Constitution from "./components/Constitution";
 

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [showModeratorBoard, setShowModeratorBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)
  
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.clearHeight = this.clearHeight.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      height: 0,
      linksHeight: 0,
      overFlow: "hidden",
       
    };
  }
  
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }
  

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
   
   clearHeight (){
    const height = this.state.height;
    if(height !== 0){
      this.setState({height:0, overFlow: "hidden"})
    }
  }
    
   handleClickMenu() {
    const height = this.state.height;
    if(height === 0){this.setState({height:"auto", overFlow: ""}) }
    
  }
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, height, overFlow } = this.state;
    return (
      <>
 
 
          <PopupModal />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/all-projects" component={AllProjects} />
            <Route path="/projects/:projectId" component={SingleProject} />
            <Route path="/events" component={Events} />
            <Route path="/event/:eventId" component={SingleEvent} />
            <Route path="/icons/:iconId" component={Icon} />
            <Route path="/befang-youths-initiative" component={BefangYouthsInitiative} />
            <Route path="/contribute-page" component={ContributePage} />
            <Route path="/contributors" component={ListOfContributors} />
            <Route path="/branches/:branchId" component={ContributeDetails} />
            <Route path="/diaspora" component={BefangDiaspora} />
            <Route path="/diaspora-member/:diasporaId" component={DiasporaMember} />
            <Route path="/beyoin/:memberId" component={BeyoinMember} />
            <Route path="/web-supporters" component={ListOfSupporters} />
            <Route path="/web-creator" component={WebCreator} />
            <Route path="/constitution" component={Constitution} />
            <Route path="/comming-soon" component={CommingSoon} />
             
          </Switch>
          <Footer />

        </>
    );
  }
}

export default App;
