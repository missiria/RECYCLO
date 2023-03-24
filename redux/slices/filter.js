import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterTime: null,
    filterTypeCollects: null,
    filterCity: null,
    filterPeriod: null
}

export const filterSlice = createSlice({
 name: 'filter',
 initialState,
 reducers: {
    setFilterTime: (state, action) => {
        state.filterTime = action.payload
    },
    setFilterTypeCollects: (state, action) => {
        state.filterTypeCollects = action.payload
    },

    setFilterCity: (state, action) => {
        state.filterCity = action.payload
    },

    setFilterPeriod: (state, action) => {
        state.filterPeriod = action.payload
    },
 }
})

export const { setFilterCity, setFilterPeriod, setFilterTime, setFilterTypeCollects } = filterSlice.actions
export default filterSlice.reducer