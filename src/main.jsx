import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProductPage from './ProductPage.jsx'
import FavoritePage from './FavoritePage.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/logo', element: <App />},
  {path: '/ProductPage', element: <ProductPage />},
  {path: '/FavoritePage', element: <FavoritePage />}
])
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
