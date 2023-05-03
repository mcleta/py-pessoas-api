import React from 'react';
import { Link } from "react-router-dom";

function ColorB(){
  return (
      <div class="res-container" style={{ 
        backgroundColor: 'blue'
      }}>
          <h1>ColorBlue</h1>
          <div class="back-to-start-page">
          <Link to="/">esconder</Link>
          </div>
      </div>
  );
}

export default ColorB;
