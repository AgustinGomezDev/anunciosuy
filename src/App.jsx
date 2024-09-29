import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import AppLayout from './layouts/AppLayout'
import NoHeaderFooterLayout from './layouts/NoHeaderFooterLayout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Post from './pages/Post'
import MyAdvert from './pages/MyAdvert'
import NotFound from './pages/NotFound'
import Adverts from './pages/Adverts'
import AdvertDetail from './pages/AdvertDetail'

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Landing />
        },
        {
          path: "/publicar",
          element:
            <ProtectedRoute>
              <Post />
            </ProtectedRoute>
        },
        {
          path: "/publicar/mi-anuncio/:id",
          element:
            <ProtectedRoute>
              <MyAdvert />
            </ProtectedRoute>
        },
        {
          path: "/anuncios",
          element: <Adverts />
        },
        {
          path: "/anuncios/:id",
          element: <AdvertDetail />
        },
        {
          path: "*",
          element: <NotFound />
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
