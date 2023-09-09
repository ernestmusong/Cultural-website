import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  chiefs: [],
};

const befangChiefsSlice = createSlice({
  name: 'chiefs',
  initialState,
  reducers: {
    setChiefs: (state) => ({
      ...state,
      chiefs: data.befangChiefs,
    }),
  },
});

export const { setChiefs } = befangChiefsSlice.actions;
export default befangChiefsSlice.reducer;
