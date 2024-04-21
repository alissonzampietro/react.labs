import { createSlice } from "@reduxjs/toolkit";

export const regionSlice = createSlice({
    name: 'region',
    initialState: {
        value: {
            id: '',
            nome: '',
            sigla: ''
        }
    },
    reducers: {
        setRegion: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setRegion } = regionSlice.actions;
export default regionSlice.reducer;