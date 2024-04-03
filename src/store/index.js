import { configureStore } from '@reduxjs/toolkit';

import users from './slices/usersSlice';

import albums from './slices/albumsSlice';

const store = configureStore({
  reducer: {
    users,
    albums
  }
});

export default store;
