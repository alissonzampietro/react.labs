import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'light'
    },
    reducers: {
        toogleTheme: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light'
        }
    }
})


export const {toogleTheme} = themeSlice.actions;

export default themeSlice.reducer;