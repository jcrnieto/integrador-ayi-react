const initialState = {
    recipes:[],
    recipe:[],
    types:[],
    recipes1:[],
    detail:[]
 }

 
 
 function rootReducer (state = initialState, action) {
    switch(action.type){

        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                recipes1: action.payload
            }
        
        case 'GET_ID':
            return {
                ...state,
                detail: action.payload
             }

        case 'GET_DIET':
            return{
                ...state,
                types: action.payload
                }

        case 'GET_TITLE':
             return {
            ...state,
            recipes: action.payload
            }

        case 'FILTER_BY_DIET':
            state.recipes = [...state.recipes1]
            // let allType = state.recipes?.filter((el)=>el.diet?  el.diet.includes(action.payload) : el.diets.find((e)=>e.name===action.payload))
            let allType = state.recipes?.filter((el)=>el.diet?  el.diet.includes(action.payload) : el.diets.includes(action.payload));
                 
            return{
                ...state,
                recipes : allType
            }

         case 'POST_RECIPE':
            return{
            ...state
            } 


        default:
            return state;
    }
 }
 export default rootReducer;