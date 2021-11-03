import React, {useEffect, createRef} from 'react';
import Navegacion from './components/navegacion/Navegacion'
import mifoto from './img/mifoto.jpeg'
import reactlogo from './img/react.png'
import { UilGithub } from '@iconscout/react-unicons'

const App = () => 
{
    const textoBienvenida = createRef()
    const imgFoto = createRef()

    useEffect(() => 
    {
        obtener_posision()
        window.addEventListener("resize", () =>
        {
            obtener_posision()
        })
    })


    const obtener_posision = () =>
    {
        let pos = textoBienvenida.current.getBoundingClientRect()
        imgFoto.current.style.left = pos.right-207+'px'
    }

    return (
        <>  
            <Navegacion/>
            <div className="container-app">
                <div className="container-bienvenida">
                    <img ref={imgFoto} className="img-mi-foto" src={mifoto} alt=""></img>
                    <h1 className="titulo-bienvenida">Bienvenido a mi portafolio</h1>
                    <p ref={textoBienvenida}>Mi nombre es Tobias Longstaff y tengo 20 años, soy técnico en<br/>
                        informática, actualmente me encuentro estudiando Licenciatura en <br/>
                        Tecnología de la Información. Llevo 2 años trabajando como desarrollador FullStack<br/>
                        a la par que 3 años realizando soporte técnico a múltiples empresas.
                    </p>  
                    <div className="container-scroll-mouse">
                            <div className="container-mouse">
                                <div className="mouse">
                                </div>                                
                            </div>
                            <span>Scroll</span>                            
                    </div>
                </div>
            </div>
            <div className="container-proyectos">
                <div className="container-sistema num-1">
                    <h3>App Argall</h3>
                    <figure>
                        <img className="img-sist-app" loading="lazy" src="https://media2.giphy.com/media/3Xrxqry193wcDakOzC/giphy.gif?cid=790b761124e220564a5d8f956de84b987e98d488e3a4033e&rid=giphy.gif&ct=g" alt="App Argall"></img>
                    </figure>
                    <div className="capa">
                        <div className="container-info-sist">
                            <div className="container-links-sist">
                                <UilGithub size="100" color="white"/>
                                <a target="_blank" rel="noreferrer" href="https://github.com/TobiasLongstaff/argall">
                                    <button className="link-repo">App Argall</button>
                                </a><br/>
                                <a target="_blank" rel="noreferrer" href="https://github.com/TobiasLongstaff/API-Argall">
                                    <button className="link-repo">API Argall</button>
                                </a> 
                            </div>
                            <div>
                                <div className="container-img-logo-sist">
                                    <img className="img-logo-leng" loading="lazy" src={reactlogo} alt="logo react"></img>
                                    <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/402/402184.png" alt="ASP.net"></img>
                                    <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png" alt="Sql Server"></img>                                
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="container-sistema num-2">
                    <h3>Sentidos Activos</h3>
                    <figure>
                        <img className="img-sist" loading="lazy" src="https://media4.giphy.com/media/nATlylACjEP85qhOiP/giphy.gif?cid=790b76115c915521918fb3740d683510b2d00d1380ef55ec&rid=giphy.gif&ct=g" alt="Sentidos Activos"></img>
                    </figure>
                    <div className="capa">
                        <div className="container-info-sist">
                            <div className="container-links-sist">
                                <UilGithub size="100" color="white"/>
                                <a target="_blank" rel="noreferrer" href="https://github.com/TobiasLongstaff/sentidos-activos">
                                    <button className="link-repo">Sentidos Activos</button>
                                </a>
                            </div>
                            <div>
                                <div className="container-img-logo-sist">
                                    <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="Php"></img>
                                    <img className="img-logo-leng" loading="lazy" src="https://blog.artegrafico.net/wp-content/uploads/2019/02/jQuery-logo.png" alt="Jquery"></img>
                                    <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySql"></img>                                
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="container-sistema num-3">
                    <h3>Drive Comercial</h3>
                    <figure>
                        <img className="img-sist" loading="lazy" src="https://media4.giphy.com/media/YxWEaIFzCrmXebwPIb/giphy.gif" alt="Drive Comercial"></img>
                    </figure>
                    <div className="capa">
                        <div className="container-info-sist">
                            <div className="container-links-sist">
                                <UilGithub size="100" color="white"/>
                                <a target="_blank" rel="noreferrer" href="https://github.com/TobiasLongstaff/comercialespico">
                                    <button className="link-repo">Drive Comercial</button>
                                </a><br/>
                            </div>
                            <div>
                                <div className="container-img-logo-sist">
                                    <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="Php"></img>
                                    <img className="img-logo-leng" loading="lazy" src="https://blog.artegrafico.net/wp-content/uploads/2019/02/jQuery-logo.png" alt="Jquery"></img>
                                    <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySql"></img>                                 
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="container-sistema num-4">
                    <h3>Viewing Management</h3>
                    <figure>
                        <img className="img-sist" loading="lazy" src="https://media4.giphy.com/media/Iu7gFzhJTWxv37Agvo/giphy.gif?cid=790b7611dd8d25adf4b6415caef2e20359605017728dd194&rid=giphy.gif&ct=g" alt="Viewing Management"></img>
                    </figure>
                    <div className="capa">
                        <div className="container-info-sist">
                            <div className="container-links-sist">
                                <UilGithub size="100" color="white"/>
                                <a target="_blank" rel="noreferrer" href="https://github.com/TobiasLongstaff/visitas-y-contratistas">
                                    <button className="link-repo">Viewing Management</button>
                                </a><br/>
                            </div>
                            <div>
                                <div className="container-img-logo-sist">
                                    <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="Php"></img>
                                    <img className="img-logo-leng" loading="lazy" src="https://blog.artegrafico.net/wp-content/uploads/2019/02/jQuery-logo.png" alt="Jquery"></img>
                                    <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySql"></img>                                 
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, vero!</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div> 
            <div className="container-info">
                <div className="container-max">
                    <h2>Habilidades</h2>
                    <p>Estas son algunas de la tecnología con los que trabajo:</p>
                    <div className="container-habilidades">
                        <div className="container-header-habilidades">
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="Php"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src={reactlogo} alt="React"></img>                            
                            </div>
                        </div>
                        <div className="container-body-habilidades">
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="Html"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="Css"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Js"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://blog.artegrafico.net/wp-content/uploads/2019/02/jQuery-logo.png" alt="Jquery"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png" alt="Sql Server"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySql"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/52/52234.png" alt="Git"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/358/358879.png" alt="C#"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png" alt="Firebase"></img>
                            </div>
                            <div className="container-logo-leng">
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/402/402184.png" alt="ASP.net"></img>                            
                            </div>
                        </div>
                    </div>
                    <p>Aparte de aprender más a fondo las tecnologías con las que trabajo también tengo pendiente aprender:</p>
                    <div className="container-habilidades-por-aprender">
                        <div className="container-logo-leng">
                            <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Node.js"></img>
                        </div>
                        <div className="container-logo-leng">
                            <img className="img-logo-leng" loading="lazy" src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python"></img>                            
                        </div>
                    </div>
                    <div>
                        <h2>Sobre mi</h2>
                        <div className="container-text-sobre-mi">
                            <p>
                                Desde muy chico que sentí interés por la informática y el diseño gráfico. El primer lenguaje con el que aprendí a programar fue Visual Basic a los 15 años fue cuando me di cuenta lo increíble que es llevar una idea que está en tu cabeza a un sistema informático. Desde entonces no paro de aprender y practicar nuevos lenguajes y conceptos sobre el tema.
                                <br/>También me gusta la música, toco la guitarra y la batería tengo varias listas de reproducción creadas con música que suelo escuchar por si te interesa. 
                            </p>
                        </div>                        
                    </div>
                    <div>
                        <h2>Contactame</h2>
                    </div>                    
                </div>
            </div>
            <footer>
            </footer>
        </>
    );
}

export default App;
