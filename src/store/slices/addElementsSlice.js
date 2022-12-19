import { createSlice } from '@reduxjs/toolkit'

export const addElementsSlice = createSlice({
  name: 'addElements',
  initialState: {
    addElement: []
  },
  reducers: {
    ADD_ELEMENT: (state, action) => {
      state.addElement += 1;
    },
    DELETE_ELEMENT: (state, action) => {
      state.addElement -= 1;
    },
  },
})
 