import React from 'react';
import { Link } from "react-router-dom";

function ColorG(){
  return (
      <div class="res-container" style={{ 
        backgroundColor: 'green'
      }}>
          <h1>ColorGreen</h1>
          <div class="back-to-start-page">
          <Link to="/">esconder</Link>
          </div>
      </div>
  );
}

export default ColorG;
