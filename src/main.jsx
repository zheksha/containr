import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginComponent } from './components/LoginComponent'
import { ThemeProvider } from './components/ThemeProvider'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { Protected } from './components/Protected'
import { ItemsComponentView } from './components/ItemsComponentView'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Protected>
        <App />
      </Protected>
    ),
  },
  {
    path: '/login',
    element: <LoginComponent />,
  },

  {
    path: '/view/:containerId',
    element: (
      <Protected>
        <ItemsComponentView />
      </Protected>
    ),
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
)
