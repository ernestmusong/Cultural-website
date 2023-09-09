import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state) => ({
      ...state,
      events: data.events,
    }),
  },
});

export const { setEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
