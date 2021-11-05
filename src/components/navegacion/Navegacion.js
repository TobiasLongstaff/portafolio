import React from "react";
import './Navegacion.css'
import { animateScroll as scroll } from 'react-scroll'

const Navegacion = () =>
{
    const scrollProyecto = () =>
    {
        scroll.scrollTo(1010);
    }

    const scrollSobreMi = () =>
    {
        scroll.scrollTo(1900);
    }

    const scrollHabilidades = () =>
    {
        scroll.scrollToBottom()
    }

    return(
        <nav>
            <label className="titulo-nav">TobiasLongstaff.com</label>
            <div className="container-btn">
                <button onClick={scrollProyecto} className="btn-nav-secundarios">Proyectos</button>
                <button onClick={scrollSobreMi} className="btn-nav-secundarios">Sobre mi</button>
                <button onClick={scrollHabilidades} className="btn-nav-secundarios">Habilidades</button>
                <a href="https://www.linkedin.com/in/tobias-longstaff-030351222" className="link-cont" target="_blank" rel="noreferrer">
                    <button className="btn-nav-principal">Contactame</button>
                </a>
            </div>
        </nav>
    )
}


export default Navegacion