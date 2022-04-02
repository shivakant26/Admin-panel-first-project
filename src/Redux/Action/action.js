import { GET_USER_DETAILS } from "../ActionType"
export const getUserDetailsAction = (data)=>{
    return{
        type:GET_USER_DETAILS,
        payload:data
    }
}