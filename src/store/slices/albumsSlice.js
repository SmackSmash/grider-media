import { createSlice } from '@reduxjs/toolkit';

const albumsSlice = createSlice({
  name: 'albums',
  initialState: {
    isLoading: false,
    data: [],
    error: null
  }
});

export default albumsSlice.reducer;
