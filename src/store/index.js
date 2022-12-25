import { configureStore } from '@reduxjs/toolkit'
import { elementsSlice } from './slices/elementsSlice';

export const store = configureStore({
  reducer: {
    elements: elementsSlice.reducer,
  },
})