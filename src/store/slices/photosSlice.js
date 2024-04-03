import { createSlice } from '@reduxjs/toolkit';

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    isLoading: false,
    data: [],
    error: null
  }
});

export default photosSlice.reducer;
