import { configureStore } from '@reduxjs/toolkit';

import users from './slices/usersSlice';
export * from './thunks/fetchUsers';
export * from './thunks/addUser';

import albums from './slices/albumsSlice';

import photos from './slices/photosSlice';

export default configureStore({
  reducer: {
    users,
    albums,
    photos
  }
});
