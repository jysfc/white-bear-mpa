import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";
import orderBy from "lodash/orderBy";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: '[["createdAt"], ["desc"]]',
         memoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
      };
   }

   filterByInput(e) {}

   setOrder(e) {
      const newOrder = e.target.value;
      console.log(newOrder); // '[["totalSuccessfulAttempts", "createdAt"], ["desc", "desc"]]'
      this.setState({ order: newOrder }, () => {
         this.setMemoryCards();
      });
   }

   setMemoryCards() {
      const copyOfMemoryCards = [...this.state.memoryCards];
      const toJson = JSON.parse(this.state.order);
      const orderedMemoryCards = orderBy(copyOfMemoryCards, ...toJson);
      this.setState({ memoryCards: orderedMemoryCards });
   }

   setMemoryCardsOrder(e) {
      const newOrder = e.target.value;
      console.log(newOrder);
      const copyOfMemoryCards = [...this.state.memoryCards];
      const toJson = JSON.parse(newOrder);
      const orderedMemoryCards = orderBy(copyOfMemoryCards, ...toJson);
      this.setState({ order: newOrder, memoryCards: orderedMemoryCards });
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
                  <select
                     value={this.state.order}
                     className="form-control form-control-sm"
                     onChange={(e) => this.setOrder(e)}
                  >
                     <option value='[["createdAt"], ["desc"]]'>
                        Most recent
                     </option>
                     <option value='[["createdAt"], ["asc"]]'>Oldest</option>
                     <option value='[["totalSuccessfulAttempts", "createdAt"], ["asc", "asc"]]'>
                        Hardest
                     </option>
                     <option value='[["totalSuccessfulAttempts", "createdAt"], ["desc", "desc"]]'>
                        Easiest
                     </option>
                  </select>
               </div>
            </div>
            {/* <!-- cards --> */}
            {this.state.memoryCards.map((memoryCard) => {
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
