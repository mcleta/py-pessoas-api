import React from 'react';
import { Link } from "react-router-dom";

function ColorR(){
  return (
      <div class="res-container" style={{ 
        backgroundColor: 'red',
      }}>
          <h1>ColorRed</h1>
          <div class="back-to-start-page">
            <Link to="/">esconder</Link>
          </div>
      </div>
  );
}

export default ColorR;
