import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { AppProvider } from './Contexto/Contexto';


import Aleatorios from "./Componentes/Aleatorios"
import Capturados from "./Componentes/Capturados"
import Favoritos from "./Componentes/Favoritos"
import Lista from "./Componentes/Lista"
import Pokemon from "./Componentes/Pokemon"
import Usuarios from "./Componentes/Usuarios"
import Menu from "./Componentes/Menu";

function App(){

  return(
    <AppProvider>
    <Router>
      <Menu/>
      
      <Routes>
      <Route path="/" element={<Lista />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/Aleatorios" element={<Aleatorios />} />
        <Route path="/Capturados" element={<Capturados />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Pokemon/:name" element={<Pokemon />} />
        


      </Routes>
    
    </Router>
    </AppProvider>
  )
}

export default App
