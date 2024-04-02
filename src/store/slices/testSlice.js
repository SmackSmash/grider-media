import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: [],
  reducers: {
    addTest: state => {
      state.push('test');
    }
  }
});

export const { addTest } = testSlice.actions;
export default testSlice.reducer;
