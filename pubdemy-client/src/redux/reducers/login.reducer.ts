import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../models/user.model";

export type UserAuth = {
  isUserAuthenticated: boolean;
  user: UserModel | null;
};

const initialState: UserAuth = {
  isUserAuthenticated: false,
  user: new UserModel(),
};

export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    addExistingUser(state, action: PayloadAction<UserAuth>) {
      // new store
      state.isUserAuthenticated = action.payload.isUserAuthenticated;
      state.user = action.payload.user;
    },
    logoutUser(state) {
      state.isUserAuthenticated = false;
      localStorage.removeItem('auth-token')
      localStorage.removeItem('user')
      state.user = null;
    },
  },
});

export const { addExistingUser, logoutUser } = loginReducer.actions;
export default loginReducer.reducer;
