import React from 'react';
import Bemvindo from './Paginas/Bemvindo';
import EstilosGlobais from './componentes/EstilosGlobais';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Medidas from './Paginas/Medidas';
import Admin from './Paginas/Admin';
import Mensagens from './Paginas/Mensagens';
import Menu from './componentes/Menu';

function App() {
  return (
    <Router>
      <EstilosGlobais/> 
      <Menu/>
        <Routes>
          <Route path='/' element = {<Bemvindo/>} />
          <Route path='/medidas' element = {<Medidas/>} />
          <Route path='/admin' element = {<Admin/>} />
          <Route path='/mensagens' element = {<Mensagens/>} />
        </Routes>
    </Router>
  )
}

export default App