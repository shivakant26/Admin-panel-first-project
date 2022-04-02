import { GET_USER_DETAILS_SUCCESS } from '../ActionType'

const initialState = {
    data:[]
}


const AdminReducer = (state = initialState , action) =>{
    switch(action.type){
        case GET_USER_DETAILS_SUCCESS :
            return{
                ...state,
                data:action.payload
            }
            break;
            default:
                return state
    }
}

export default AdminReducer;