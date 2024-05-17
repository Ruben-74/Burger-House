import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'

// Creation d'un router qui definit quels sont les routes pour nos url 
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
