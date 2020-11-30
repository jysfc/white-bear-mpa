import React from "react";
import AppTemplate from "../ui/AppTemplate";
import thumbsUpIcon from "../../icon/thumbs-up.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[3];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         {/* <!-- Card --> */}
         <div className="card">
            <div className="card-body bg-primary lead">
               {memoryCard.imagery}
            </div>
         </div>

         <div className="card mb-5">
            <div className="card-body bg-secondary lead">
               {memoryCard.answer}
            </div>
         </div>

         <Link to="/all-cards-edit" className="btn btn-link">
            Edit
         </Link>
         <div className="float-right">
            <Link to="/review-done" className="btn btn-outline-primary">
               Needs work
            </Link>
            <Link to="/review-cue" className="btn btn-primary ml-4">
               <img
                  src={thumbsUpIcon}
                  width="20px"
                  alt=""
                  style={{ marginBottom: "5px", marginRight: "8px" }}
               />
               Got it
            </Link>
         </div>
      </AppTemplate>
   );
}
