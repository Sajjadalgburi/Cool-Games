// the store is the global state of the application which passes the state to the components

import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
