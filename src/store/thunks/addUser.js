import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { pause } from '../../utilities';

const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://localhost:3005/users', {
    name: faker.person.fullName()
  });
  await pause(500);
  return response.data;
});

export { addUser };
