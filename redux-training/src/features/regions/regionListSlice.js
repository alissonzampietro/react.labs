import { createSlice, current } from "@reduxjs/toolkit";

export const regionListSlice = createSlice({
    name: 'regionList',
    initialState: {
        value: []
    },
    reducers: {
        pushRegion: (state, action) => {
            const regionCopy = current(state.value);
            for(let i = 0; i < regionCopy.length; i++) {
                if(regionCopy[i].id === action.payload.id) {
                    return;
                }
            }
            state.value.push(action.payload)
        }
    }
})

export const { pushRegion } = regionListSlice.actions
export default regionListSlice.reducer