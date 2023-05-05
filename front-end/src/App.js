import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import ColorR from './components/ColorR';
import ColorG from './components/ColorG';
import BuscaPessoa from './components/busca-pessoa';

function App() {

  return (
    <>
      <header>
        <div className="btn-nav">
          <Link to='/pessoa1'>ColorR</Link>
        </div>
        <div className="btn-nav">
          <Link to='/pessoa2'>ColorG</Link>
        </div>
        <div className="btn-nav">
          <Link to='./pessoa3'>BuscaPessoa</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/pessoa1' element={<ColorR/>}/>
          <Route path='/pessoa2' element={<ColorG/>}/>
          <Route path='/pessoa3' element={<BuscaPessoa id="1" bgc='blue'/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App