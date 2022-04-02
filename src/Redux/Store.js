import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer";
import createSagaMiddleware from 'redux-saga';
import rootsaga from "./SagaAction/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootsaga);

export default store;