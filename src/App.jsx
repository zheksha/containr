import './App.css'
import ContainerDetailsComponent from './components/ContainerDetailsComponent'
import { ContainersComponent } from './components/ContainersComponent'
import { ItemsComponent } from './components/ItemsComponent'
import { NavigationMenuComponent } from './components/NavigationMenuComponent'
import { ResizableComponent } from './components/ResizableComponent'
import { ThemeProvider } from './components/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
    </ThemeProvider>
  )
}

export default App
