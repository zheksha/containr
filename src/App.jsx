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
        tertiary={
          <ContainerDetailsComponent
            name="Living room"
            dateCreated="20 Aug, 2024"
            description="Lorem Ipsum Dolor Sit Amet"
            maxCapacity={120}
            currentCapacity={90}
          />
        }
      />
    </div>
  )
}

export default App
