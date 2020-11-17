import React from "react";

export default function Navigation() {
   return (
      <div
         className="btn-group d-flex mt-1"
         role="navigation"
         aria-label="navigation"
      >
         <a href="/create-answer" className="btn btn-secondary">
            Create new
         </a>
         <a href="/review-cue" className="btn btn-secondary tab-separator">
            Review
         </a>
         <a href="/all-cards" className="btn btn-secondary tab-separator">
            All cards
         </a>
      </div>
   );
}
