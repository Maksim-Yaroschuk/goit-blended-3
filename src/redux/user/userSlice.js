import { addUser, deleteUser, showUsers } from './userOperations';
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [showUsers.pending]: state => {
      state.isLoading = true;
    },
    [showUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [showUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteUser.pending]: state => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(user => user.id !== payload);
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addUser.pending]: state => {
      state.isLoading = true;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [addUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const userReducer = userSlice.reducer;
