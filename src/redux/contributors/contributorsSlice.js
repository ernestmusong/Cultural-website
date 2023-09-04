import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const { contributors } = data;
const initialState = {
  contributors: [],
};

const contributorsSlice = createSlice({
  name: 'contributors',
  initialState,
  reducers: {
    setContributors: (state) => ({
      ...state,
      contributors,
    }),
  },
});

export const { setContributors } = contributorsSlice.actions;
export default contributorsSlice.reducer;
