import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import ColorR from './components/ColorR';
import ColorG from './components/ColorG';
import ColorB from './components/ColorB';

function App() {
  return (
    <>
      <header>
        <div clas="btn-nav">
          <Link to='/ColorR'>ColorR</Link>
        </div>
        <div clas="btn-nav">
          <Link to='/ColorG'>ColorG</Link>
        </div>
        <div clas="btn-nav">
          <Link to='/ColorB'>ColorB</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/colorR' element= {<ColorR/>}/>
          <Route path='/colorG' element= {<ColorG/>}/>
          <Route path='/colorB' element= {<ColorB/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
