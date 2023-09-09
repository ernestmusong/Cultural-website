import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state) => ({
      ...state,
      projects: data.projects,
    }),
  },
});

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
