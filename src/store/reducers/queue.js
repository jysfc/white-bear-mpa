import actions from "../actions";

export default function queued(queue = [], action) {
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         queue.cards = action.payload;
         return queue;
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         queue.index = queue.index + 1;
         return queue;
      default:
         return queue;
   }
}
