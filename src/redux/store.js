import { configureStore } from '@reduxjs/toolkit';
import becudaExecutiveReducer from './becudaExecutive/becudaExecutiveSlice';
import befangChiefsReducer from './befangChiefs/befangChiefsSlice';
import contributorsReducer from './contributors/contributorsSlice';
import eventsReducer from './events/eventsSlice';
import greatIconsReducer from './greatIcons/greatIconsSlice';
import projectsReducer from './projects/projectsSlice';
import webSupportersReducer from './webSupporters/webSupportersSlice';
import branchesReducer from './branches/branchesSlice';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    becudaExecutive: becudaExecutiveReducer,
    chiefs: befangChiefsReducer,
    contributors: contributorsReducer,
    events: eventsReducer,
    greatIcons: greatIconsReducer,
    projects: projectsReducer,
    webSupporters: webSupportersReducer,
    brances: branchesReducer,
  },
});

export default store;
