import './App.css'
import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom'
import Home from './Home'
import Exercicio01 from './exercicios/01'

function App() {

  return (
    <>
      <h1>Exercícios de React Hooks</h1>
      <BrowserRouter>
        <ul style={{ listStyleType: 'none' /* Lista sem marcadores */ }}>
          <li> <Link to="/">Página inicial</Link> </li>
          <li> <Link to="/01">Exercício 01</Link> </li>
        </ul>

        <hr />

        {/* Routes serve para definir as rotas da minha página */}

        <div style={{ border: '1px solid blue', padding: '20px' }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/01" element={<Exercicio01 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
