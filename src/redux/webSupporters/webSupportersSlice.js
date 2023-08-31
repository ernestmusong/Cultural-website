import { createSlice } from '@reduxjs/toolkit';
import { webSupporters } from '../db.json';

const initialState = {
  webSupporters: [],
};

const webSupportersSlice = createSlice({
  name: 'webSupporters',
  initialState,
  reducers: {
    setWebSupporters: (state) => ({
      ...state,
      webSupporters,
    }),
  },
});

export const { setWebSupporters } = webSupportersSlice.actions;
export default webSupportersSlice.reducer;
