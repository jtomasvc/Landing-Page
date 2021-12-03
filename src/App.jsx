import React from 'react';
import Inicio from './pages/Inicio'
import Terminoscondiciones from './pages/Terminoscondiciones'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/terminosycondiciones" element={<Terminoscondiciones/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
