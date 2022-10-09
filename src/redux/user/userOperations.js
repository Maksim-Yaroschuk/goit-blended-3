import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const showUsers = createAsyncThunk(
  'users/fetch-users',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/delete-user',
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${userId}`, {
        headers: {
          authorization: 'admin',
        },
      });
      return userId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/add-user',
  async (objData, { rejectWithValue }) => {
    try {
    const response = await axios.post('/users', objData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
