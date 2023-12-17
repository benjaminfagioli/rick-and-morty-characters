import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Components/RootLayout/RootLayout';
import routes from '../routes';
import Home from './Views/home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      {routes.map(({Path, Element}) => 
      <Route Path={Path} key={Path} element={<Element/>}/>)}
      <Route path='*' Component={Home} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
