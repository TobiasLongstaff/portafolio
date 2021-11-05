import React from 'react'
import './IcoLeng.css'

const IcoLeng = ({tipo, id}) =>
{
    if(id)
        return(
            <>
                {tipo.filter(tipos => tipos.id === id).map(leng =>
                (
                    <div className="container-logo-leng" key={Math.random()}>
                        <img className="img-logo-leng" loading="lazy" src={leng.icono} alt={leng.leng}></img>
                    </div>
                ))}
            </>   
        )  
    return(
        <>
            { tipo.map(leng => {
                return(
                    <div className="container-logo-leng" key={Math.random()}>
                        <img className="img-logo-leng" loading="lazy" src={leng.icono} alt={leng.leng}></img>
                    </div>
                )
            }) }                
        </>
    )
}

export default IcoLeng