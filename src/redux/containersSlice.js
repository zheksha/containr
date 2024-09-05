import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  containersList: [],
  selectedContainer: {},
}

const containersSlice = createSlice({
  name: 'containers',
  initialState,
  reducers: {
    setContainersAction: (state, action) => {
      state.containersList = action.payload
      return state
    },
    addContainerAction: (state, action) => {
      state.containersList.push(action.payload)
      return state
    },
    selectedContainerAction: (state, action) => {
      state.selectedContainer = action.payload
      return state
    },
    addItemAction: (state, action) => {
      for (let i = 0; i < state.containersList.length; i++) {
        if (
          state.containersList[i].id === action.payload.selectedContainer.id
        ) {
          state.containersList[i].items.push(action.payload.item)
          state.selectedContainer = state.containersList[i]
          break
        }
      }
      return state
    },
  },
})

export const {
  addContainerAction,
  selectedContainerAction,
  addItemAction,
  setContainersAction,
} = containersSlice.actions

export default containersSlice.reducer
