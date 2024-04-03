import { createSlice } from '@reduxjs/toolkit';

const albumsSlice = createSlice({
  name: 'albums',
  initialState: {
    isLoading: true,
    data: [],
    error: null
  }
});

export default albumsSlice.reducer;
