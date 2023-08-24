import { createSlice } from '@reduxjs/toolkit';
import {projects} from '../db.json'

const initialState = {
    projects: [],
    branches: [],
    contributors: [],
    events: [],
    befangChiefs: [],
    becudaExecutive: [],
    greatIcons: [],
    webSupporters: [],
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