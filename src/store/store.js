import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers";

const initialState = {
   user: {},
   queuedCards: [],
   indexOfCurrentCard: 0,
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
