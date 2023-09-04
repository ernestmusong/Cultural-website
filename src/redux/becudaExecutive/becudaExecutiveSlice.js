import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  executives: [],
};

const becudaExecutiveSlice = createSlice({
  name: 'executives',
  initialState,
  reducers: {
    exMembers: (state) => ({
      ...state,
      executives: data.becudaExecutive,
    }),
  },
});

export const { exMembers } = becudaExecutiveSlice.actions;
export default becudaExecutiveSlice.reducer;
