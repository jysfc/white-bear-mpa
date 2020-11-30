import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[3];

export default function ReviewCue() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         {/* <!-- Card --> */}
         <div className="card">
            <div className="card-body bg-primary lead mb-5">
               {memoryCard.imagery}
            </div>
         </div>

         {/* <!-- buttons --> */}
         <Link to="/review-answer" className="btn btn-link" id="back-to-answer">
            Previous card
         </Link>
         <Link
            to="/review-answer"
            className="btn btn-outline-primary float-right"
         >
            Show answer
         </Link>
      </AppTemplate>
   );
}
