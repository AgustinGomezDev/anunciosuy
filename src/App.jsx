import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import AppLayout from './layouts/AppLayout'
import NoHeaderFooterLayout from './layouts/NoHeaderFooterLayout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Post from './pages/Post'
import NotFound from './pages/NotFound'
import Adverts from './pages/Adverts'
import AdvertDetail from './pages/AdvertDetail'
import Account from './pages/Account'
import EditAdvert from './pages/EditAdvert'
import DeleteAdvert from './pages/DeleteAdvert'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiesPolicy from './pages/CookiesPolicy'
import HelpCenter from './pages/HelpCenter'
import Categories from './pages/Categories'

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
          path: "/anuncios",
          element: <Adverts />
        },
        {
          path: "/anuncios/:id",
          element: <AdvertDetail />
        },
        {
          path: "/anuncios/editar/:id",
          element:
            <ProtectedRoute>
              <EditAdvert />
            </ProtectedRoute>
        },
        {
          path: "/anuncios/borrar/:id",
          element:
            <ProtectedRoute>
              <DeleteAdvert />
            </ProtectedRoute>
        },
        {
          path: "/cuenta",
          element:
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
        },
        {
          path: "/terminos-y-condiciones",
          element: <TermsAndConditions />
        },
        {
          path: "/politica-de-privacidad",
          element: <PrivacyPolicy />
        },
        {
          path: "/politica-de-cookies",
          element: <CookiesPolicy />
        },
        {
          path: "/centro-de-ayuda",
          element: <HelpCenter />
        },
        {
          path: "/categorias",
          element: <Categories />
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
