import React from 'react';
import imageDefault from "../images/imagen-default.jpg"

export default function Cards({image, title, diets, calories}){   
    return(
        <div>
            {/* <img className="imagen-receta" src={(image) ? image : imageDefault} alt= 'receta'/> */}
            <img className="imagen-receta" src={image} alt= 'receta'/>
            <h3 className="title-receta">{title}</h3>
            {/* <h4 className="diet-receta">{diets}</h4> */}
            <h6 className="spoonacularScore-receta">Calorias: {calories}</h6>
        </div>
    )
}