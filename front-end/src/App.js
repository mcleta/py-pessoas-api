import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import BuscaPessoa from './components/busca-pessoa';

function App() {

  return (
    <>
      <header>
        <div className="btn-nav">
          <Link to='/pessoa1'>Busca jogador 1</Link>
        </div>
        <div className="btn-nav">
          <Link to='/pessoa2'>Busca jogador 2</Link>
        </div>
        <div className="btn-nav">
          <Link to='./pessoa3'>Busca jogador 3</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/pessoa1' element={<BuscaPessoa id={1} bgc='blue'/>}/>
          <Route path='/pessoa2' element={<BuscaPessoa id={2} bgc='blue'/>}/>
          <Route path='/pessoa3' element={<BuscaPessoa id={3} bgc='blue'/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App