import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies";
import usersReducer from "./slices/users";
import authReducer from "./slices/auth";
import searchQueryReducer from "./slices/searchMovies";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        searchQuery: searchQueryReducer,
        users: usersReducer,
        auth: authReducer,
    }
})
export default store;