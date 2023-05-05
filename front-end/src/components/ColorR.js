import React from 'react';
import { Link } from "react-router-dom";

function ColorR(){
  return (
      <div className="res-container" style={{ 
        backgroundColor: 'red',
      }}>
          <h1>ColorRed</h1>
          <div className="back-to-start-page">
            <Link to="/">esconder</Link>
          </div>
      </div>
  );
}

export default ColorR;
