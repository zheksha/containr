import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { app } from './config'
import { store } from '../redux/store'
import { setContainersAction } from '../redux/containersSlice'

export const db = getFirestore(app)

export const getUserData = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userDoc = await getDoc(userRef)
    const { containers } = userDoc.data()
    if (containers.length > 0) {
      store.dispatch(setContainersAction(containers))
    }
  } catch (error) {
    console.error(error)
  }
}

export const updateUserData = async (containers) => {
  const { user } = store.getState()
  try {
    const userRef = doc(db, 'users', user.uid)
    await updateDoc(userRef, containers)
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}
