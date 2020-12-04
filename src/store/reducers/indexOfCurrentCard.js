import actions from "../actions";

export default function indexOfCurrentCard(state = [], action) {
   // action.payload, action.type
   switch (action.type) {
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         return action.payload;
      default:
         return state;
   }
}
