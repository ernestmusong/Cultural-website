import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exMembers } from 'redux/becudaExecutive/becudaExecutiveSlice';
import Register from 'components/Sessions/Register';
import ForgotPassword from 'components/Sessions/ForgotPassword';
import Login from 'components/Sessions/Login';
import Profile from 'components/Dashboard/Profile';
import MyContributions from 'components/Dashboard/MyContributions';
import Error from 'components/General/Error';
import { setChiefs } from './redux/befangChiefs/befangChiefsSlice';
import { setEvents } from './redux/events/eventsSlice';
import { setProjects } from './redux/projects/projectsSlice';
import { setContributors } from './redux/contributors/contributorsSlice';
import { setGreatIcons } from './redux/greatIcons/greatIconsSlice';
import { setWebSupporters } from './redux/webSupporters/webSupportersSlice';
import { setBranches } from './redux/branches/branchesSlice';
import { setUsers } from './redux/users/usersSlice';
import './App.css';
import Layout from './components/Layout';
import AllProjects from './components/Projects/AllProjects';
import Events from './components/News/Events';
import EventDetailsPage from './components/News/EventDetailsPage';
import Home from './components/Home/Home';
import Footer from './components/footer';
import ProjectDetailsPage from './components/Projects/ProjectDetailsPage';
import Icon from './components/Home/Icon';
import PopupModal from './components/PopupModal';
import CommingSoon from './components/General/CommingSoon';
import ContributePage from './components/Contributions/ContributePage';
import ListOfSupporters from './components/Web-creator/ListOfWebSupporters';
import ListOfContributors from './components/Contributions/ListOfContributors';
import WebCreator from './components/Web-creator/WebCreator';
import BefangDiaspora from './components/Branches/Diaspora/BefangDiaspora';
import DiasporaMember from './components/Branches/Diaspora/DiasporaMember';
import Constitution from './components/Constitution';
import TreasurerPage from './components/Contributions/TreasurerPage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exMembers());
    dispatch(exMembers());
    dispatch(setUsers());
    dispatch(setProjects());
    dispatch(setEvents());
    dispatch(setBranches());
    dispatch(setChiefs());
    dispatch(setGreatIcons());
    dispatch(setContributors());
    dispatch(setWebSupporters());
  }, [dispatch]);
  return (
    <>
      <PopupModal />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
          <Route path="/icon/:id" element={<Icon />} />
          <Route path="/contribute-page" element={<ContributePage />} />
          <Route path="/contributors" element={<ListOfContributors />} />
          <Route path="/treasurer/:id" element={<TreasurerPage />} />
          <Route path="/diaspora" element={<BefangDiaspora />} />
          <Route path="/diaspora-member/:id" element={<DiasporaMember />} />
          <Route path="/web-supporters" element={<ListOfSupporters />} />
          <Route path="/web-creator" element={<WebCreator />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/comming-soon" element={<CommingSoon />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-contributions" element={<MyContributions />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />

    </>
  );
};

export default App;
