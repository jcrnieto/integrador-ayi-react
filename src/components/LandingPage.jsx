import React from "react";
import {Link} from 'react-router-dom';
import './landingPage.css';



export default function LandingPage(){
    return(
        <div className='landing'>
            <h1 className="titulos-bienvenido">¿Buscás recetas ricas y sanas?</h1>
            <Link to={'/home'}>
                <button className="boton-landing">Ingresar</button>
            </Link>
        </div>
    )
}