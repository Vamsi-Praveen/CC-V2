import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contest from './pages/Contest'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'
import Announcement from './pages/Announcement'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contest' element={<Contest/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/annonucements' element={<Announcement/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
