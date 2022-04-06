import { combineReducers } from "redux";
import AdminReducer from "./AdminReducer";
import RoleReducer from "./RoleReducer";

const rootReducer = combineReducers({
    AdminReducer,
    RoleReducer
})

export default rootReducer;