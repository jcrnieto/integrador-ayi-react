import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeId } from "../actions";
import Models from "./Models";
import "./detail.css";

export default function Detail() {
    const dispatch = useDispatch();
    const recipe = useSelector((state) => state.detail);
    //console.log('esto es recipe',recipe)
    const { id } = useParams();
    //console.log('esto es id',id)
  
    useEffect(() => {
      dispatch(getRecipeId(id));
    }, [dispatch, id]);
    return (
      <div>
        <Models
          image={recipe?.image}
          title={recipe?.title}
          calories={recipe?.calories}
          score={recipe?.score}
          description={recipe?.description}
        />
      </div>
    );
  }
  