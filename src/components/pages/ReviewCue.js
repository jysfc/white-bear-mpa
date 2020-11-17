import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewCue() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         {/* <!-- Card --> */}
         <div className="card">
            <div className="card-body bg-primary lead mb-5">
               A wonderful serenity has taken possession of my entire soul, like
               these sweet mornings of spring which I enjoy with my whole heart.
               I am alone, and feel the charm of existence in this spot, which
               was.
            </div>
         </div>

         {/* <!-- buttons --> */}
         <button className="btn btn-link" id="back-to-answer">
            Previous card
         </button>
         <Link
            to="/review-answer"
            className="btn btn-outline-primary float-right"
         >
            Show answer
         </Link>
      </AppTemplate>
   );
}
