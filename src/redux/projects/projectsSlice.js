import { createSlice } from '@reduxjs/toolkit';
import {projects} from '../db.json'

const initialState = {
    projects: [],
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects: (state) => ({
            ...state,
            projects: projects,
        }), 
},
})

export const { setProjects } = projectsSlice.actions
export default projectsSlice.reducer