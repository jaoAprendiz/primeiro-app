import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './components/Componente1';

function App() {
  
  const nome = 'João Soave';

  return (
    <div>
      <h1>Primeira Aula</h1>
      <br />
      <p>Nossa primeira aula - {nome}</p>
      <Componente1/>
    </div>
  )
}

export default App
