import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function buscaPessoa(id, bgc) {
    const [ pessoa, setPessoa ] = useState([])
    
    useEffect(() => {
        axios
        .get(`http://localhost:5000/pessosas/${id}`)
        .then( res => {
            setPessoa(res.data)
        })
        .catch()
    }, [])

    return(
        <>
            {pessoa.map( (pessoa, key) => {
                return(
                    <div key={pessoa.id} class="res-container" style={{ backgroundColor: bgc}}>
                    <h1>{pessoa.nome}</h1>
                    <h3>{pessoa.nickmane}</h3>
                    <div class="back-to-start-page">
                        <Link to="../App.js">esconder</Link>
                        </div>
                </div> 
                )               
            })}
        </>
    )
}