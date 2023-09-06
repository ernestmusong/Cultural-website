import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  contributors: [],
};

const contributorsSlice = createSlice({
  name: 'contributors',
  initialState,
  reducers: {
    setContributors: (state) => ({
      ...state,
      contributors: data.contributors,
    }),
  },
});

export const { setContributors } = contributorsSlice.actions;
export default contributorsSlice.reducer;
