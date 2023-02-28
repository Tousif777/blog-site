import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer, // Add the userReducer to the store
  },
});

export default store;
