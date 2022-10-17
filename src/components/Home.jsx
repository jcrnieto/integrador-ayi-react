import React from "react";
import { Link } from "react-router-dom";

export default function Home(){


   return(
    <div className="container-general">
        <div className='container-nav'>
           <h1 className="titulos">Recetas Saludables</h1>
           <Link className="link-nueva-receta" to="/recipe">
                 Crea tu propia receta
           </Link>
        </div>
    </div>
   )
}