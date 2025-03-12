import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { login } from './auth';


export const fetchUsers = createAsyncThunk('users/getAll', async () => {
    const res = await axios.get('http://localhost:3000/users');
    return res.data;
});

export const addUser = createAsyncThunk('users/create', async (user) => {
    const res = await axios.post('http://localhost:3000/users', user);
    return res.data;
});

export const removeUser = createAsyncThunk('users/remove', async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    return id;
});

export const updateUser = createAsyncThunk('users/update', async ({ id, updates }) => {
    const res = await axios.patch(`http://localhost:3000/users/${id}`, updates);
    return res.data;
});

export const addFav = createAsyncThunk('favorites/add', async (movie, { getState, dispatch }) => {
    const { auth, users } = getState();
    const currentUser = auth.currentUser;

    if (!currentUser) {
        throw new Error("User not logged in");
    }

    const userIndex = users.users.findIndex((u) => u.id === currentUser.id);
    if (userIndex === -1) {
        throw new Error("User not found");
    }

    const alreadyExists = currentUser.favorites?.some((fav) => fav.id === movie.id);
    if (alreadyExists) {
        return currentUser;
    }

    const updatedFavorites = [...(currentUser.favorites || []), movie];
    const updatedUser = { ...currentUser, favorites: updatedFavorites };

    await dispatch(updateUser({ id: currentUser.id, updates: { favorites: updatedFavorites } }));
    dispatch(login(updatedUser));
    return updatedUser;
});


export const removeFav = createAsyncThunk('favorites/remove', async (movieId, { getState, dispatch }) => {
    const { auth, users } = getState();
    const currentUser = auth.currentUser;

    if (!currentUser) {
        throw new Error("User not logged in");
    }

    const userIndex = users.users.findIndex((u) => u.id === currentUser.id);
    if (userIndex === -1) {
        throw new Error("User not found");
    }

    const updatedFavorites = currentUser.favorites.filter((fav) => fav.id !== movieId);
    const updatedUser = { ...currentUser, favorites: updatedFavorites };

    await dispatch(updateUser({ id: currentUser.id, updates: { favorites: updatedFavorites } }));
    dispatch(login(updatedUser));

    return updatedUser;
});

const usersSlice = createSlice({
    name: "users",
    initialState: { users: [] },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        });
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.users = state.users.filter((u) => u.id !== action.payload);
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            const index = state.users.findIndex((u) => u.id === action.payload.id);
            if (index !== -1) state.users[index] = { ...state.users[index], ...action.payload };
        });
        builder.addCase(addFav.fulfilled, (state, action) => {
            const index = state.users.findIndex((u) => u.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        });
        builder.addCase(removeFav.fulfilled, (state, action) => {
            const index = state.users.findIndex((u) => u.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        });

    }
});

export default usersSlice.reducer;
