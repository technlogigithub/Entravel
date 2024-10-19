import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import Login from './pages/login.tsx'
import CreateAccount from './pages/createaccount.tsx'
import ResetPasswords from './pages/resetpassword.tsx'
import VerifyEmails from './pages/verifyemail.tsx'
import SearchResults from './pages/searchresults.tsx'
import SearchDetails from './pages/searchdetails.tsx'
import Checkout from './pages/checkout.tsx'
import BookingConfirmation from './pages/bookingconfirmation.tsx'

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
      },
      {
        path:'/search-deatils',
        element: <SearchDetails />
      },
      {
        path:'/checkout',
        element: <Checkout />
      },
      {
        path:'/booking-confirmation',
        element: <BookingConfirmation />
      }
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
