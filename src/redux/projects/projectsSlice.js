import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const { projects } = data;
const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state) => ({
      ...state,
      projects,
    }),
  },
});

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
