import actions from "../actions";

export default function queuedCards(state = [], action) {
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         return action.payload;
      default:
         return state;
   }
}
