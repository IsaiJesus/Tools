import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
  },
  reducers: {
    logged: (state) => {
      state.auth = true;
      window.localStorage.setItem("login", state.auth);
    },
  },
});

export const { logged } = authSlice.actions;
