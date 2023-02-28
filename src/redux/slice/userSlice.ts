import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.currentUser = null;
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
