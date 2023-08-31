import { createSlice } from '@reduxjs/toolkit';
import { becudaExecutive } from '../db.json';

const initialState = {
  becudaExecutive: [],
};

const becudaExecutiveSlice = createSlice({
  name: 'becudaExecutive',
  initialState,
  reducers: {
    setBecudaExecutive: (state) => ({
      ...state,
      becudaExecutive,
    }),
  },

});

export const { setBecudaExecutive } = becudaExecutiveSlice.actions;
export default becudaExecutiveSlice.reducer;
