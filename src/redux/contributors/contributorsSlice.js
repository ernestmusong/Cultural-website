import { createSlice } from '@reduxjs/toolkit';
import {contributors} from '../db.json'

const initialState = {
    contributors: [],
}

const contributorsSlice = createSlice({
    name: 'contributors',
    initialState,
    reducers: {
        setContributors: (state) => ({
            ...state,
            contributors: contributors,
        }), 
},
})

export const { setContributors } = contributorsSlice.actions