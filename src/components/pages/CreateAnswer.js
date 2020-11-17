import React from "react";
import AppTemplate from "../ui/AppTemplate";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         {/* <!-- Header --> */}
         <Header />
         {/* <!-- Navigation --> */}
         <Navigation />
         {/* <!-- Comment above Card --> */}
         <h3 className="text-center lead text-muted my-2">Add an answer</h3>

         {/* <!-- Card --> */}

         <div className="card">
            <div className="card-body bg-secondary lead">
               <textarea rows="6" id="answer-input" autoFocus={true}></textarea>
            </div>
         </div>

         {/* <!-- Word count --> */}
         <p className="float-right mt-2 mb-5 text-muted" id="answer-characters">
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
      </AppTemplate>
   );
}
