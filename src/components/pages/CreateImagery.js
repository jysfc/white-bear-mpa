import React from "react";
import appBearLogo from "../../icon/logo-app.svg";
import saveIcon from "../../icon/save.svg";

export default function CreateImagery() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <img src={appBearLogo} width="32px" alt="White Bear Logo" />
               <h3 className="d-inline text-brand text-dark ml-1">
                  White Bear
               </h3>
               <a href="/index.html" className="btn btn-link float-right">
                  Log out
               </a>
               <div className="clearfix"></div>

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

               {/* <!-- Comment above card --> */}
               <h3 className="text-center lead text-muted my-2">
                  Add memorable imagery
               </h3>

               {/* <!-- Card --> */}
               <div className="card">
                  <div className="card-body bg-primary lead">
                     <textarea
                        rows="6"
                        id="imagery-input"
                        autoFocus={true}
                     ></textarea>
                  </div>
               </div>

               <div className="card">
                  <div className="card-body bg-secondary lead">
                     The European languages are members of the same family.
                     Their separate existence is a myth. For science, music,
                     sport, etc, Europe uses the same vocabulary. The languages
                     only differ in their grammar,.
                  </div>
               </div>

               {/* <!-- Word count --> */}
               <p
                  className="float-right mt-2 mb-5 text-muted"
                  id="imagery-characters"
               >
                  <span id="imagery-char-count">0</span>/240
               </p>
               <div className="clearfix"></div>

               {/* <!-- buttons --> */}
               <a
                  href="/create-answer"
                  className="btn btn-link"
                  id="back-to-answer"
               >
                  Back to answer
               </a>

               <a
                  href="/create-answer"
                  className="btn btn-primary btn-lg ml-4 float-right"
                  id="save-card"
               >
                  <img
                     src={saveIcon}
                     width="20px"
                     alt=""
                     style={{ marginBottom: "3px", marginRight: "4px" }}
                  />
                  Save
               </a>
            </div>
         </div>
      </div>
   );
}
