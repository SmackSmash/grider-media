import { configureStore } from '@reduxjs/toolkit';

import users from './slices/usersSlice';
export * from './thunks/fetchUsers';

import albums from './slices/albumsSlice';

import photos from './slices/photosSlice';

export default configureStore({
  reducer: {
    users,
    albums,
    photos
  }
});
