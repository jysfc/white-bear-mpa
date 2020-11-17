import React from "react";
import thumbsUpIcon from "../../icon/thumbs-up.svg";
import Header from "../ui/Header";

export default function ReviewAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               {/* <!-- Header --> */}
               <Header />
               {/* <!-- Button group --> */}
               <div
                  className="btn-group d-flex mt-1 mb-5"
                  role="navigation"
                  aria-label="navigation"
               >
                  <a href="/create-answer" className="btn btn-secondary">
                     Create new
                  </a>
                  <a
                     href="/review-cue"
                     className="btn btn-secondary tab-separator tab-active"
                  >
                     Review
                  </a>
                  <a
                     href="/all-cards"
                     className="btn btn-secondary tab-separator"
                  >
                     All cards
                  </a>
               </div>
               {/* <!-- Card --> */}
               <div className="card">
                  <div className="card-body bg-primary lead">
                     A wonderful serenity has taken possession of my entire
                     soul, like these sweet mornings of spring which I enjoy
                     with my whole heart. I am alone, and feel the charm of
                     existence in this spot, which was.
                  </div>
               </div>

               <div className="card mb-5">
                  <div className="card-body bg-secondary lead">
                     The European languages are members of the same family.
                     Their separate existence is a myth. For science, music,
                     sport, etc, Europe uses the same vocabulary. The languages
                     only differ in their grammar,.
                  </div>
               </div>

               <a href="all-cards-edit.html" className="btn btn-link">
                  Edit
               </a>
               <div className="float-right">
                  <a
                     href="/review-done.html"
                     className="btn btn-outline-primary"
                  >
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
            </div>
         </div>
      </div>
   );
}
