import React from 'react';
import {Animator, Fade} from 'react-scroll-motion'
import IcoLeng from '../ico-leng/IcoLeng'
import dataHabiPrin from '../../json/habilidadesPrin.json'
import dataHabi from '../../json/habilidades.json'
import dataNoHabi from '../../json/poraprender.json'
import './Habilidades.css'

const Habilidades = () =>
{
    return(
        <Animator animation={Fade()}>
            <div className="container-habilidades-info">
                <h2>Habilidades</h2>
                <p>Estas son algunas de la tecnología con las que trabajo:</p>       
                <div className="container-habilidades">
                    <div className="container-header-habilidades">
                        <IcoLeng tipo={dataHabiPrin}/>
                    </div>
                    <div className="container-body-habilidades">
                        <IcoLeng tipo={dataHabi}/>
                    </div>
                </div>
                <p>Aparte de aprender más a fondo las tecnologías con las que trabajo también tengo pendiente aprender:</p>
                <div className="container-habilidades-por-aprender">
                    <IcoLeng tipo={dataNoHabi}/>
                </div>                 
            </div>
        </Animator>
    )
}

export default Habilidades