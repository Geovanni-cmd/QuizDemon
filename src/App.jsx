import './App.css'
import Inicio from './Componentes/inicio'
import Quiz from './Componentes/Quiz'
import Resultados from './Componentes/Resultados';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
      ></link>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
