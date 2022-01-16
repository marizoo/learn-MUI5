import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppBar from './components/AppBar';
import Tour from './pages/Tour';



const App = () => {

  return (
    <BrowserRouter>
      <AppBar />

    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Tour />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App

// https://www.youtube.com/watch?v=o1chMISeTC0&list=PLtP5GR2KLHly5fnOBcvWH8ll2VdSWDR0j&index=1&t=126s
// till minute 13.
