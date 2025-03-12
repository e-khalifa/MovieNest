import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesAction = createAsyncThunk("movies/getAll", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7');

        const newMovie = {
            poster: "https://i0.wp.com/theroughcutpod.com/wp-content/uploads/2021/06/The-Mandalorian.jpeg?fit=1200%2C675&ssl=1",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/The_Mandalorian_season_2_poster.jpg/220px-The_Mandalorian_season_2_poster.jpg",
            id: 1,
            poster_path: "",
            title: "The Mandalorian",
            overview: "After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy, earning his keep as a bounty hunter.",
            vote_average: 4.5,
            starring: "Pedro Pascal, Gina Carano, Carl Weathers"
        };


        return [...res.data.results, newMovie];

    } catch (err) {
        return rejectWithValue("Failed to fetch movies. Please try again later.");
    }
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(moviesAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(moviesAction.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false;
            })
            .addCase(moviesAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default moviesSlice.reducer;
