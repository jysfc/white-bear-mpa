import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};

      /*
EASY
orderBy([totalSuccessfulAttempts, createdAt], [desc, desc])

HARD
orderBy([totalSuccessfulAttempts, createdAt], [qsc, asc])

MOST RECENT
orderBy(createdAt, desc)

OLDEST
orderBy(createdAt, asc)


*/
   }

   render() {
      return (
         <AppTemplate>
            {/* <!-- search input --> */}
            <div className="row my-4">
               <div className="col-8">
                  <input
                     className="form-control form-control-sm"
                     type="text"
                     placeholder="Search for a word"
                  />
               </div>
               <div className="col-4">
                  <button className="btn btn-primary btn-block btn-sm">
                     Search
                  </button>
               </div>
            </div>
            {/* <!-- sort cards --> */}
            <div className="row my-4 no gutters">
               <div className="col-4">
                  <p className="text-muted mt-1">Sort card by</p>
               </div>
               <div className="col-8">
                  <select className="form-control form-control-sm">
                     <option>Most recent</option>
                     <option>Oldest</option>
                     <option>Hardest</option>
                     <option>Easiest</option>
                  </select>
               </div>
            </div>
            {/* <!-- cards --> */}
            {memoryCards.map((memoryCard) => {
               return (
                  <MemoryCard
                     answer={memoryCard.answer}
                     imagery={memoryCard.imagery}
                     key={memoryCard.id}
                  />
               );
            })}
         </AppTemplate>
      );
   }
}
