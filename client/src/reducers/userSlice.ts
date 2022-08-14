import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loggedInAction: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { loggedInAction } = userSlice.actions;
export default userSlice.reducer;
