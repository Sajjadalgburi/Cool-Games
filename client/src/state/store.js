// the store is the global state of the application which passes the state to the components

import { confifureStore, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
