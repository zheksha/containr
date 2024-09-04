import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginComponent } from './components/LoginComponent'
import { ThemeProvider } from './components/ThemeProvider'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Protected } from './components/Protected'

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
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
)
