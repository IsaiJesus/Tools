import { createSlice } from '@reduxjs/toolkit'

export const elementsSlice = createSlice({
  name: 'elements',
  initialState: [
    {
      title: "Title 1",
      description: "Description 1"
    }
  ],
  reducers: {
    addElement: (state, action) => {
      state.push(action.payload);
    },
  },
})
 
export const { addElement } = elementsSlice.actions;