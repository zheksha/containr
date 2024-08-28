import { Toaster } from 'sonner'
import './App.css'
import ContainerDetailsComponent from './components/ContainerDetailsComponent'
import { ContainersComponent } from './components/ContainersComponent'
import { ItemsComponent } from './components/ItemsComponent'
import { NavigationMenuComponent } from './components/NavigationMenuComponent'
import { ResizableComponent } from './components/ResizableComponent'

const App = () => {
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
