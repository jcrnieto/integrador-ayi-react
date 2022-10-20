import axios from 'axios';


export function getRecipes(){
    return async function(dispatch){
    try{
   
       var json = await axios.get("http://localhost:8080/Recipes/getAllRecipes");
       //console.log('actions', json.data)
       return dispatch({
           type: 'GET_RECIPES',
           payload: json.data
       });
    
}catch(error){
    console.log(error)
} 
}
}

export function getRecipeId(id){
    return async function(dispatch){
     try{
   
        var json = await axios.get(`http://localhost:8080/Recipes/getRecipesById/${id}`)
        console.log("ID",json.data)
        return dispatch({
            type: 'GET_ID',
            payload: json.data
        })
    
 } catch(error){
     console.log(error)
 }
}
}


export function getDiet(){
    return async function(dispatch){
    try{
        var json = await axios.get("http://localhost:8080/Diets/getAllDiets")
        //console.log('types actions', json.data)
        return dispatch({
            type: 'GET_DIET',
            payload: json.data
        })
    
    
    }catch(error){
        console.log(error)
    } 
}   
}


export function getTitle(title){
    return async function(dispatch){
    try{
        var json = await axios.get("http://localhost:8080/Recipes/searchRecipesByTitle/" + title)
        //console.log('esto es searchbar', title)
        return dispatch({
            type: 'GET_TITLE',
            payload: json.data
        })
     }catch(error){
        console.log(error)
        return dispatch({
            type: 'GET_TITLE',
            payload:[]
        })
    } 
}  
}

export function filterByDiet(payload){
    // console.log('actions',payload)
     return{
         type: 'FILTER_BY_DIET',
         payload
     }
 }

 export function postRecipe(payload){
    return async function(dispatch){
    try{
          var json = await axios.post("http://localhost:8080/Recipes/addRecipes", payload)
          return json.data
      
    }catch(error){
        console.log(error)
    }
}
}

