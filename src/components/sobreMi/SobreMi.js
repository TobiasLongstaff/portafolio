import React from 'react'
import { Animator, Fade } from 'react-scroll-motion'
import { UilAngleDown} from '@iconscout/react-unicons'

const SobreMi = () =>
(
    <div className="container-sobre-mi">
        <Animator animation={Fade()}>
            <h2>Sobre mi</h2>
        </Animator>
        <div className="container-sobre-mi-data">
            <div className="container-text-sobre-mi">
                <Animator animation={Fade()}>
                    <p>
                        Desde muy chico que sentí interés por la informática y el diseño gráfico. El primer lenguaje con el que aprendí a programar fue Visual Basic a los 15 años fue cuando me di cuenta lo increíble que es llevar una idea que está en tu cabeza a un sistema informático. Desde entonces no paro de aprender y practicar nuevos lenguajes y conceptos sobre el tema.
                        <br/>También me gusta la música, toco la guitarra y la batería tengo varias listas de reproducción creadas con música que suelo escuchar por si te interesa. 
                    </p>
                </Animator>
            </div> 
            <div>
                <div className="container-fondo-codigo">
                    <Animator animation={Fade()}>
                        <div className="container-codigo op-1">
                            <header>
                                <h3>PHP</h3>
                                <UilAngleDown size="30"/>
                            </header>
                            <pre>
                                <code>
                                    <div className="container-codigo-color">
                                        <span className="codigo-color-principal">
                                            $sql="SELECT * FROM trabajadores WHERE dni = '$dni'";<br/>
                                            $resultado=mysqli_query($conexion,$sql);<br/>
                                            if($filas = mysqli_fetch_array($resultado))<br/>
                                        </span>
                                        &#123;<br/>
                                        <div className="tab">
                                            <span className="codigo-color-secundario">
                                                $id_trabajador = $filas_select['id'];<br/>
                                                $sql="UPDATE trabajadores SET nombre = '$nombre'<br/>
                                                WHERE id = '$id_trabajador'";<br/>
                                                $resultado = mysqli_query($conexion,$sql);<br/> 
                                            </span>                                                           
                                        </div>                                                       
                                    </div>
                                </code>
                            </pre>
                        </div>
                    </Animator>
                    <Animator animation={Fade()}>
                        <div className="container-codigo op-2">
                            <header>
                                <h3>JSX</h3>
                                <UilAngleDown size="30"/>
                            </header>
                            <code>
                                <div className="container-codigo-color">
                                    <span className="codigo-color-terciario">
                                        class HelloMessage extends React.Component &#123;<br/>
                                        <div className="tab">   
                                            render() &#123;<br/>  
                                            <div className="tab">
                                                return (<br/>
                                                <div className="tab"> 
                                                    &lt;div&gt;<br/>
                                                    <div className="tab"> 
                                                        Hola &#123;this.props.name&#125;<br/>
                                                    </div>
                                                    &lt;/div&gt;<br/>
                                                </div>
                                                );<br/>
                                            </div> 
                                            &#125;<br/>
                                        </div>
                                        &#125;<br/>  
                                        ReactDOM.render(
                                    </span>                                                    
                                </div>
                            </code>
                        </div>
                    </Animator>
                    <Animator animation={Fade()}>
                        <div className="container-codigo op-3">
                            <header>
                                <h3>CSS</h3>
                                <UilAngleDown size="30"/>
                            </header>
                            <code>
                                <div className="container-codigo-color">
                                    .codigo-color-principal<br/>
                                    &#123;<br/>
                                        <div className="tab"> 
                                            color: var(--font2);<br/>
                                            width: 330px;<br/>
                                            font-size: 13px;<br/>
                                            overflow: hidden;
                                            <p className="escritura-codigo">box-shadow: 0px 0px 20px 0px #161616bf;</p><br/>
                                        </div>
                                    &#125;
                                </div>
                            </code>
                        </div>
                    </Animator>
                </div>
            </div>                                
        </div>        
    </div>
)

export default SobreMi