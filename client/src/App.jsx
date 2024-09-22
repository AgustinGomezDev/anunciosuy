import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import AppLayout from './layouts/AppLayout'
import NoHeaderFooterLayout from './layouts/NoHeaderFooterLayout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { AuthProvider } from './context/AuthContext'

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Landing />
        }
      ],
    },
    {
      element: <NoHeaderFooterLayout />,
      children: [
        {
          path: "/registro",
          element: <SignUp />
        },
        {
          path: "/inicio-sesion",
          element: <SignIn />
        }
      ]
    }
  ])
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
