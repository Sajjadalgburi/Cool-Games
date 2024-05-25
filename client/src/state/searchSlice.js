import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchData: null,
  },

  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { setSearchData } = searchSlice.actions; // Export the action creator
export default searchSlice.reducer;
