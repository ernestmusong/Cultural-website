import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exMembers } from 'redux/becudaExecutive/becudaExecutiveSlice';
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
import ContributeDetails from './components/Contributions/TreasurerPage';
import ListOfSupporters from './components/Web-creator/ListOfWebSupporters';
import ListOfContributors from './components/Contributions/ListOfContributors';
import WebCreator from './components/Web-creator/WebCreator';
import BefangDiaspora from './components/Branches/Diaspora/BefangDiaspora';
import DiasporaMember from './components/Branches/Diaspora/DiasporaMember';
import Constitution from './components/Constitution';

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
          <Route path="/event/:eventId" element={<EventDetailsPage />} />
          <Route path="/icons/:iconId" element={<Icon />} />
          <Route path="/contribute-page" element={<ContributePage />} />
          <Route path="/contributors" element={<ListOfContributors />} />
          <Route path="/branches/:branchId" element={<ContributeDetails />} />
          <Route path="/diaspora" element={<BefangDiaspora />} />
          <Route path="/diaspora-member/:diasporaId" element={<DiasporaMember />} />
          <Route path="/web-supporters" element={<ListOfSupporters />} />
          <Route path="/web-creator" element={<WebCreator />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/comming-soon" element={<CommingSoon />} />
        </Route>
      </Routes>
      <Footer />

    </>
  );
};

export default App;
