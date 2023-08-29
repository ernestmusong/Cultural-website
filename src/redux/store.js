import { configureStore } from '@reduxjs/toolkit';
import becudaExecutiveReducer from './becudaExecutive/becudaExecutiveSlice';
import befangChiefsReducer from './befangChiefs/befangChiefsSlice';
import contributorsReducer from './contributors/contributorsSlice';
import eventsReducer from './events/eventsSlice';
import greatIconsReducer from './greatIcons/greatIconsSlice';
import projectsReducer from './projects/projectsSlice';
import webSupportersReducer from './webSupporters/webSupportersSlice';


const store = configureStore({
  reducer: {
    becudaExecutive: becudaExecutiveReducer,
    chiefs: befangChiefsReducer,
    contributors: contributorsReducer,
    events: eventsReducer,
    greatIcons: greatIconsReducer,
    projects: projectsReducer,
    webSupporters: webSupportersReducer
  },
});

export default store;