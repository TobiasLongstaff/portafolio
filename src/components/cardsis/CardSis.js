import React from 'react'
import { Animator, MoveIn } from 'react-scroll-motion'
import proyectos from '../../json/proyectos.json'
import BtnLinkRepo from '../btnlinkrepo/BtnLinkRepo'
import IcoLeng from '../ico-leng/IcoLeng'
import dataLeng from '../../json/iconosist.json'
import BtnLink from '../btnlink/BtnLink'
import './CardSis.css'

const CardSis = () =>
{
    return(
        <>
            { proyectos.map(proyecto => {
                return(
                    <Animator animation={MoveIn(proyecto.scroll, 0)} key={proyecto.id}>
                        <div className={"container-sistema num-"+proyecto.id}>
                            <div className="container-titulo-sist">
                                <h3>{proyecto.nombre}</h3>
                            </div>
                            <figure>
                                <img className={proyecto.class} loading="lazy" src={proyecto.img} alt={proyecto.nombre}></img>
                            </figure>
                            <div className="capa">
                                <div className="container-info-sist">
                                    <div className="container-links-sist">
                                        <BtnLinkRepo id={proyecto.id}/>
                                        <BtnLink link={proyecto.link} nombre={proyecto.nombre}/>
                                    </div>
                                    <div>
                                        <div className="container-img-logo-sist">
                                            <IcoLeng tipo={dataLeng} id={proyecto.id}/>                             
                                        </div>
                                        <p>{proyecto.descripcion}</p>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </Animator>
                )
            }) }  
        </>
    )    
}

export default CardSis
