import { createSlice } from "@reduxjs/toolkit";
import {greatIcons} from "../db.json";

const initialState = {
    greatIcons: [],
}

const greatIconsSlice = createSlice({
    name: "greatIcons",
    initialState,
    reducers: {
        setGreatIcons: (state) => ({
            ...state,
            greatIcons: greatIcons
        })
    }
})

export const { setGreatIcons } = greatIconsSlice.actions
