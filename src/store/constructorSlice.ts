import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConstructorMode } from '@Types/store'

export interface CtorState {
  mode: ConstructorMode
  elements: any[]
  equation: string
}

const initialState: CtorState = {
  mode: 'Constructor',
  elements: [],
  equation: '',
}

export const ctorSlice = createSlice({
  name: 'ctor',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<ConstructorMode>) => {
      state.mode = action.payload
    },
    addElement: (state, action: PayloadAction<string>) => {
      if (!state.elements.includes(action.payload)) {
        state.elements.push(action.payload)
      }
    },
    removeElement: (state, action: PayloadAction<string>) => {
      state.elements = state.elements.filter((el) => el !== action.payload)
    },
    pushEquation: (state, action: PayloadAction<string>) => {
      if (action.payload === '=') {
        if (state.equation === 'Invalid syntax!') {
          state.equation = ''
        }
        try {
          // eslint-disable-next-line no-eval
          state.equation = eval(state.equation)
        } catch (error) {
          state.equation = 'Invalid syntax!'
        }
        return
      }
      if (action.payload === 'x') {
        state.equation += '*'
        return
      }
      state.equation += action.payload
    },
  },
})

export const { changeMode, addElement, removeElement, pushEquation } = ctorSlice.actions
export default ctorSlice.reducer
