import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ILightningBolt } from './utils/icons.utils'
import LandingPage from './pages/landingPage/Index'
import Dashboard from './pages/dashboard/Index'

function App() {
  return (
    <BrowserRouter>
     <div className='App' >
      <Routes>
        <Route 
        {...{
          path: '/',
          element: <LandingPage />
        }}
         />
         <Route 
        {...{
          path: '/dashboard',
          element: <Dashboard />
        }}
         />
      </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
