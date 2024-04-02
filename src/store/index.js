import { configureStore } from '@reduxjs/toolkit';

import test from './slices/testSlice';
import { addTest } from './slices/testSlice';
export { addTest };

const store = configureStore({
  reducer: {
    test
  }
});

export default store;
