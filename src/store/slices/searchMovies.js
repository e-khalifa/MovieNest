import { createSlice } from "@reduxjs/toolkit";

const searchMoviesSlice = createSlice({
    name: 'searchQuery',
    initialState: {
        searchQuery: "",
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    }
});
export const { setSearchQuery } = searchMoviesSlice.actions;
export default searchMoviesSlice.reducer;