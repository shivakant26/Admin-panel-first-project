import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_USER_DETAILS , GET_USER_DETAILS_SUCCESS } from '../ActionType'
import { ApiData } from '../../Utils/getApi'


function* AddData(action){

    const response = yield call(ApiData, {apiMethod:'post',endPoints:'/users'})
    debugger;
    if(response.status===200){
        yield put({
            type:GET_USER_DETAILS_SUCCESS,
            payload:response.data
        })
    }
    else{
        console.log()
    }
    
}


export  function* adminSaga (){
    yield takeEvery(GET_USER_DETAILS,AddData)
}