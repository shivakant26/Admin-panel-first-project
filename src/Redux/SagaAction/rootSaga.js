import { fork, all } from 'redux-saga/effects';
import {adminSaga} from "./adminSaga";
import { roleSaga } from "./roleSage";


export default function* rootSaga (){
    yield all( [
        fork(adminSaga),
        fork(roleSaga)
    ])
}