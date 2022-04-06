import { GET_ROLE_DETAILS_SUCCESS } from '../ActionType'

const initialState = {
    Role:[]
}


const RoleReducer = (state = initialState , action) =>{

    switch(action.type){
        case GET_ROLE_DETAILS_SUCCESS :
            console.log("action",action)
            return{
                ...state,
                Role:action.payload
            }
            break;
            default:
                return state
    }
}

export default RoleReducer;