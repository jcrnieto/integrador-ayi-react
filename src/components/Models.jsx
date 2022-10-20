import React from "react";
import imageDefault from "../images/imagen-default.jpg"
import { Link } from 'react-router-dom'
import "./models.css";

function Models({
  image,
  title,
  calories,
  score,
  description,
}) {
  
  //const dietsFinal= diets + ' ';
 
  return (
    <div className="detail-container">
      <div className="detail-summary-container">
        <h3 className="detail-title">{title}</h3>
        <img
          className="imagen-receta"
          src={image ? image : imageDefault}
          alt="receta"
        />
        <div className="detail-score-container">
          <div className="detail-score-title">Puntuación</div>
          <div className="detail-score-title">Calorias</div>
        </div>
        <div className="detail-score-container">
          <div className="detail-score">{score}</div>
          <div className="detail-score">{calories}</div>
        </div>
        <div className="">
          <div className="detail-step-title">Detalle</div>
        </div>
        <div className="detail-pasoapaso">
          <div className="detail-step">{description}</div>
        </div>
        <div className='div-botton-volver'><Link to={'/home'}><button className='boton-volver'>Volver a página principal</button></Link></div>
      </div>
      
    </div>
  );
}

export default Models;