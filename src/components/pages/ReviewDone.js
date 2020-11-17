import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewDone() {
   return (
      <AppTemplate>
         {/* <!-- Comment above Card --> */}
         <h4 class="text-center lead text-muted my-2">Out of cards</h4>

         {/* <!-- buttons --> */}
         <Link to="/review-answer" class="btn btn-link" id="back-to-answer">
            Previous card
         </Link>
         <Link to="/review-cue" class="btn btn-outline-primary float-right">
            Get more cards
         </Link>
      </AppTemplate>
   );
}
