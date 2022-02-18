import React from 'react'
import { Animator, ScrollContainer, ScrollPage, Fade } from 'react-scroll-motion'
import Navegacion from './components/navegacion/Navegacion'
import mifoto from './img/mifoto.jpeg'
import { UilLinkedin, UilGithub} from '@iconscout/react-unicons'
import  Proyectos from './components/proyectos/Proyectos'
import  Habilidades from './components/habilidades/Habilidades'
import SobreMi from './components/sobreMi/SobreMi'


const App = () =>
{
    return (
        <>  
            <Navegacion/>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={Fade()}>
                        <div className="container-app">
                            <div className="container-bienvenida">
                                <div className="container-texto-bienvenida">
                                    <div className="container-img-bienvenida">
                                        <div className="container-text-img">
                                            <div>
                                                <h1 className="titulo-bienvenida">Bienvenido a mi portafolio</h1>
                                                <p className="text-bienvenida">Mi nombre es Tobias Longstaff y tengo 20 años, soy técnico en informática, actualmente me encuentro estudiando Licenciatura</p>
                                            </div>
                                        </div>
                                        <div className="container-img-mifoto">
                                            <img className="img-mi-foto" src={mifoto} alt="mi foto"></img>
                                        </div>
                                    </div>
                                    <p className="text-bienvenida">
                                        en Tecnología de la Información. Llevo 2 años trabajando como desarrollador FullStack a la par que 3 años realizando soporte técnico a múltiples empresas.
                                    </p>                                     
                                </div>
                                <div className="container-redes">
                                    <a href="https://github.com/TobiasLongstaff/" className="link-cont" target="_blank" rel="noreferrer"><UilGithub size="60" color="#4834d4"/></a>
                                    <a href="https://www.linkedin.com/in/tobias-longstaff-030351222" className="link-cont" target="_blank" rel="noreferrer"><UilLinkedin size="60" color="#4834d4"/></a>
                                </div>
                                <div className="container-scroll-mouse">
                                    <div className="container-mouse">
                                        <div className="mouse">
                                        </div>                                
                                    </div>
                                    <span className="scroll-text">Scroll</span>                            
                                </div>
                            </div>
                        </div>                        
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Proyectos/>
                </ScrollPage>
                <div className="container-info">
                    <div className="container-max">
                        <ScrollPage page={2}>
                            <SobreMi/>
                        </ScrollPage>  
                        <ScrollPage page={3}>
                            <Habilidades/>
                        </ScrollPage>                  
                    </div>
                </div>            
            </ScrollContainer>
        </>
    );
}

export default App;
