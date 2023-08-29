import { createSlice } from '@reduxjs/toolkit';
import { branches } from '../db.json'

const initialState = {
    branches: [],
}

const branchesSlice = createSlice({
    name: 'branches',
    initialState,
    reducers: {
        setBranches: (state) => ({
            ...state,
            branches: branches
        }), 
},
})

export const { setBranches } = branchesSlice.actions
export default branchesSlice.reducer
