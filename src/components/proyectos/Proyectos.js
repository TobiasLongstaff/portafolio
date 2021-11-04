import React from 'react';
import { UilGithub } from '@iconscout/react-unicons'
import reactlogo from '../../img/react.png'
import { Animator, MoveIn } from 'react-scroll-motion'

const Proyectos = () => 
(
    <div className="container-proyectos">
            <Animator animation={MoveIn(-1000, 0)}>
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
        </Animator>
        <Animator animation={MoveIn(1000, 0)}>
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
        </Animator>
        <Animator animation={MoveIn(-2500, 0)}>
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
        </Animator>
        <Animator animation={MoveIn(2500, 0)}>
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
        </Animator>
    </div>
)

export default Proyectos