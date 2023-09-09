import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  webSupporters: [],
};

const webSupportersSlice = createSlice({
  name: 'webSupporters',
  initialState,
  reducers: {
    setWebSupporters: (state) => ({
      ...state,
      webSupporters: data.webSupporters,
    }),
  },
});

export const { setWebSupporters } = webSupportersSlice.actions;
export default webSupportersSlice.reducer;
