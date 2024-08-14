import './App.css'
import { NavigationMenuComponent } from './components/NavigationMenuComponent'
import { ResizableComponent } from './components/ResizableComponent'

const App = () => {
  return (
    <>
      <div>
        <NavigationMenuComponent />
        <ResizableComponent
          primary={'test'}
          secondary={'two'}
          tertiary={'three'}
        />
      </div>
    </>
  )
}

export default App
