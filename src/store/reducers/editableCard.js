import actions from "../actions";

export default function editableCard(editableCard = {}, action) {
   let newEditableCard = { ...editableCard };
   switch (action.type) {
      case actions.STORE_EDITABLE_CARD:
         newEditableCard.cards = action.payload.card;
         newEditableCard.prevRoute = action.payload.prevRoute;
         return newEditableCard;
      default:
         return editableCard;
   }
}
