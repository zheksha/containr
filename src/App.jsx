import { Toaster } from 'sonner'
import './App.css'
import ContainerDetailsComponent from './components/ContainerDetailsComponent'
import { ContainersComponent } from './components/ContainersComponent'
import { ItemsComponent } from './components/ItemsComponent'
import { NavigationMenuComponent } from './components/NavigationMenuComponent'
import { ResizableComponent } from './components/ResizableComponent'
import { useEffect } from 'react'
import { getUserData } from './firebase/firestore'
import { useSelector } from 'react-redux'

const App = () => {
  const userData = useSelector((state) => state.user)
  useEffect(() => {
    getUserData(userData.uid)
  }, [userData.uid])

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
