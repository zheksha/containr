import {
  signOut,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { app } from './config'
import { loginUserAction, logoutUserAction } from '../redux/userSlice'
import { store } from '../redux/store'
import { db } from './firestore'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const dispatch = (action) => {
  store.dispatch(action)
}

const googleSignIn = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user
      if (user) {
        const userRef = doc(db, 'users', user.providerData[0].uid)
        const userDoc = await getDoc(userRef)
        if (!userDoc.exists()) {
          setDoc(userRef, {
            email: user.email,
            createdAt: new Date(),
            lastLogin: new Date(),
          })
        } else {
          await updateDoc(userRef, { lastLogin: new Date() })
        }
      }
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
