import { configureStore } from '@reduxjs/toolkit';

import users from './slices/usersSlice';

const store = configureStore({
  reducer: {
    users
  }
});

export default store;
