import { configureStore } from '@reduxjs/toolkit'
import elementsReducer from './elementsSlice'
import ctorReducer from './constructorSlice'

export const store = configureStore({
  reducer: {
    elements: elementsReducer,
    ctor: ctorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
