import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getRecipes,
    getDiet,
    filterByDiet,
   } from "../actions";
  import Paginado from "./Pagination";
  import Cards from "./Cards";
  import "./home.css";
  import SearchBar from "./SearchBar";


export default function Home(){
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const allDiets = useSelector((state) => state.types);
  //console.log("useselector",allDiets)

  const [orden, setOrden] = useState("");
   const [paginaActual, setPaginaActual] = useState(1);
   const [recetasPorPagina, setRecetasPorPagina] = useState(4);
   const ultimaReceta = paginaActual * recetasPorPagina;
   const primerReceta = ultimaReceta - recetasPorPagina;
   const recetasActuales = allRecipes.slice(primerReceta, ultimaReceta);

  const paginacion = (pageNumber) => {
     setPaginaActual(pageNumber);
  };

    useEffect(() => {
        dispatch(getRecipes());
        dispatch(getDiet());
      }, [dispatch]);

  function handleClick(e) {
     e.preventDefault();
     dispatch(getRecipes());
    }

    function handleFilterDiet(e) {
      e.preventDefault();
      console.log(e.target.value)
      dispatch(filterByDiet(e.target.value));
      setPaginaActual(1);
      setOrden(`ordenado ${e.target.value}`);
    }


   return(
    <div className="container-general">
        <div className='container-nav'>
           <h1 className="titulos">Recetas Saludables</h1>
           <Link className="link-nueva-receta" to="/recipe">
                 Crea tu propia receta
           </Link>
            <button className='boton-cargar-recetas' onClick={(e) => handleClick(e)}>Volver a cargar Recetas</button>
            <SearchBar /> 
           <select className='dietas' onChange={(e) => handleFilterDiet(e)}>
        {allDiets?.map((el) => (
          <option key={el.idDiets} value={el.typeOfDiet}>
            {el.typeOfDiet}
          </option>
        ))}
      </select> 
        </div>

        <div className='container-cards'>
       <Paginado
        paginacion={paginacion}
        recetasPorPagina={recetasPorPagina}
        allRecipes={allRecipes.length}
      /> 
      <div className="cards-container">
        { recetasActuales.length > 0 ? (
          recetasActuales?.map((el) => {
          //console.log("receta",el)
          return (
            <div className="cards-item" key={el.idRecipes}>
              <Link className="link-receta" to={"/home/" + el.idRecipes}>
                <Cards
                  imagen={el.image? el.image : el.imagen}
                  title={el.title}
                  diets={el.diets.typeOfDiet} 
                  calories= {el.calories}
                  key={el.idRecipes}
                />
              </Link>
            </div>
          );
        })): <div><h1>No se encontró receta</h1></div>}
      </div>
     </div>
    </div>
   )
}