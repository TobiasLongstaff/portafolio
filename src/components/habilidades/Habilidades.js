import React from 'react';
import reactlogo from '../../img/react.png'
import { Animator, Fade} from 'react-scroll-motion'

const Habilidades = () =>
(
    <Animator animation={Fade()}>
        <div className="container-habilidades-info">
            <h2>Habilidades</h2>
            <p>Estas son algunas de la tecnología con las que trabajo:</p>       
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
        </div>

    </Animator>
)

export default Habilidades