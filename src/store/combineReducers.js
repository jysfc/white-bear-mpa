import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import queue from "./reducers/queue";

export default combineReducers({
   currentUser,
   queue,
});
