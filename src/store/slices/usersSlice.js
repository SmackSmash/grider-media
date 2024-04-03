import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    data: [],
    error: null
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // When handling errors, data is not on action.payload!!!
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message; // Error data on action.error!
    });
  }
});

export default usersSlice.reducer;
