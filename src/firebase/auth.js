import {
  signOut,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { app } from './config'
import { loginUserAction, logoutUserAction } from '../redux/userSlice'
import { store } from '../redux/store'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const dispatch = (action) => {
  store.dispatch(action)
}

const googleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      dispatch(loginUserAction(user.providerData[0]))
    })
    .catch((error) => {
      console.error(error)
    })
}

export const handleGoogleSignIn = async () => {
  try {
    googleSignIn()
  } catch (error) {
    console.log(error)
  }
}

export const handleLogout = () => {
  signOut(auth)
    .then(() => {
      dispatch(logoutUserAction({}))
    })
    .catch((error) => {
      console.error(error)
    })
}
