import React from "react";
import Header from "../ui/Header";

export default function CreateAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               {/* <!-- Header --> */}
               <Header />

               {/* <!-- Navigation --> */}
               <div
                  className="btn-group d-flex mt-1"
                  role="navigation"
                  aria-label="navigation"
               >
                  <a
                     href="/create-answer"
                     className="btn btn-secondary tab-active"
                  >
                     Create new
                  </a>
                  <a
                     href="/review-cue"
                     className="btn btn-secondary tab-separator"
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

               {/* <!-- Comment above Card --> */}
               <h3 className="text-center lead text-muted my-2">
                  Add an answer
               </h3>

               {/* <!-- Card --> */}

               <div className="card">
                  <div className="card-body bg-secondary lead">
                     <textarea
                        rows="6"
                        id="answer-input"
                        autoFocus={true}
                     ></textarea>
                  </div>
               </div>

               {/* <!-- Word count --> */}
               <p
                  className="float-right mt-2 mb-5 text-muted"
                  id="answer-characters"
               >
                  <span id="answer-char-count">0</span>/240
               </p>
               <div className="clearfix"></div>

               {/* <!-- buttons --> */}
               <a
                  href="/create-imagery.html"
                  className="btn btn-outline-primary btn-lg ml-4 float-right disabled"
                  id="next"
               >
                  Next{" "}
               </a>
            </div>
         </div>
      </div>
   );
}
