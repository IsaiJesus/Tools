import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false
  },
  reducers: {
    logged: (state) => {
      state.auth = true
    },
  },
})

export const { logged } = authSlice.actions