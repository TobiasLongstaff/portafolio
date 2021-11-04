import React from "react";
import './Navegacion.css'

const Navegacion = () =>
(
    <nav>
        <label className="titulo-nav">TobiasLongstaff.com</label>
        <div className="container-btn">
            <button className="btn-nav-secundarios">Proyectos</button>
            <button className="btn-nav-secundarios">Sobre mi</button>
            <a href="https://www.linkedin.com/in/tobias-longstaff-030351222" className="link-cont" target="_blank" rel="noreferrer">
                <button className="btn-nav-principal">Contactame</button>
            </a>
        </div>
    </nav>
)

export default Navegacion