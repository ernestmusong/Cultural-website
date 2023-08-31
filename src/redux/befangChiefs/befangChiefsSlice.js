import { createSlice } from '@reduxjs/toolkit';
import { befangChiefs } from '../db.json';

const initialState = {
  befangChiefs: [],
};

const befangChiefsSlice = createSlice({
  name: 'chiefs',
  initialState,
  reducers: {
    setChiefs: (state) => ({
      ...state,
      befangChiefs,
    }),
  },
});

export const { setChiefs } = befangChiefsSlice.actions;
export default befangChiefsSlice.reducer;
