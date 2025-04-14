import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationslice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});
