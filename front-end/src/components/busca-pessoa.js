import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BuscaPessoa(props) {
    let { id, bgc } = props;
    let [pessoa, setPessoa] = useState([]);

    useEffect(() => {
        buscaId()
    }, []);


    function buscaId() {

        let newId = id 

        fetch(`http://localhost:5000/pessoas/${newId}`)
            .then((response) => response.json())
            .then((data) => {
                setPessoa(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            {pessoa && (
                <div className="res-container" style={{ backgroundColor: bgc }}>
                    {console.log(pessoa)}
                    <h1>{pessoa.nome}</h1>
                    <h3>{pessoa.nickname}</h3>
                    <div className="back-to-start-page">
                        <Link to="../App.js">limpar cache</Link>
                    </div>
                </div>
            )}
        </div>
    );
}
