import React from 'react'
import './BtnLinkRepo.css'
import linkProyectos from '../../json/linksproyectos.json'
import { UilGithub } from '@iconscout/react-unicons'
const BtnLinkRepo = ({id}) =>
{
    return(
        <>
            {linkProyectos.filter(linkProyecto => linkProyecto.idProyectos === id).map(datos =>
            (
                <a target="_blank" rel="noreferrer" href={datos.linkrepo} key={Math.random()}>
                    <button className="link-repo"><UilGithub size="40" color="white"/></button>
                </a>
            ))}
        </>   
    )    
}

export default BtnLinkRepo

