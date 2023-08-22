import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from "components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllProjects from "./components/Projects/AllProjects";
import Events from "./components/News/Events";
import SingleEvent from "./components/News/SingleEvent";
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
    return (
      <>
 
 
          <PopupModal />
          <Routes path="/" element={<Layout />}>
            <Route index element={<Home />} />  
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/projects/:projectId" element={<SingleProject />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:eventId" element={<SingleEvent />} />
            <Route path="/icons/:iconId" element={<Icon />} />
            <Route path="/befang-youths-initiative" element={<BefangYouthsInitiative />} />
            <Route path="/contribute-page" element={<ContributePage />} />
            <Route path="/contributors" element={<ListOfContributors />} />
            <Route path="/branches/:branchId" element={<ContributeDetails />} />
            <Route path="/diaspora" element={<BefangDiaspora />} />
            <Route path="/diaspora-member/:diasporaId" element={<DiasporaMember />} />
            <Route path="/beyoin/:memberId" element={<BeyoinMember />} />
            <Route path="/web-supporters" element={<ListOfSupporters />} />
            <Route path="/web-creator" element={<WebCreator />} />
            <Route path="/constitution" element={<Constitution />} />
            <Route path="/comming-soon" element={<CommingSoon />} />
          </Routes>
          <Footer />

        </>
    );
}

export default App;
