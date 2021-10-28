import React from 'react';
import Navegacion from './components/navegacion/Navegacion'
import imgsist1 from './img/SentidosActivos.png'
import { UilAngleDown } from '@iconscout/react-unicons'

function App() {
    return (
        <>  
            <Navegacion/>
            <div className="container-app">
                <div>
                    <h2>Bienvenido a mi portafolio</h2>
                    <p>Mi nombre es Tobias Longstaff y tengo 20 años, soy técnico en informática<br/>
                        y actualmente me encuentro estudiando Licenciatura en Tecnología de la<br/>
                        Información. Llevo 2 años trabajando como desarrollador FullStack<br/>
                        a la par que 3 años realizando soporte técnico a múltiples empresas.</p> 
                    <h2>Proyectos</h2>              
                </div>
            </div>
            <div className="container-proyectos">
                <div className="container-sistema num-1">
                    <h3>Sentidos Activos</h3>
                    <img className="img-sist" src={imgsist1} alt="Sentidos Activos"></img>
                    <div className="container-btn-sist">
                        <button className="btn-mas-info-sist"><UilAngleDown color="white" size="40"/></button>
                    </div>
                </div>
                <div className="container-sistema num-2">
                    <h3>Sentidos Activos</h3>
                    <img className="img-sist" src={imgsist1} alt="Sentidos Activos"></img>
                    <div className="container-btn-sist">
                        <button className="btn-mas-info-sist"><UilAngleDown color="white" size="40"/></button>
                    </div>
                </div>
                <div className="container-sistema num-3">
                    <h3>Sentidos Activos</h3>
                    <img className="img-sist" src={imgsist1} alt="Sentidos Activos"></img>
                    <div className="container-btn-sist">
                        <button className="btn-mas-info-sist"><UilAngleDown color="white" size="40"/></button>
                    </div>
                </div>
                <div className="container-sistema num-4">
                    <h3>Sentidos Activos</h3>
                    <img className="img-sist" src={imgsist1} alt="Sentidos Activos"></img>
                    <div className="container-btn-sist">
                        <button className="btn-mas-info-sist"><UilAngleDown color="white" size="40"/></button>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default App;
