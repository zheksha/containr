import './App.css'
import { Containers } from './components/Containers'
import { Items } from './components/Items'
import { NavigationMenuComponent } from './components/NavigationMenuComponent'
import { ResizableComponent } from './components/ResizableComponent'
import { ThemeProvider } from './components/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavigationMenuComponent />
      <ResizableComponent
        primary={<Items />}
        secondary={<Containers />}
        tertiary={'three'}
      />
    </ThemeProvider>
  )
}

export default App
