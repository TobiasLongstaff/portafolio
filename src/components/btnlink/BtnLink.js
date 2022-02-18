import React from 'react'
import './BtnLink.css'
import { UilEye } from '@iconscout/react-unicons'

const BtnLink = ({link, nombre}) => 
{
    if(link !== 'no')
        return(
            <a target="_blank" rel="noreferrer" href={link} key={Math.random()}>
                <button className="link"><UilEye size="40" color="white"/></button>
            </a>
        )
    return(
        <p>Este proyectos es solo de uso local</p>
    )
}

export default BtnLink