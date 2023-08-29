import { createSlice } from '@reduxjs/toolkit';
import {events} from '../db.json'

const initialState = {
    events: [],
}

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: (state) => ({
            ...state,
            events: events,
        }), 
},
})

export const { setEvents } = eventsSlice.actions
export default eventsSlice.reducer
