import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import Login from './pages/Login.tsx'
import CreateAccount from './pages/createaccount.tsx'
import ResetPasswords from './pages/resetpassword.tsx'
import VerifyEmails from './pages/verifyemail.tsx'
import SearchResults from './pages/searchresults.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path:'/create-account',
        element: <CreateAccount />
      },
      {
        path:'/reset-password',
        element: <ResetPasswords />
      },
      {
        path:'/verify-email',
        element: <VerifyEmails />
      },
      {
        path:'/search-result',
        element: <SearchResults />
      }
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
