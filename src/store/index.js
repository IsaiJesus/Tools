import { configureStore } from '@reduxjs/toolkit'
import { addElementsSlice } from './slices/addElementsSlice';

export const store = configureStore({
  reducer: {
    addElement: addElementsSlice.reducer,
  },
})