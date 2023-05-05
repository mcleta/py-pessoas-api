// import React, { useState } from "react";
// // import axios from "axios";
// import { Link } from "react-router-dom";

// export default function BuscaPessoa(id, bgc) {

//     const [pessoa, setPessoa] = useState([])

//     function banana() {
//         pessoa.addEventListener("blur", () => {
//             fetch(`http://localhost:5000/pessosas/${id}`)
//                 .then((response) => response.json())
//                 .then((res) => {
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BuscaPessoa(id, bgc) {
  const [pessoa, setPessoa] = useState([]);

  function handleBlur(event) {
    fetch(`http://localhost:5000/pessoas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPessoa(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div onBlur={handleBlur}>
      {pessoa && (
        <div key={pessoa.id} className="res-container" style={{ backgroundColor: bgc }}>
          <h1>{pessoa.nome}</h1>
          <h3>{pessoa.nickmane}</h3>
          <div class="back-to-start-page">
            <Link to="../App.js">esconder</Link>
          </div>
        </div>
      )}
    </div>
  );
}





