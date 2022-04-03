import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConstructorElement } from '../types/store'

export interface ElementsState {
  elements: ConstructorElement[]
}

const initialState: ElementsState = {
  elements: ['screen', 'operations', 'numbers', 'equals'],
}

export const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    setElements: (state, action: PayloadAction<ConstructorElement[]>) => {
      state.elements = action.payload
    },
    addElement: (state, action: PayloadAction<ConstructorElement>) => {
      if (!state.elements.includes(action.payload)) {
        state.elements.push(action.payload)
      }
    },
    removeElement: (state, action: PayloadAction<ConstructorElement>) => {
      state.elements = state.elements.filter((el) => el !== action.payload)
    },
  },
})

export const { setElements, removeElement, addElement } = elementsSlice.actions
export default elementsSlice.reducer
