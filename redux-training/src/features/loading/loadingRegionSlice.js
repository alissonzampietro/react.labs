import {createSlice} from '@reduxjs/toolkit';

export const loadingRegionSlice = createSlice({
    name: 'loadingRegion',
    initialState: {
        value: false
    },
    reducers: {
        isLoading: (state) => {
            state.value = true
        },
        loaded: (state) => {
            state.value = false
        }
    }
})

export const {isLoading, loaded} = loadingRegionSlice.actions;
export default loadingRegionSlice.reducer;