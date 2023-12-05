import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Quiz from './pages/Quiz'


function App() {
  return (
    <BrowserRouter>
  
    <Routes>
      <Route  index element={<Home/>} />
      <Route  path='quiz' element={<Quiz/>} />
 
    </Routes>
   
   </BrowserRouter>
  )
}
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);