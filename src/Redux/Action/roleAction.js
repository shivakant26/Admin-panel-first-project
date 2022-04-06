import { GET_ROLE_DETAILS } from "../ActionType"

export const getRoleDetailsAction = (role)=>{
    return{
        type:GET_ROLE_DETAILS,
        payload:role
    }
}