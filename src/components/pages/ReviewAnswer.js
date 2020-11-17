import React from "react";
import AppTemplate from "../ui/AppTemplate";
import thumbsUpIcon from "../../icon/thumbs-up.svg";

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         {/* <!-- Card --> */}
         <div className="card">
            <div className="card-body bg-primary lead">
               A wonderful serenity has taken possession of my entire soul, like
               these sweet mornings of spring which I enjoy with my whole heart.
               I am alone, and feel the charm of existence in this spot, which
               was.
            </div>
         </div>

         <div className="card mb-5">
            <div className="card-body bg-secondary lead">
               The European languages are members of the same family. Their
               separate existence is a myth. For science, music, sport, etc,
               Europe uses the same vocabulary. The languages only differ in
               their grammar,.
            </div>
         </div>

         <a href="all-cards-edit.html" className="btn btn-link">
            Edit
         </a>
         <div className="float-right">
            <a href="/review-done.html" className="btn btn-outline-primary">
               Needs work
            </a>
            <a href="/review-done.html" className="btn btn-primary ml-4">
               <img
                  src={thumbsUpIcon}
                  width="20px"
                  alt=""
                  style={{ marginBottom: "5px", marginRight: "8px" }}
               />
               Got it
            </a>
         </div>
      </AppTemplate>
   );
}
