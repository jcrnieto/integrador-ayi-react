import "./postCreate.css";
import React from "react";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postRecipe, getRecipes, getDiet } from "../actions";
import { useDispatch, useSelector } from "react-redux";



export default function PostCreate() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allDiets = useSelector((state) => state.types);
   // console.log("diets",allDiets)
  
     const [input, setInput] = useState( {
        title: "",
        description: "",
        diets: "",
    }); 
    
    const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
          });
       // console.log(e.target.value)
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario creado con exito!");
        dispatch(postRecipe(input));
        dispatch(getRecipes())
        navigate("/home");
     };
    
     const handleDiets = (e) => {
          setInput({
            ...input,
            diets: [...input.diets, e.target.value],
             });
             console.log(e.target.value)
     }

     useEffect(() => {
        dispatch(getDiet());
      }, [dispatch]);

    return (
        <div className='container-post'>
          <h1>Crea tu propia receta</h1>
          <form className="form-post-create" onSubmit={(e) => handleSubmit(e)} >
            <div className="form-row">
              <label className="form-column form-column-label align-left">
                Título
              </label>
              <input
                className="form-column form-column-input"
                type="text"
                value={input.title}
                name="title"
                onChange={(e) => handleChange(e)}
              />
            </div>
           
            <div className="form-row">
              <label className="form-column form-column-label align-left">
                Resumen del plato
              </label>
              <input
                className="form-column form-column-input"
                type="text"
                value={input.description}
                name="description"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="form-row">
          <label className="form-column form-column-label align-left">
            Dietas
          </label>
          <select
            className="form-column form-column-input"
            onChange={(e) => handleChange(e)}
          >
            {allDiets?.map((el) => (
              <option key={el.id}>{el.typeOfDiet}</option>
            ))}
          </select>
        </div>
            
            <div className="form-row-buttons">
              <div className="form-column-buttons">
                <Link to="/home">
                  <button className="botones-simples">Volver a Home</button>
                </Link>
              </div>
              <div className="form-column-buttons">
                <button className="botones-guardar" type="submit">
                  Crea tu propia receta
                </button>
              </div>
            </div>
           
          </form> 
        </div>
      );
    }
    

