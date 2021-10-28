import React from "react";
import './Navegacion.css'

const Navegacion = () =>
(
    <nav>
        <h1>Tobias Longstaff</h1>
        <div className="container-btn">
            <button className="btn-nav-secundarios">Proyectos</button>
            <button className="btn-nav-secundarios">Sobre mi</button>
            <button className="btn-nav-principal">Contactame</button>
        </div>
    </nav>
)

export default Navegacion