import { GET_ROLE_DETAILS, GET_ROLE_DETAILS_SUCCESS } from "../ActionType";
import { takeEvery, put ,call } from 'redux-saga/effects';

// function* AddRoleData(action){
//     console.log("addrolesaga",action)
//         yield put({
//             type:GET_ROLE_DETAILS_SUCCESS,
//             payload:action.payload
//         })
// }

import { ApiData } from '../../Utils/getApi'


function* AddRoleData(action){

    const response = yield call(ApiData, {apiMethod:'get',endPoints:'users'})
    if(response.status===200){
        yield put({
            type:GET_ROLE_DETAILS_SUCCESS,
            payload:response.data
        })
    }
    else{
        console.log()
    }
    
}

export  function* roleSaga (){
    yield takeEvery(GET_ROLE_DETAILS, AddRoleData)
}