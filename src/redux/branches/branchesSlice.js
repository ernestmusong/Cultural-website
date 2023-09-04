import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  branches: [],
};

const branchesSlice = createSlice({
  name: 'branches',
  initialState,
  reducers: {
    setBranches: (state) => ({
      ...state,
      branches: data.branches,
    }),
  },
});

export const { setBranches } = branchesSlice.actions;
export default branchesSlice.reducer;
