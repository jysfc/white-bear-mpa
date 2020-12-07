import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./combineReducers";

const initialState = {
   user: {},
   queue: {
      cards: [],
      index: 0,
   },
   indexOfCurrentCard: 0,
};

const store = createStore(combineReducers, initialState, composeWithDevTools());

export default store;
