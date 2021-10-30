import React, {useEffect, createRef} from 'react';
import Navegacion from './components/navegacion/Navegacion'
import mifoto from './img/mifoto.jpeg'
import reactlogo from './img/react.png'
// import { UilAngleDown } from '@iconscout/react-unicons'

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
        imgFoto.current.style.left = pos.right-160+'px'


    }

    return (
        <>  
            <Navegacion/>
            <div className="container-app">
                <div>
                    <img ref={imgFoto} className="img-mi-foto" src={mifoto} alt=""></img>
                    <h2>Bienvenido a mi portafolio</h2>
                    <p ref={textoBienvenida}>Mi nombre es Tobias Longstaff y tengo 20 años, soy técnico en<br/>
                        informática, actualmente me encuentro estudiando Licenciatura en <br/>
                        Tecnología de la Información. Llevo 2 años trabajando como desarrollador FullStack<br/>
                        a la par que 3 años realizando soporte técnico a múltiples empresas.</p> 
                    <h2>Proyectos</h2>         
                </div>
            </div>
            <div className="container-proyectos">
                <div className="container-sistema num-1">
                    {/* <div className="container-info-sistem">
                        <div>
                            <label>Nombre: App Argall</label>
                            <a target="_blank" href="https://github.com/TobiasLongstaff/argall"></a>
                            <a target="_blank" href="https://github.com/TobiasLongstaff/API-Argall"></a>
                            <img className="img-logo-leng" alt="logo react" src={reactlogo}></img>
                        </div>
                        <div>
                            <p>Proyecto hecho con react</p>
                        </div>
                    </div> */}
                    <h3>App Argall</h3>
                    <img className="img-sist-app" loading="lazy" src="https://media2.giphy.com/media/3Xrxqry193wcDakOzC/giphy.gif?cid=790b761124e220564a5d8f956de84b987e98d488e3a4033e&rid=giphy.gif&ct=g" alt="App Argall"></img>
                </div>
                <div className="container-sistema num-2">
                    <h3>Sentidos Activos</h3>
                    <img className="img-sist" loading="lazy" src="https://media4.giphy.com/media/nATlylACjEP85qhOiP/giphy.gif?cid=790b76115c915521918fb3740d683510b2d00d1380ef55ec&rid=giphy.gif&ct=g" alt="Sentidos Activos"></img>
                </div>
                <div className="container-sistema num-3">
                    <h3>Drive Comercial</h3>
                    <img className="img-sist" loading="lazy" src="https://media4.giphy.com/media/YxWEaIFzCrmXebwPIb/giphy.gif" alt="Drive Comercial"></img>
                </div>
                <div className="container-sistema num-4">
                    <h3>Viewing Management</h3>
                    <img className="img-sist" loading="lazy" src="https://media4.giphy.com/media/Iu7gFzhJTWxv37Agvo/giphy.gif?cid=790b7611dd8d25adf4b6415caef2e20359605017728dd194&rid=giphy.gif&ct=g" alt="Viewing Management"></img>
                </div>
            </div> 
            <div className="container-app">
                <div>
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
                                <img className="img-logo-leng" loading="lazy" src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494740.png?token=exp=1635621354~hmac=0c59d2f6b30d941fc627457f319552d6" alt="Git"></img>
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
                    <p>Nivel de Ingles basico</p>
                    <p>Aparte de aprender más a fondo las tecnologías con las que trabajo también tengo pendiente aprender:</p>
                    <h2>Sobre mi</h2>
                    <p></p>
                    
                </div>
            </div>
            <footer>
            </footer>
        </>
    );
}

export default App;
