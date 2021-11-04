import React, {useEffect, createRef, lazy, Suspense} from 'react'
import { Animator, ScrollContainer, ScrollPage, Fade } from 'react-scroll-motion'
import Navegacion from './components/navegacion/Navegacion'
import mifoto from './img/mifoto.jpeg'
import { UilLinkedin, UilGithub} from '@iconscout/react-unicons'
const Proyectos = lazy(() => import('./components/proyectos/Proyectos'))
const Habilidades = lazy(() => import('./components/habilidades/Habilidades'))
const SobreMi = lazy(() => import('./components/sobreMi/SobreMi'))


const App = () =>
{
    const textoBienvenida = createRef()
    const imgFoto = createRef()

    useEffect(() => 
    {
        obtener_posision()
        window.addEventListener("resize", obtener_posision)

        return () =>
        {
            window.removeEventListener("resize", obtener_posision)
        }
    })

    const obtener_posision = () =>
    {
        let pos = textoBienvenida.current.getBoundingClientRect()
        imgFoto.current.style.left = pos.right-207+'px'
    }

    return (
        <>  
            <Navegacion/>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={Fade()}>
                        <div className="container-app">
                            <div className="container-bienvenida">
                                <img ref={imgFoto} className="img-mi-foto" src={mifoto} alt=""></img>
                                <h1 className="titulo-bienvenida">Bienvenido a mi portafolio</h1>
                                <p ref={textoBienvenida}>Mi nombre es Tobias Longstaff y tengo 20 años, soy técnico en<br/>
                                    informática, actualmente me encuentro estudiando Licenciatura en <br/>
                                    Tecnología de la Información. Llevo 2 años trabajando como desarrollador FullStack<br/>
                                    a la par que 3 años realizando soporte técnico a múltiples empresas.
                                </p> 
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
                    <Suspense fallback={<label>Cargando...</label>}>
                        <Proyectos/>
                    </Suspense>
                </ScrollPage>
                <div className="container-info">
                    <div className="container-max">
                        <ScrollPage page={2}>
                            <Suspense fallback={<label>Cargando...</label>}>
                                <SobreMi/>
                            </Suspense>
                        </ScrollPage>  
                        <ScrollPage page={3}>
                            <Suspense fallback={<label>Cargando...</label>}>
                                <Habilidades/>
                            </Suspense>
                        </ScrollPage>                  
                    </div>
                </div>            
            </ScrollContainer>
        </>
    );
}

export default App;
