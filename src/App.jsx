import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/dashboard/Index'
import { Provider } from 'react-redux'
import store from './features/store'
import LandingPage from './pages/landingPage/Index'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
