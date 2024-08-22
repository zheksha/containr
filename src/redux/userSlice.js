import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: null,
    uid: null,
    isLoggedIn: false,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserAction: (state, action) => {
      state.user = { ...action.payload, isLoggedIn: true }
      return state
    },
    logoutUserAction: (state, action) => {
      state.user = { ...action.payload, isLoggedIn: false }
      return state
    },
  },
})

export const { loginUserAction, logoutUserAction } = userSlice.actions

export default userSlice.reducer
