import { Toaster } from 'sonner'
import './App.css'
import ContainerDetailsComponent from './components/ContainerDetailsComponent'
import { ContainersComponent } from './components/ContainersComponent'
import { ItemsComponent } from './components/ItemsComponent'
import { NavigationMenuComponent } from './components/NavigationMenuComponent'
import { ResizableComponent } from './components/ResizableComponent'
import { useEffect } from 'react'
import { getUserData, updateUserData } from './firebase/firestore'
import { useSelector } from 'react-redux'

const App = () => {
  const {
    user,
    containers: { containersList },
  } = useSelector((state) => state)
  useEffect(() => {
    getUserData(user.uid)
  }, [user.uid])

  useEffect(() => {
    if (containersList.length > 0) {
      updateUserData({ containers: containersList })
    }
  }, [containersList])

  return (
    <div className="p-8 px-24">
      <NavigationMenuComponent />
      <ResizableComponent
        primary={<ItemsComponent />}
        secondary={<ContainersComponent />}
        tertiary={<ContainerDetailsComponent />}
      />
      <Toaster richColors closeButton />
    </div>
  )
}

export default App
