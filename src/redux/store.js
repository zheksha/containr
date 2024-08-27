import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import containers from './containersSlice'

const rootReducer = combineReducers({
  user,
  containers,
})

export const store = configureStore({
  reducer: rootReducer,
})
