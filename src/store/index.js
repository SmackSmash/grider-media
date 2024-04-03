import { configureStore } from '@reduxjs/toolkit';

import users from './slices/usersSlice';
import { fetchUsers } from './thunks/fetchUsers';
export { fetchUsers };

import albums from './slices/albumsSlice';

import photos from './slices/photosSlice';

export default configureStore({
  reducer: {
    users,
    albums,
    photos
  }
});
