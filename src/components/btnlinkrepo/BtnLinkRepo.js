import React from 'react'
import './BtnLinkRepo.css'
import linkProyectos from '../../json/linksproyectos.json'

const BtnLinkRepo = ({id}) =>
{
    return(
        <>
            {linkProyectos.filter(linkProyecto => linkProyecto.idProyectos === id).map(datos =>
            (
                <a target="_blank" rel="noreferrer" href={datos.linkrepo} key={Math.random()}>
                    <button className="link-repo">{datos.linknombre}</button>
                </a>
            ))}
        </>   
    )    
}

export default BtnLinkRepo

