import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  forums: [],
};

const forumsSlice = createSlice({
  name: 'forums',
  initialState,
  reducers: {
    setForums: (state) => ({
      ...state,
      forums: data.forums,
    }),
  },
});

export const { setForums } = forumsSlice.actions;
export default forumsSlice.reducer;
