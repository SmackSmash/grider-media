import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pause } from '../../utilities';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');
  // DEV ONLY
  await pause(500);
  // /DEV ONLY
  return response.data;
});

export { fetchUsers };
