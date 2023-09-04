import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const { greatIcons } = data;
const initialState = {
  greatIcons: [],
};

const greatIconsSlice = createSlice({
  name: 'greatIcons',
  initialState,
  reducers: {
    setGreatIcons: (state) => ({
      ...state,
      greatIcons,
    }),
  },
});

export const { setGreatIcons } = greatIconsSlice.actions;
export default greatIconsSlice.reducer;
