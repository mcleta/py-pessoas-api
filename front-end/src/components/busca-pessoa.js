import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BuscaPessoa(props) {
    const { id, bgc } = props;
    const [pessoa, setPessoa] = useState([]);

    function buscaId(event) {
        fetch(`http://localhost:5000/pessoas/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPessoa(data);
                outraBanana();

            })
            .catch((error) => {
                console.error(error);
            });
    }

    function outraBanana() {
        return (
            <div>
                <button onClick={buscaId}>Buscar</button>
                {pessoa && (
                    <div key={pessoa.id} className="res-container" style={{ backgroundColor: bgc }}>
                        <h1>{pessoa.nome}</h1>
                        <h3>{pessoa.nickname}</h3>
                        <div className="back-to-start-page">
                            <Link to="../App.js">esconder</Link>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return outraBanana();
}
